  <template>
    <div class="search">
        <NavBar @updateEmail="handleUpdateEmail" />
        <Search :msg="email"/>
        <!-- <ContactUs/> -->
    </div>
  </template>
  
  <script>
import NavBar from '@/components/NavBar.vue'
import SearchMessage from '@/components/SearchMessage.vue'
import ItemColumn from '@/components/ItemColumn.vue'
import Search from '@/components/Search.vue'
import { $route } from 'vue-router'
import ContactUs from '@/components/ContactUs.vue'

export default {
    name: 'SearchView',
    components: {
        NavBar,
        // SearchMessage,
        // ItemColumn,
        Search,
        ContactUs,
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

  <style scoped>
  </style>