  <template>
    <div class="search">
        <NavBar/>
        <!-- <div class="SearchBarContainer"> -->
        <SearchBar/>
        <!-- </div> -->
        <SearchMessage/>
        <ItemColumn/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  import SearchBar from '@/components/SearchBar.vue'
  import SearchMessage from '@/components/SearchMessage.vue'
  import ItemColumn from '@/components/ItemColumn.vue'
  
  export default {
    name: 'SearchView',
    components: {
        NavBar,
        SearchBar,
        SearchMessage,
        ItemColumn,
    }
  }
  </script>

  <style>
    /* .search {

    }

    .SearchBarContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    } */
  </style>