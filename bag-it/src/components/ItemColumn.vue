<template>
    <div class="itemColumn">
        <Item v-for="(item, index) in items" :key="index" :item="item" />
        <p>{{ msg }}</p>
    </div>
</template>

<script>
import axios from 'axios';
import Item from '@/components/Item.vue'

export default {
    name: 'ItemColumn',
    components: {
        Item
    },
    props: {
        msg: String
    },
    data() {
        return {
            items: []
        };
    
    },
    watch: {
        msg: {
            immediate: true,
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    this.fetchProductNames();
                }
            }
        }
    },
    // mounted() {
    //     this.fetchProductNames();
    // },
    methods: {
        async fetchProductNames() {
            console.log("itemCol pre: " + this.msg);
            try {
                // const response = await axios.get('https://world.openfoodfacts.net/api/v2/product/3017624010701');
                const response = await axios.get(`https://world.openfoodfacts.net/api/v2/product/${this.msg}`);
                const productName = response.data.product.product_name;
                this.items.push({
                image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg",
                category: 'Category 1',
                name: productName,
                price: '$10'
                });
            } catch (error) {
                console.error('Error fetching product names:', error);
            }
            console.log("itemCol post: " + this.msg);
        }
    },
    beforeRouteUpdate(to, from, next) {
        // Call fetchProductNames whenever the route parameters change
        this.fetchProductNames();
        next();
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<!-- 1683 -->