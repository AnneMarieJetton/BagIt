<template>
    <div class="search">
        <NavBar/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'

  
  export default {
    name: 'SearchView',
    components: {
        NavBar,
    }
  }
  </script>