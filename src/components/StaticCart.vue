<template>
  <div class="cart-static">
    <h2>Cart</h2>
    <div class="cart-placeholder">
     
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.cart-static {
  padding: 2rem;
  text-align: center;
}
.cart-placeholder {
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 2rem;
  display: inline-block;
  margin-top: 1rem;
}
</style>
