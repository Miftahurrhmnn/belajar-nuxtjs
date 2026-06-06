<template>
  <div class="card">
    <div class="card-badge">{{ brand }}</div>
    <h3 class="card-title">{{ name }}</h3>
    <p class="card-desc">{{ description }}</p>
    <div class="card-footer">
      <span class="accords">{{ accords }}</span>
    </div>
  </div>
</template>

<script setup>
// Mendefinisikan properti apa saja yang bisa dikirim dari halaman utama ke kartu ini
defineProps({
  brand: String,
  name: String,
  description: String,
  accords: String
})
</script>

<style scoped>
.card {
  background-color: #1e293b;
  border: 1px solid #334155;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: transform 0.3s, border-color 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  border-color: #10b981;
}

.card-badge {
  align-self: flex-start;
  background-color: rgba(16, 185, 129, 0.1);
  color: #10b981;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.card-title {
  font-size: 1.25rem;
  color: #f1f5f9;
}

.card-desc {
  font-size: 0.9rem;
  color: #94a3b8;
  line-height: 1.4;
  flex: 1;
}

.card-footer {
  border-top: 1px solid #334155;
  padding-top: 0.75rem;
  margin-top: 0.5rem;
}

.accords {
  font-size: 0.8rem;
  color: #64748b;
  font-style: italic;
}
</style>