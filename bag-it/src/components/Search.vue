<template>
    <div class="Search">
        <div class="searchMessage">
            <span class="searchMessageContent">
                Unfortunately, without paying, this API only allows searching by barcode number, so that will be enough for demonstration purposes. Try "3017624010701" for Nutella, "8901764012273" for Coca Cola, or a different barcode number.
            </span>
        </div>
        <Span class="SearchResultTitle">Results</Span>
        <Item v-for="(item, index) in items" :key="index" :item="item" />
        <span v-if="!resultFound" class="noneFound">No Results Found</span>
        <!-- <p>{{ msg }}</p> -->
    </div>
</template>

<script>
import axios from 'axios';
import Item from '@/components/Item.vue'

export default {
    name: 'Search',
    components: {
        Item
    },
    props: {
        msg: String
    },
    data() {
        return {
            items: [],
            resultFound: false
        };
    
    },
    watch: {
        msg: {
            immediate: true, // Trigger the watcher immediately on component mount
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    this.fetchProductNames(); // Call fetchProductNames when 'msg' changes
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
                this.resultFound = false;
                this.items = [];
                // const response = await axios.get('https://world.openfoodfacts.net/api/v2/product/3017624010701');
                const response = await axios.get(`https://world.openfoodfacts.net/api/v2/product/${this.msg}`);
                const productName = response.data.product.product_name;
                const productImage = response.data.product.selected_images.front.display.en;
                const productCategory = response.data.product.food_groups.substring(3);
                this.items.push({
                    // image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg",
                    image: productImage,
                    category: productCategory,
                    name: productName,
                    price: '$' + (Math.random() * (5 - 1) + 1).toFixed(2)
                });
                this.resultFound = true;
            } catch (error) {
                console.error('Error fetching product names:', error);
            }
            console.log("itemCol post: " + this.msg);
        }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.Search{
    padding-top: 5%;
    padding-left: 20%;
    padding-right: 20%;

    display: flex;
    flex-direction: column;
    justify-content: center;
}
.searchMessage {
    border-radius: 5px;
    /* box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); */
    background-color: rgb(211, 211, 211);
    color: rgb(156, 156, 156);
    padding: 15px;
    width: auto;
    margin: 10px auto; /* Center horizontally and add 10px margin */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center vertically */
}

.SearchResultTitle {
    margin-bottom: 20px;
    font-size: 48px;
    font-weight: bold;
}

.searchMessageContent {
    /* color: rgb(209, 209, 209); */
}
</style>