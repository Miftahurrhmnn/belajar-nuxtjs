<template>
  <div class="login-container">
    <div class="login-card">
      <h2>Welcome Back ✦</h2>
      <p class="subtitle">Log in to your Ambera account to manage your fragrances.</p>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="input-group">
          <label for="email">Email Address</label>
          <input v-model="form.email" type="email" id="email" placeholder="name@example.com" required />
        </div>

        <div class="input-group">
          <label for="password">Password</label>
          <input v-model="form.password" type="password" id="password" placeholder="••••••••" required />
        </div>

        <button type="submit" class="submit-btn" :disabled="loading">
          {{ loading ? 'Logging in...' : 'Sign In' }}
        </button>
      </form>

      <p class="register-redirect">
        Don't have an account? <NuxtLink to="/register">Register here</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const form = ref({
    email: '',
    password: ''
  })

  const loading = ref(false)

  const handleLogin = async () => {
    loading.value = true
    try {
      // Menembak API login backend yang baru kita buat
      const response = await $fetch('/api/auth/login', {
        method: 'POST',
        body: form.value
      })

      if (response && response.user) {
        // 1. Simpan info user ke browser local storage sebagai session sementara
        localStorage.setItem('user_session', JSON.stringify(response.user))
        
        // 2. Alihkan halaman ke dashboard secara otomatis
        await navigateTo('/dashboard')
      }
    } catch (error) {
      alert(error.data?.statusMessage || 'Gagal masuk ke akun.')
    } finally {
      loading.value = false
    }
  }
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
  background-color: #ffffff;
  font-family: 'Inter', sans-serif;
  margin-top: 7rem;
}

.login-card {
  width: 100%;
  max-width: 450px;
  padding: 2.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
}

.login-card h2 {
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

.login-form {
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

.register-redirect {
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.85rem;
  color: #64748b;
}

.register-redirect a {
  color: #000000;
  text-decoration: none;
  font-weight: 600;
}

.register-redirect a:hover {
  text-decoration: underline;
}
</style>