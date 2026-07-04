<template>
  <div class="dashboard-container">
    <!-- Sidebar / Navigasi Samping -->
    <aside class="sidebar">
      <div class="brand">
        <h2>Ambera ✦</h2>
      </div>
      <nav class="nav-menu">
        <a href="#" class="nav-item active">
          <span>🏠</span> Dashboard
        </a>
        <a href="#" class="nav-item">
          <span>🧪</span> Fragrances
        </a>
        <a href="#" class="nav-item">
          <span>⚙️</span> Settings
        </a>
      </nav>
      <div class="sidebar-footer">
        <button @click="handleLogout" class="logout-btn">
          <span>🚪</span> Log Out
        </button>
      </div>
    </aside>

    <!-- Konten Utama -->
    <main class="main-content">
      <header class="content-header">
        <div class="welcome-text">
          <h1>Hello, {{ user?.username || 'Guest' }}!</h1>
          <p>Welcome back to your fragrance management workspace.</p>
        </div>
        <div class="user-avatar">
          {{ user?.username?.charAt(0).toUpperCase() || 'A' }}
        </div>
      </header>

      <!-- Panel Statistik / Ringkasan -->
      <section class="stats-grid">
        <div class="stat-card">
          <h3>Total Collections</h3>
          <p class="stat-number">24</p>
          <span class="stat-label">Items registered</span>
        </div>
        <div class="stat-card">
          <h3>Active Formulas</h3>
          <p class="stat-number">12</p>
          <span class="stat-label">In production</span>
        </div>
        <div class="stat-card">
          <h3>Account Status</h3>
          <p class="stat-number status-active">Active</p>
          <span class="stat-label">{{ user?.email }}</span>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const user = ref(null)

onMounted(() => {
  // Ambil data user yang disimpan di localStorage saat login sukses
  const savedUser = localStorage.getItem('user_session')
  if (savedUser) {
    user.value = JSON.parse(savedUser)
  } else {
    // Jika tidak ada data session, tendang balik ke halaman login
    navigateTo('/login')
  }
})

const handleLogout = () => {
  // Hapus session dan arahkan kembali ke halaman login
  localStorage.removeItem('user_session')
  navigateTo('/login')
}
</script>

<style scoped>
.dashboard-container {
  display: flex;
  min-height: 100vh;
  background-color: #f8fafc;
  font-family: 'Inter', sans-serif;
}

/* Sidebar Styling */
.sidebar {
  width: 260px;
  background-color: #ffffff;
  border-right: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
}

.brand h2 {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 2.5rem;
}

.nav-menu {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-grow: 1;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: #64748b;
  text-decoration: none;
  font-weight: 500;
  border-radius: 12px;
  transition: all 0.2s;
}

.nav-item:hover, .nav-item.active {
  background-color: #f1f5f9;
  color: #000000;
}

.logout-btn {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: none;
  border: 1px solid #e2e8f0;
  color: #ef4444;
  font-weight: 500;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.logout-btn:hover {
  background-color: #fef2f2;
}

/* Main Content Styling */
.main-content {
  flex-grow: 1;
  padding: 3rem;
  margin-top: 4rem;
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.welcome-text h1 {
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: 0.25rem;
}

.welcome-text p {
  color: #64748b;
}

.user-avatar {
  width: 50px;
  height: 50px;
  background-color: #000000;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-weight: 600;
  font-size: 1.25rem;
}

/* Stats Cards */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background-color: #ffffff;
  padding: 1.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
}

.stat-card h3 {
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 500;
  margin-bottom: 1rem;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 0.25rem;
}

.status-active {
  color: #10b981;
}

.stat-label {
  font-size: 0.8rem;
  color: #94a3b8;
}
</style>
