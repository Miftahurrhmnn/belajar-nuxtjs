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
      <img class="img-1" :src="image1" alt="">
      <img class="img-2" :src="image2" alt="">
      <img class="img-3" :src="image3" alt="">
      <img class="img-4" :src="image4" alt="">

      <img class="img-5" :src="image5" alt="">
      <img class="img-6" :src="image6" alt="">
      <img class="img-7" :src="image7" alt="">
      <img class="img-8" :src="image8" alt="">
    </div>
  </div>
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