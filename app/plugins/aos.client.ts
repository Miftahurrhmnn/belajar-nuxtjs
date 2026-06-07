import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    AOS.init({
      duration: 800, // Durasi animasi dalam milidetik
      once: true,    // Jalankan animasi hanya sekali saat scroll down
      easing: 'ease-in-out',
    });
  }
});
