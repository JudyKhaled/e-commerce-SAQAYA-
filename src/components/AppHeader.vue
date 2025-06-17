<template>
  <header class="header">
    <div class="header-content">
      <h1 class="logo">My E-Commerce Site</h1>
      <button class="menu-btn" @click="toggleMenu" aria-label="Toggle navigation">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
      <nav :class="{ open: menuOpen }">
        <router-link to="/products" @click="closeMenu">Products</router-link>
        <router-link to="/contact" @click="closeMenu">Contact</router-link>
        <router-link to="/cart" @click="closeMenu" class="cart-link" aria-label="Cart">
          <img src="/src/assets/cart.svg" alt="Cart" class="cart-icon" />
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const menuOpen = ref(false);
const toggleMenu = () => (menuOpen.value = !menuOpen.value);
const closeMenu = () => (menuOpen.value = false);
</script>

<style scoped>
.header {
  background: #f8f8f8;
  border-bottom: 1px solid #ddd;
  width: 100%;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.logo {
  font-size: 1.5rem;
  color: #333;
  margin: 0;
}

nav {
  display: flex;
  gap: 1rem;
}

nav a {
  text-decoration: none;
  color: #333;
  font-size: 1rem;
}

nav a.router-link-exact-active {
  font-weight: bold;
}

.menu-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  height: 1.5rem;
  width: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: auto;
}

.menu-btn span {
  height: 3px;
  width: 100%;
  background-color: #333;
  border-radius: 2px;
  transition: 0.3s;
}

.menu-btn span.open:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}
.menu-btn span.open:nth-child(2) {
  opacity: 0;
}
.menu-btn span.open:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

.cart-link {
  display: flex;
  align-items: center;
}
.cart-icon {
  width: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: middle;
}

@media (max-width: 700px) {
  .menu-btn {
    display: flex;
  }

  nav {
    display: none;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
    gap: 0.5rem;
  }

  nav.open {
    display: flex;
  }

  .header-content {
    align-items: flex-start;
    padding: 1rem 0.8rem;
  }

  nav a {
    font-size: 1rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
  }
}
</style>
