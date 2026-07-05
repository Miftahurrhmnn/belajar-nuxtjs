<template>
  <div class="catalog-container">
    <!-- Header Katalog -->
    <header class="catalog-header">
      <div class="header-text">
        <span class="tagline">Ambera Collection ✦</span>
        <h1>The Fragrance Library</h1>
        <p>Explore our curated list of artisanal formulas and premium scents.</p>
      </div>
      <!-- Tombol Aksi Tambah Produk -->
      <button class="add-btn">
        <span>+</span> Create Formula
      </button>
    </header>

    <!-- Filter & Kategori Cepat -->
    <div class="filter-bar">
      <div class="categories">
        <button class="cat-btn active">All Scents</button>
        <button class="cat-btn">Woody</button>
        <button class="cat-btn">Floral</button>
        <button class="cat-btn">Fresh Citrus</button>
      </div>
      <div class="search-box">
        <input type="text" placeholder="Search fragrances..." />
      </div>
    </div>

    <!-- Grid Item Katalog -->
    <section class="catalog-grid">
      <div v-for="item in products" :key="item.id" class="product-card">
        <!-- Area Gambar/Placeholder Visual -->
        <div class="product-image">
          <span class="bottle-icon">🧪</span>
          <span class="product-status" :class="item.status.toLowerCase()">
            {{ item.status }}
          </span>
        </div>
        
        <!-- Informasi Produk -->
        <div class="product-info">
          <div class="product-meta">
            <span class="category-tag">{{ item.category }}</span>
            <span class="stock-label">Stock: {{ item.stock }}</span>
          </div>
          <h3 class="product-title">{{ item.name }}</h3>
          <p class="product-desc">{{ item.description }}</p>
          
          <div class="product-footer">
            <span class="product-price">${{ item.price }}</span>
            <button class="edit-btn">Manage</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Data Dummy Katalog Parfum untuk Tampilan Awal
const products = ref([
  {
    id: 1,
    name: 'Santal Mystique',
    category: 'Woody',
    description: 'A rich blend of Australian sandalwood, cedarwood, and a touch of warm cardamom.',
    price: 125,
    stock: 14,
    status: 'Active'
  },
  {
    id: 2,
    name: 'Jardin de Nuit',
    category: 'Floral',
    description: 'Midnight blooming jasmine mixed with deep patchouli and sweet vanilla amber.',
    price: 140,
    stock: 8,
    status: 'Active'
  },
  {
    id: 3,
    name: 'Citrus Eclipse',
    category: 'Fresh Citrus',
    description: 'Crisp bergamot combined with Amalfi lemon, sea salt, and a base of white musk.',
    price: 110,
    stock: 0,
    status: 'Archived'
  },
  {
    id: 4,
    name: 'Oud Noir',
    category: 'Woody',
    description: 'Rare agarwood notes combined with dark leather, incense, and subtle sweet tobacco.',
    price: 165,
    stock: 22,
    status: 'Active'
  }
])
</script>

<style scoped>
.catalog-container {
  padding: 3rem;
  max-width: 1300px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
  background-color: #ffffff;
}

/* Header */
.catalog-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
  margin-top: 4rem;
}

.tagline {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #64748b;
  display: block;
  margin-bottom: 0.5rem;
}

.catalog-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #000000;
  margin-bottom: 0.5rem;
}

.catalog-header p {
  color: #64748b;
  font-size: 1.05rem;
}

.add-btn {
  background-color: #000000;
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.2s;
}

.add-btn:hover {
  opacity: 0.9;
}

/* Filter Bar */
.filter-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 1.25rem;
  margin-bottom: 2.5rem;
}

.categories {
  display: flex;
  gap: 0.5rem;
}

.cat-btn {
  background: none;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s;
}

.cat-btn:hover, .cat-btn.active {
  background-color: #f1f5f9;
  color: #000000;
}

.cat-btn.active {
  font-weight: 600;
}

.search-box input {
  padding: 0.5rem 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  outline: none;
  min-width: 250px;
  font-size: 0.9rem;
}

.search-box input:focus {
  border-color: #000000;
}

/* Product Grid */
.catalog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.product-card {
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
  transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 20px -8px rgba(0, 0, 0, 0.08);
}

.product-image {
  background-color: #f8fafc;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #e2e8f0;
}

.bottle-icon {
  font-size: 3rem;
}

.product-status {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: 20px;
}

.product-status.active {
  background-color: #e6f4ea;
  color: #137333;
}

.product-status.archived {
  background-color: #fce8e6;
  color: #c5221f;
}

/* Product Info */
.product-info {
  padding: 1.5rem;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #94a3b8;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.category-tag {
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.product-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 0.5rem;
}

.product-desc {
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  height: 2.8rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-price {
  font-size: 1.25rem;
  font-weight: 700;
  color: #000000;
}

.edit-btn {
  background: none;
  border: 1px solid #cbd5e1;
  padding: 0.4rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.edit-btn:hover {
  background-color: #000000;
  color: #ffffff;
  border-color: #000000;
}
</style>
