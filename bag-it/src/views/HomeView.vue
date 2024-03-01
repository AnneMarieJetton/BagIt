<template>
  <div class="home">
    <NavBar/>
    <Banner/>
    <DealOfTheDay/>
    <ItemRows/>
    <ContactUs/>
    <!-- <Item/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Banner from '@/components/Banner.vue'
import DealOfTheDay from '@/components/DealOfTheDay.vue'
import ItemRows from '@/components/ItemRows.vue'
import ContactUs from '@/components/ContactUs.vue'

import Item from '@/components/Item.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    Banner,
    DealOfTheDay,
    ItemRows,
    ContactUs,
    Item,
  }
}
</script>
