# Amarta ✦ Fragrance Management System

Amarta adalah aplikasi web full-stack modern yang dirancang untuk kurasi dan manajemen koleksi parfum premium (katalog formula wewangian). Aplikasi ini dibangun menggunakan **Nuxt 3** di sisi frontend dan backend (Nitro Server), serta diintegrasikan dengan database **MySQL** memanfaatkan **Prisma ORM 6** yang efisien.

## ✨ Fitur Utama

- **Premium UI Layout**: Tampilan estetik dengan sistem navigasi berbentuk kapsul (*pill-shaped navbar*) dan komponen premium footer yang responsif.
- **Dynamic Fragrance Catalogue**: Landing page publik untuk menampilkan koleksi formula parfum artisanal secara dinamis.
- **Full-Stack Authentication**: Sistem registrasi pengguna baru dan login autentikasi yang aman di sisi server.
- **Secure Password Hashing**: Perlindungan kredensial pengguna menggunakan enkripsi algoritma `bcryptjs`.
- **Optimal Database Connection**: Penerapan *Singleton Pattern* untuk mencegah penumpukan koneksi database saat fase pengembangan (*hot-reload*).
- **ESM & CommonJS Bridge**: Menggunakan pendekatan `createRequire` untuk menjembatani modul eksternal backend secara aman di lingkungan SSR (Server-Side Rendering) Nuxt 3.

---

## 🛠️ Tech Stack

- **Frontend & Backend Framework**: [Nuxt 3](https://nuxt.com) (Vue.js & Nitro Engine)
- **Object-Relational Mapping (ORM)**: [Prisma ORM v6](https://prisma.io) (WASM / Rust-free Engine)
- **Database**: [MySQL](https://mysql.com)
- **Bahasa Pemrograman**: [TypeScript](https://typescriptlang.org) & JavaScript
- **Keamanan**: [BcryptJS](https://github.com)

---

## 📂 Struktur Folder Penting

```text
├── layouts/
│   └── default.vue         # Layout global pembungkus (Navbar & Premium Footer)
├── pages/
│   ├── index.vue           # Landing Page Publik (Katalog Fragrance)
│   ├── login.vue           # Form Login Pengguna
│   └── register.vue        # Form Registrasi Akun Baru
├── prisma/
│   ├── schema.prisma       # Definisi Skema Tabel Database MySQL (Prisma 6)
│   └── migrations/         # Riwayat Perubahan Struktur Database
├── server/
│   ├── api/
│   │   └── auth/
│   │       ├── login.post.ts      # Endpoint API Autentikasi Masuk Akun
│   │       └── register.post.ts   # Endpoint API Pendaftaran Akun Baru
│   └── utils/
│       └── db.ts           # Inisialisasi Prisma Client (Singleton Pattern)
└── .env                    # Konfigurasi Environment Variable
```

---

## 🚀 Langkah Instalasi & Menjalankan Lokal

Ikuti panduan berikut untuk menjalankan proyek ini di komputer lokal Anda:

### 1. Klon Repositori
```bash
git clone https://github.com
cd learning-nuxt
```

### 2. Instal Dependensi
Pastikan Anda menggunakan **Node.js versi 18 ke atas** atau **Bun**.
```bash
npm install
```

### 3. Konfigurasi Environment Variable
Buat sebuah file baru bernama `.env` pada folder root proyek Anda, lalu masukkan kredensial database MySQL Anda:
```env
DATABASE_URL="mysql://root:PASSWORD_MYSQL_KAMU@127.0.0.1:3306/nuxtdb"
```
*Catatan: Pastikan Anda telah membuat database kosong bernama `nuxtdb` di MySQL lokal Anda (XAMPP/Laragon/Docker) sebelum melanjutkan.*

### 4. Sinkronisasi Database (Prisma Migration)
Jalankan migrasi untuk membuat tabel `User` secara otomatis ke dalam database MySQL Anda:
```bash
npx prisma migrate dev --name init_mysql
```

### 5. Generate Prisma Client
Bangun ulang skrip pengetikan (*strict typing*) untuk Prisma Client:
```bash
npx prisma generate
```

### 6. Jalankan Server Pengembangan
Nyalakan server lokal Nuxt 3:
```bash
npm run dev
```
Buka peramban Anda dan akses **`http://localhost:3000`** untuk melihat aplikasi berjalan.

---

## 🔒 Desain Keamanan & Pola Arsitektur

### 1. Prisma Client Singleton
Untuk mencegah galat pemutusan atau penumpukan koneksi database (*"Too many connections"*) pada server Nitro selama proses *hot-reload*, proyek ini mengimplementasikan pola *Singleton* pada file `server/utils/db.ts`:
```typescript
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { PrismaClient } = require('@prisma/client')

const createPrismaClient = () => new PrismaClient()
// Instance disimpan dalam global object selama fase development
export const prisma = globalThis.prisma ?? createPrismaClient()
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
```

### 2. Modul Autentikasi ESM
Backend Nuxt 3 berjalan menggunakan standar modul ESM murni. Karena Prisma Client dikompilasi menggunakan CommonJS, integrasi dijembatani menggunakan mekanisme runtime `createRequire` bawaan Node.js untuk memastikan kestabilan ekspor kode tanpa memicu masalah pemetaan kompilator (*Rollup Error*).

---

## 📄 Lisensi

Proyek ini dikembangkan oleh **Miftahurrahman** © 2026. Hak cipta dilindungi undang-undang.
