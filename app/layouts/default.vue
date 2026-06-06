<template>
  <div class="app-container">
    <nav class="navbar">
      <div class="logo">
        <span class="logo-icon">✦</span> Ambera
      </div>

      <div class="nav-pill-wrapper">
        <ul class="nav-links">
          <li><NuxtLink to="/" class="active">Home</NuxtLink></li>
          <li>
            <NuxtLink to="/catalogue" class="dropdown-link">
              Catalogue <span class="dropdown-arrow">▼</span>
            </NuxtLink>
          </li>
          <li><NuxtLink to="/shop">Shop</NuxtLink></li>
          <li><NuxtLink to="/solutions">Solutions</NuxtLink></li>
          <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
        </ul>
      </div>

      <div class="nav-actions">
        <button class="cart-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cart-icon"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          Cart
        </button>
        <button class="register-btn">Register</button>
        <button class="profile-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </button>
      </div>
    </nav>

    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<style>
/* Reset dasar untuk memastikan tema cerah bekerja sempurna */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #ffffff;
  color: #1a1a1a;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* --- NAVBAR STYLING --- */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 3rem;
  background-color: transparent;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 9999;
}

/* Logo */
.logo {
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: -0.02em;
}

.logo-icon {
  color: #000000;
}

/* Menu Tengah berbentuk kapsul/pill seperti di gambar */
.nav-pill-wrapper {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 0.35rem 0.5rem;
  border-radius: 9999px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
}

.nav-links {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 0.25rem;
}

.nav-links a {
  color: #64748b;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

/* Efek tombol aktif atau hover pada menu kapsul */
.nav-links a:hover, .nav-links a.router-link-active, .nav-links a.active {
  color: #000000;
  background-color: #f1f5f9;
}

.dropdown-arrow {
  font-size: 0.6rem;
  color: #94a3b8;
}

/* Bagian Kanan: Tombol-tombol Aksi */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.cart-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #000000;
  color: #ffffff;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;
}

.cart-btn:hover {
  opacity: 0.9;
}

.register-btn {
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #cbd5e1;
  padding: 0.6rem 1.2rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.register-btn:hover {
  background-color: #f8fafc;
}

.profile-btn {
  background: none;
  border: 1px solid #cbd5e1;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #334155;
}

.profile-btn:hover {
  background-color: #f8fafc;
}

/* Konten utama di bawah navbar */
.main-content {
  flex: 1;
  width: 100%;
}

/* Responsive design untuk layar kecil */
@media (max-width: 968px) {
  .navbar {
    padding: 1rem;
  }
  .nav-pill-wrapper {
    display: none; /* Menyembunyikan menu tengah di HP (nanti bisa dibuat hamburger menu) */
  }
}
</style>