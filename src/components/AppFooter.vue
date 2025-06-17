<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2025 My E-Commerce Site</p>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer {
  background-color: #f8f8f8;
  border-top: 1px solid #ddd;
  padding: 1rem 0;
  margin-top: 2rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  font-size: 1rem;
  color: #555;
}

@media (max-width: 600px) {
  .footer-content {
    font-size: 0.9rem;
    padding: 0 0.5rem;
  }
}
</style>
