import bcrypt from "bcryptjs";
import { defineEventHandler, readBody, createError } from 'h3'

import { prisma } from "../../utils/db";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const user = await prisma.user.findUnique({
    where: { email: body.email }
  })

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: "Email atau password salah.",
    })
  }

  const isPasswordValid = await bcrypt.compare(body.password, user.password)

  if (!isPasswordValid) {
    throw createError({
      statusCode: 401,
      statusMessage: "Email atau password salah.",
    })
  }

  return {
    message: "Login Berhasil!",
    user: {
      id: user.id,
      username: user.username,
      email: user.email
    }
  }

})