<template>
    <div class="search">
        <NavBar/>
        <Cart/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  import Cart from '@/components/Cart.vue'

  
  export default {
    name: 'SearchView',
    components: {
        NavBar,
        Cart,
    }
  }
  </script>