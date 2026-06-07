<script setup>
import { ref } from 'vue';

const image1 = ref('https://digitani.ipb.ac.id/wp-content/uploads/2024/08/RA-Article-Cover-2-1024x724.png')
const image2 = ref('https://i.pinimg.com/222x/ed/bb/aa/edbbaad85e4cc907e6c760f165b4e225.jpg')
const image3 = ref('https://lessismore.co/cdn/shop/articles/citrus-fruits_ba46fb42-ac3b-47e9-8087-0e82485e2430.webp?v=1776338800&width=1500')
const image4 = ref('https://lessismore.co/cdn/shop/articles/citrus-fruits_ba46fb42-ac3b-47e9-8087-0e82485e2430.webp?v=1776338800&width=1500')
const image5 = ref('https://mandalikaperfume.co.id/wp-content/uploads/2025/03/aroma-amber-1080x675.jpeg')
const image6 = ref('https://bibitbunga.com/wp-content/uploads/2015/08/madagascar-jasmine.jpg')
const image7 = ref('https://statik.tempo.co/data/2024/01/20/id_1272924/1272924_720.jpg')
const image8 = ref('https://thumbs.dreamstime.com/b/close-up-shot-vanilla-flowers-pods-showcasing-aromatic-beans-ideal-culinary-natural-fragrance-designs-flower-362304188.jpg')

</script>

<template>
  <div class="hero-container">
    <div class="left-content">
      
      <div class="badge-container">
        <div class="avatar-group">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60" alt="User 1">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60" alt="User 2">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60" alt="User 3">
        </div>
        <div class="trusted-badge">
          <span>Plus <strong class="highlight-count">25k</strong> Trusted users!</span>
        </div>
      </div>

      <h1 class="main-title">
        Discover your best <br />
        <span class="italic-title">Perfume</span> at today
      </h1>

      <p class="subtitle">
        Discover premium fashion and accessories curated just for you. 
        Shop the latest trends and timeless classics now.
      </p>

      <button class="cta-button">
        Explore Shop
        <span class="arrow-icon">↗</span>
      </button>

      <div class="testimonial-card">
        <span class="quote-mark">“</span>
        <p class="quote-text">
          I couldn't be happier with my experience shopping here! The quality of the perfume is top-notch, and the customer service was exceptional.
        </p>
        <div class="testimonial-footer">
          <div class="user-info">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60" alt="Madhu" class="user-avatar">
            <div>
              <h4>Madhu</h4>
              <p>Product Designer</p>
            </div>
          </div>
          <div class="slider-nav">
            <button class="nav-btn">←</button>
            <button class="nav-btn active">→</button>
          </div>
        </div>
      </div>
    </div>

    <div class="right-content">
      <div class="main-product-wrapper">
        <img src="/img/parfum.png" alt="Sacred Secret Perfume" class="main-product-img">
      </div>

      <div class="mini-cards-grid">
        <div class="mini-card">
          <img src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=150&auto=format&fit=crop&q=80" alt="Veloura Mist">
          <div class="mini-card-info">
            <h4>Veloura Mist</h4>
            <p>(27 items)</p>
            <button class="mini-card-btn">Explore Shop ↗</button>
          </div>
        </div>

        <div class="mini-card">
          <img src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=150&auto=format&fit=crop&q=80" alt="Noir Éclat">
          <div class="mini-card-info">
            <h4>Noir Éclat</h4>
            <p>(45 items)</p>
            <button class="mini-card-btn">Explore Shop ↗</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="main-content">
    <div class="wrapper-main-content">
      <p class="badges">50k+ customers are with Mocko</p>
      <h1>Only high-quality <br/> parfume ingreduents</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, asperiores!</p>
    </div>
    
    <div class="notes">
      <img class="img-1" :src="image1" alt=""  data-aos="zoom-in" data-aos-duration="1000" data-aos-mirror="true">
      <img class="img-2" :src="image2" alt="" data-aos="zoom-in" data-aos-duration="1000" data-aos-mirror="true">
      <img class="img-3" :src="image3" alt="" data-aos="zoom-in" data-aos-duration="1000" data-aos-mirror="true">
      <img class="img-4" :src="image4" alt="" data-aos="zoom-in" data-aos-duration="1000" data-aos-mirror="true">

      <img class="img-5" :src="image5" alt="" data-aos="zoom-in" data-aos-duration="1000" data-aos-mirror="true">
      <img class="img-6" :src="image6" alt="" data-aos="zoom-in" data-aos-duration="1000" data-aos-mirror="true">
      <img class="img-7" :src="image7" alt="" data-aos="zoom-in" data-aos-duration="1000" data-aos-mirror="true">
      <img class="img-8" :src="image8" alt="" data-aos="zoom-in" data-aos-duration="1000" data-aos-mirror="true">
    </div>
  </div>

 <section class="showcase-section">
    <div class="showcase-container">
      
      <div class="showcase-left">
        <div class="video-wrapper">
          <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&auto=format&fit=crop&q=80" alt="Spraying Perfume" class="video-thumbnail">
          
          <button class="play-btn" aria-label="Play Video">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="play-icon">
              <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      <div class="showcase-right">
        
        <div class="showcase-header">
          <h2 class="showcase-title">ELEVATE YOUR</h2>
          <h2 class="showcase-title serif-text">MEMORABLE OCCASION</h2>
        </div>

        <div class="images-overlap-grid">
          <div class="img-box box-flower">
            <img src="https://images.unsplash.com/photo-1668676016491-8d2ad863cea6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="White Flower Accent">
          </div>
          <div class="img-box box-model">
            <img src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=500&auto=format&fit=crop&q=80" alt="Applying perfume on neck">
          </div>
        </div>

        <p class="showcase-description">
          "Enhance your special moments with the ideal fragrance, leaving an indelible mark on your cherished memories. 
          Let the exquisite scent accompany you on your journey of joy, adding a touch of elegance to every precious moment."
        </p>
        
      </div>

    </div>
  </section>

</template>

<style scoped>
/* Container utama menggunakan Grid 2 Kolom untuk memisahkan Kiri dan Kanan */
.hero-container {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3rem;
  min-height: 80vh;
  align-items: center;
  background: radial-gradient(circle at 80% 20%, rgba(216, 180, 254, 0.15) 0%, transparent 50%), #ffffff;
  color: #1a1a1a;
  margin-top: 2rem;
  padding: 7rem;
  font-family: 'Inter', sans-serif;
}

/* --- BAGIAN KIRI --- */
.left-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Avatar Grouping & Badge */
.badge-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.avatar-group {
  display: flex;
}

.avatar-group img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  margin-right: -12px;
  object-fit: cover;
}

.trusted-badge {
  border: 1px solid #e2e8f0;
  padding: 0.4rem 1rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  background-color: #ffffff;
  margin-left: 10px;
}

.highlight-count {
  background-color: #000000;
  color: #ffffff;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  font-size: 0.75rem;
}

/* Typography */
.main-title {
  font-size: 4rem;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.italic-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-style: italic;
  font-weight: 400;
  text-decoration: underline;
  text-underline-offset: 6px;
}

.subtitle {
  color: #64748b;
  font-size: 1.05rem;
  max-width: 480px;
  line-height: 1.5;
}

/* CTA Button */
.cta-button {
  display: flex;
  align-items: center;
  gap: 1rem;
  align-self: flex-start;
  background-color: #0f172a;
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-size: 1.05rem;
  cursor: pointer;
  transition: transform 0.2s;
}

.cta-button:hover {
  transform: scale(1.03);
}

.arrow-icon {
  background-color: #ffffff;
  color: #000000;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
}

/* Testimonial Bento Card */
.testimonial-card {
  background: linear-gradient(135deg, #eff6ff 0%, #e0f2fe 100%);
  border-radius: 24px;
  padding: 2rem;
  margin-top: 1rem;
  max-width: 500px;
  position: relative;
}

.quote-mark {
  font-size: 3rem;
  font-family: serif;
  color: #93c5fd;
  line-height: 0;
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}

.quote-text {
  font-size: 1.1rem;
  color: #334155;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  text-indent: 1.5rem;
}

.testimonial-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.user-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
}

.user-info h4 {
  font-size: 0.95rem;
  font-weight: 600;
}

.user-info p {
  font-size: 0.8rem;
  color: #64748b;
}

.slider-nav {
  display: flex;
  gap: 0.5rem;
}

.nav-btn {
  background-color: #ffffff;
  border: 1px solid #cbd5e1;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
}

.nav-btn.active {
  background-color: #000000;
  color: #ffffff;
  border-color: #000000;
}

/* --- BAGIAN KANAN --- */
.right-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.main-product-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.main-product-img {
  width: 85%;
  max-height: 450px;
  object-fit: contain;
  filter: drop-shadow(0 20px 30px rgba(0,0,0,0.1));
}

/* Mini Cards Grid */
.mini-cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.mini-card {
  background-color: #ffffff;
  border: 1px solid #f1f5f9;
  border-radius: 20px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.mini-card img {
  width: 65px;
  height: 65px;
  object-fit: cover;
  border-radius: 12px;
}

.mini-card-info h4 {
  font-size: 0.95rem;
  margin-bottom: 0.15rem;
}

.mini-card-info p {
  font-size: 0.75rem;
  color: #94a3b8;
  margin-bottom: 0.4rem;
}

.mini-card-btn {
  background: none;
  border: none;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.main-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 800px;
  background-color: rgb(17, 17, 17);
  color: white;
  font-family: 'Inter', sans-serif;
}

.main-content .badges {
  border: white 2px solid;
  padding: 8px 5px;
  border-radius: 50px;
  width: 50%;
}

.wrapper-main-content {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.main-content .notes .img-1 {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 20px;
  position: absolute;
  top: 1150px;
  left: 100px;
}
.main-content .notes .img-2 {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 20px;
  position: absolute;
  top: 1350px;
  left: 200px;
}
.main-content .notes .img-3 {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 20px;
  position: absolute;
  top: 1000px;
  left: 250px;
}
.main-content .notes .img-4{
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 20px;
  position: absolute;
  top: 1470px;
  left: 390px;
}
.main-content .notes .img-5 {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 20px;
  position: absolute;
  top: 1150px;
  right: 100px;
}
.main-content .notes .img-6 {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 20px;
  position: absolute;
  top: 1350px;
  right: 200px;
}
.main-content .notes .img-7 {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 20px;
  position: absolute;
  top: 1000px;
  right: 250px;
}
.main-content .notes .img-8{
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 20px;
  position: absolute;
  top: 1470px;
  right: 390px;
}

/* --- SHOWCASE SECTION CONTAINER --- */
.showcase-section {
  background-color: #ffffff;
  padding: 5rem 0;
  width: 100%;
  font-family: 'Inter', sans-serif;
}

.showcase-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr; /* Sisi kiri sedikit lebih lebar */
  gap: 5rem;
  align-items: center;
}

/* --- KIRI: STYLING VIDEO & PLAY BUTTON --- */
.showcase-left {
  width: 100%;
}

.video-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5; /* Rasio potret meninggi pas sesuai foto */
  border-radius: 4px;  /* Sudut tajam minimalis sesuai gambar */
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
}

.video-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border: none;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.play-btn:hover {
  transform: translate(-50%, -50%) scale(1.1);
}

.play-icon {
  width: 32px;
  height: 32px;
  color: #1a1a1a;
  margin-left: 4px; /* Sedikit offset agar visual segitiga tepat di tengah */
}

/* --- KANAN: TYPOGRAPHY & OVERLAPPING IMAGES --- */
.showcase-right {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.showcase-header {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.showcase-title {
  font-size: 2.6rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #000000;
}

.serif-text {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 400;
  letter-spacing: 0.02em;
}

/* Trik Utama: Penempatan Gambar Bertingkat (Overlap) */
.images-overlap-grid {
  position: relative;
  width: 100%;
  height: 380px; /* Menentukan tinggi area grid gambar */
  margin-top: 1rem;
}

.img-box {
  position: absolute;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
}

.img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Gambar Kiri Bawah (Bunga) */
.box-flower {
  width: 32%;
  aspect-ratio: 1 / 1; /* Kotak persegi sempurna */
  left: 100px;
  bottom: -20px;
  border-radius: 4px;
  z-index: 2; /* Berada di depan sedikit */
}

/* Gambar Kanan Atas (Model) */
.box-model {
  width: 53%;
  aspect-ratio: 4 / 5; /* Persegi panjang potret */
  right: 0;
  top: 0;
  border-radius: 4px;
  z-index: 1;
}

/* Deskripsi Paragraf */
.showcase-description {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #4b5563;
  font-style: normal;
  max-width: 540px;
}

/* Responsif untuk Layar Tablet / HP */
@media (max-width: 968px) {
  .showcase-container {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 0 1.5rem;
  }
  
  .showcase-title {
    font-size: 2rem;
  }
  
  .images-overlap-grid {
    height: 300px;
  }
}

/* Responsive breakpoint untuk HP/Tablet */
@media (max-width: 968px) {
  .hero-container {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
  .main-title {
    font-size: 2.8rem;
  }
  .mini-cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>