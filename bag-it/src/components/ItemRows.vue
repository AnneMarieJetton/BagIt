<template>
    <div class="itemRows">
        <!-- Render multiple item components here -->
        <Item v-for="(item, index) in items" :key="index" :item="item" />
    </div>
</template>

<script>

import Item from '@/components/Item.vue'; // Import the Item component

export default {
name: 'ItemRows',
components: {
    Item // Register the Item component
},
props: {
    msg: String
},
data() {
    return {
        items: [ /* Array of item data */
            { image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg", category: 'Category 1', name: 'Item 1', price: '$10' },
            { image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg", category: 'Category 2', name: 'Item 2', price: '$20' },
            { image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg", category: 'Category 3', name: 'Item 3', price: '$10' },
            { image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg", category: 'Category 4', name: 'Item 4', price: '$20' },
            { image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg", category: 'Category 5', name: 'Item 5', price: '$10' },
            { image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg", category: 'Category 6', name: 'Item 6', price: '$20' },
            { image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg", category: 'Category 7', name: 'Item 7', price: '$10' },
            { image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg", category: 'Category 8', name: 'Item 8', price: '$20' },
            { image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg", category: 'Category 9', name: 'Item 9', price: '$10' },
            { image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg", category: 'Category 10', name: 'Item 10', price: '$20' },
            { image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg", category: 'Category 1', name: 'Item 1', price: '$10' },
            { image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg", category: 'Category 2', name: 'Item 2', price: '$20' },
            { image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg", category: 'Category 3', name: 'Item 3', price: '$10' },
            { image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg", category: 'Category 4', name: 'Item 4', price: '$20' },
            { image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg", category: 'Category 5', name: 'Item 5', price: '$10' },
            { image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg", category: 'Category 6', name: 'Item 6', price: '$20' },
            { image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg", category: 'Category 7', name: 'Item 7', price: '$10' },
            { image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg", category: 'Category 8', name: 'Item 8', price: '$20' },
            { image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg", category: 'Category 9', name: 'Item 9', price: '$10' },
            { image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg", category: 'Category 10', name: 'Item 10', price: '$20' },
            { image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg", category: 'Category 1', name: 'Item 1', price: '$10' },
            { image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg", category: 'Category 2', name: 'Item 2', price: '$20' },
            { image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg", category: 'Category 3', name: 'Item 3', price: '$10' },
            { image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg", category: 'Category 4', name: 'Item 4', price: '$20' },
            // Add more item data as needed
        ]
    };
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.itemRows {
    display: flex;
    flex-wrap: wrap; /* Allow items to wrap to the next row */
    justify-content: space-between; /* Distribute items evenly in each row */
    padding: 50px;
}

@media screen and (max-width: 768px) {
    .itemRows {
        justify-content: center; /* Center items when screen size is smaller */
    }
}
</style>


<!-- echo -n "bagit-790ee61e0185000a83c3135caaae92738205688571381149701:gBZzkiDqknxNw2hXxUvbkR_ZGOA8PpYKTDCVxrwX" | base64 -->

<!-- YmFnaXQtNzkwZWU2MWUwMTg1MDAwYTgzYzMxMzVjYWFhZTkyNzM4MjA1Njg4NTcxMzgxMTQ5NzAxOmdCWnpraURxa254TncyaFh4VXZia1JfWkdPQThQcFlLVERDVnhyd1g=

curl -X POST \
  'https://api.kroger.com/v1/connect/oauth2/token' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Authorization: Basic YmFnaXQtNzkwZWU2MWUwMTg1MDAwYTgzYzMxMzVjYWFhZTkyNzM4MjA1Njg4NTcxMzgxMTQ5NzAxOmdCWnpraURxa254TncyaFh4VXZia1JfWkdPQThQcFlLVERDVnhyd1g=' \
  -d 'grant_type=client_credentials'

  npm run serve -->

