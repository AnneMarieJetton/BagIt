  <template>
    <div class="search">
        <NavBar @updateEmail="handleUpdateEmail" />
        <Search :msg="email"/>
    </div>
  </template>
  
  <script>
import NavBar from '@/components/NavBar.vue'
import SearchMessage from '@/components/SearchMessage.vue'
import ItemColumn from '@/components/ItemColumn.vue'
import Search from '@/components/Search.vue'
import { $route } from 'vue-router'

export default {
    name: 'SearchView',
    components: {
        NavBar,
        // SearchMessage,
        // ItemColumn,
        Search,
    },
    data() {
        return {
            email: this.$route.query.email || ''
        };
    },
    methods: {
        handleUpdateEmail(email) {
            // Update the email data property with the value emitted from NavBar
            console.log("searchview pre: " + email);
            this.email = email;
            console.log("searchview post: " + this.email);
        }
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