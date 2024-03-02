<template>
    <div class="cart">
      <h1>Cart</h1>
      <div v-if="cartItems.length === 0">
        <p>Your cart is empty.</p>
      </div>
      <div v-else class="cart-items-container">
        <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
          <Item :item="item" />
          <button @click="removeFromCart(index)" class="cartRemoveButton">Remove</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Item from '@/components/Item.vue';
  import { cartItems } from '@/jsFiles/cartStore.js';
  
  export default {
    name: 'Cart',
    components: {
      Item
    },
    setup() {
      const removeFromCart = (index) => {
        cartItems.value.splice(index, 1);
      };
  
      return {
        cartItems,
        removeFromCart
      };
    }
  };
  </script>
  
  <style scoped>
/* Add your styles for the cart here */
.cart {
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 20px;
}

.cart-items-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.cart-item {
  margin-right: 20px; /* Add some space between items */
  margin-bottom: 20px; /* Add some space between rows */
}

.cartRemoveButton {
  margin-top: 5px;
  border-radius: 5px;
  width: 100%;
}

/* Ensure that the last item in each row doesn't have a right margin */
.cart-item:last-child {
  margin-right: 0;
}
</style>
  
