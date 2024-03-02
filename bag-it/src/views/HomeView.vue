<template>
  <div class="home">
    <NavBar/>
    <Banner/>
    <DealOfTheDay/>
    <ItemRows/>
    <ContactUs/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Banner from '@/components/Banner.vue'
import DealOfTheDay from '@/components/DealOfTheDay.vue'
import ItemRows from '@/components/ItemRows.vue'
import ContactUs from '@/components/ContactUs.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    Banner,
    DealOfTheDay,
    ItemRows,
    ContactUs,
  }
}
</script>
