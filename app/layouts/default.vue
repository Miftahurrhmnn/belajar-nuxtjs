<template>
  <div class="app-container">
    <nav class="navbar">
      <div class="logo">
        <span class="logo-icon">✦</span> Amarta
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
        <NuxtLink to="/register" class="register-btn">Register</NuxtLink>
        <button class="profile-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </button>
      </div>
    </nav>

    <main class="main-content">
      <slot />
    </main>

    <footer class="Amarta-footer">
      <div class="footer-container">
        
        <div class="footer-top">
          <h2 class="footer-slogan">
            Amarta is where the <br />
            finest fragrance is curated.
          </h2>
          <div class="footer-contact-info">
            <p><span>✉</span> customer_service@Amarta.com</p>
            <p><span></span> 0811-1090-0088</p>
            <p><span></span> 4500-233</p>
          </div>
        </div>

        <div class="footer-links-grid">
          <div class="footer-col">
            <h4>Amarta Shop</h4>
            <ul>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Fragrance Collections</a></li>
              <li><a href="#">Home Scents</a></li>
              <li><a href="#">Gift Sets</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Customer Care</h4>
            <ul>
              <li><a href="#">Shipping & Delivery</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Amarta FAQ</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Contact Support</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Discover</h4>
            <ul>
              <li><a href="#">The Amarta Story</a></li>
              <li><a href="#">Fragrance Notes</a></li>
              <li><a href="#">Artisanal Craftsmanship</a></li>
              <li><a href="#">In-Store Experience</a></li>
              <li><a href="#">Scent Guide</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Cookie Settings</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="#">Connect With Us</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">TikTok</a></li>
              <li><a href="#">X (Twitter)</a></li>
              <li><a href="#">Threads</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-copyright">
          <p>© 2026 All right reserved by Miftahurrahman</p>
        </div>

      </div>

      <div class="footer-giant-bg">
        AMARTA
      </div>
    </footer>
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
  justify-content: space-around;
  align-items: center;
  padding: 1.25rem 3rem;
  background-color: transparent;
  width: 100%;
  margin: 0 auto;
  background-color: white;
  position: fixed;
  top: 0;
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
  text-decoration: none;
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

/* --- Amarta PREMIUM FOOTER STYLING --- */
.Amarta-footer {
  background-color: #0d0d0d; /* Latar belakang hitam pekat mendalam */
  color: #ffffff;
  padding-top: 5rem;
  position: relative;
  overflow: hidden; /* Mengunci teks raksasa agar tidak merusak scrollbar luar */
  width: 100%;
  font-family: 'Inter', sans-serif;
  
  /* Efek Amber Glow (Pendaran Oranye Lembut di bagian tengah bawah) */
  background-image: radial-gradient(circle at 50% 70%, rgba(217, 119, 6, 0.18) 0%, transparent 60%);
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
  position: relative;
  z-index: 2; /* Menjaga teks menu tetap berada di atas pendaran warna */
}

/* Bagian Atas */
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-bottom: 4rem;
  margin-bottom: 4rem;
}

.footer-slogan {
  font-size: 2.8rem;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #f3f4f6;
}

.footer-contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  text-align: right;
}

.footer-contact-info p {
  color: #9ca3af;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
}

.footer-contact-info span {
  color: #6b7280;
}

/* Bagian Tengah: Grid Menus */
.footer-links-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  padding-bottom: 5rem;
}

.footer-col h4 {
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 1.5rem;
}

.footer-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.footer-col ul a {
  color: #9ca3af;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.footer-col ul a:hover {
  color: #f59e0b; /* Berubah jadi oranye amber saat kursor mendekat */
}

/* Baris Copyright Tipis */
.footer-copyright {
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1.5rem 0;
  font-size: 0.8rem;
  color: #4b5563;
}

/* --- TEXT RAKSASA BACKGROUND --- */
.footer-giant-bg {
  position: absolute;
  bottom: -4.5rem; /* Menjorok ke bawah memotong batas layar */
  left: 50%;
  transform: translateX(-50%);
  font-size: 19vw; /* Mengikuti ukuran lebar layar browser (Responsif otomatis) */
  font-weight: 900;
  letter-spacing: -0.01em;
  line-height: 0.8;
  
  /* Warna abu-abu yang super gelap, tipis, transparan dan menyatu dengan background */
  color: rgba(255, 255, 255, 0.04);
  
  user-select: none;
  pointer-events: none;
  z-index: 1;
  width: 100%;
  text-align: center;
}

/* Responsive Desain untuk Layar Kecil (Tablet/HP) */
@media (max-width: 1024px) {
  .footer-top {
    flex-direction: column;
    gap: 2rem;
  }
  .footer-contact-info {
    text-align: left;
    justify-content: flex-start;
  }
  .footer-contact-info p {
    justify-content: flex-start;
  }
  .footer-links-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
  .footer-giant-bg {
    font-size: 24vw;
    bottom: -2.5rem;
  }
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