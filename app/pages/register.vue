<template>
  <div class="register-container">
    <div class="register-card">
      <h2>Create an Account ✦</h2>
      <p class="subtitle">Join Ambera to discover your best fragrance experience.</p>

      <form @submit.prevent="handleRegister" class="register-form">
        <div class="input-group">
          <label for="name">Full Name</label>
          <input v-model="form.name" type="text" id="name" placeholder="John Doe" required />
        </div>

        <div class="input-group">
          <label for="email">Email Address</label>
          <input v-model="form.email" type="email" id="email" placeholder="name@example.com" required />
        </div>

        <div class="input-group">
          <label for="password">Password</label>
          <input v-model="form.password" type="password" id="password" placeholder="••••••••" required />
        </div>

        <button type="submit" class="submit-btn" :disabled="loading">
          {{ loading ? 'Creating account...' : 'Register Now' }}
        </button>
      </form>

      <p class="login-redirect">
        Already have an account? <NuxtLink to="/login">Login here</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from '#app'

// State untuk menampung inputan form (Vue Composition API)
const form = ref({
  name: '',
  email: '',
  password: ''
})

const loading = ref(false)
const router = useRouter()

// Fungsi yang akan berjalan saat tombol submit ditekan
const handleRegister = async () => {
  loading.value = true
  
  try {
    const response = await $fetch('/api/auth/register', {
      method: 'POST',
      body: form.value
    })

    if (response.success) {
      alert('Akun berhasil dibuat! Silakan login.')
      
      // Bersihkan form
      form.value = { name: '', email: '', password: '' }
      
      // Alihkan user ke halaman login (kita buat setelah ini)
      router.push('/login')
    }
    
  } catch (error) {
    // Menangkap pesan error yang dilemparkan oleh backend (misal: email kembar)
    alert(error.data?.statusMessage || 'Terjadi kesalahan pendaftaran.')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #ffffff;
  font-family: 'Inter', sans-serif;
  margin-top: 7rem;
}

.register-card {
  width: 100%;
  max-width: 450px;
  padding: 2.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
}

.register-card h2 {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.subtitle {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-group label {
  font-size: 0.85rem;
  font-weight: 500;
  color: #334155;
}

.input-group input {
  padding: 0.75rem 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
}

.input-group input:focus {
  border-color: #000000;
}

.submit-btn {
  background-color: #000000;
  color: #ffffff;
  border: none;
  padding: 0.85rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: opacity 0.2s;
}

.submit-btn:hover {
  opacity: 0.9;
}

.submit-btn:disabled {
  background-color: #94a3b8;
  cursor: not-allowed;
}

.login-redirect {
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.85rem;
  color: #64748b;
}

.login-redirect a {
  color: #000000;
  text-decoration: none;
  font-weight: 600;
}

.login-redirect a:hover {
  text-decoration: underline;
}
</style>