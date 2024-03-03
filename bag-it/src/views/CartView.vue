<template>
    <div class="cart">
        <NavBar/>
        <Cart/>
        <!-- <ContactUs/> -->
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  import Cart from '@/components/Cart.vue'
  import ContactUs from '@/components/ContactUs.vue'

  
  export default {
    name: 'SearchView',
    components: {
        NavBar,
        Cart,
        ContactUs,
    }
  }
  </script>

  <style scoped>
  /* .cart{
    position: relative;
    min-height: 100vh;
    height: 100%;
  } */
</style>