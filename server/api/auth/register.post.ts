import bcrypt from "bcryptjs"
import { defineEventHandler, readBody, createError } from "h3"
import { prisma } from "../../utils/db"

export default defineEventHandler(async (event) => {
  // 1. Ambil data input dari form registrasi
  const body = await readBody(event)
  const { email, username, password } = body

  // 2. Validasi input sederhana
  if (!email || !username || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: "Semua kolom (email, username, password) wajib diisi.",
    })
  }

  try {
    // 3. Periksa apakah email atau username sudah terdaftar di MySQL
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: email },
          { username: username }
        ]
      }
    })

    if (existingUser) {
      throw createError({
        statusCode: 400,
        statusMessage: "Email atau Username sudah digunakan.",
      })
    }

    // 4. Enkripsi (hash) password sebelum disimpan ke database
    const hashedPassword = await bcrypt.hash(password, 10)

    // 5. Simpan user baru ke database MySQL menggunakan Prisma 6
    const newUser = await prisma.user.create({
      data: {
        email: email,
        username: username,
        password: hashedPassword,
      },
    })

    // 6. Kembalikan respons sukses (tanpa menyertakan password)
    return {
      message: "Registrasi berhasil!",
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
    }

  } catch (error: any) {
    // Tangani jika terjadi error sistem internal
    throw createError({
      statusCode: 500,
      statusMessage: error.message || "Terjadi kesalahan pada server.",
    })
  }
})
