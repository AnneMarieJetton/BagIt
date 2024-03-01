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
            { category: 'Category 1', name: 'Item 1', price: '$10' },
            { category: 'Category 2', name: 'Item 2', price: '$20' },
            { category: 'Category 3', name: 'Item 3', price: '$10' },
            { category: 'Category 4', name: 'Item 4', price: '$20' },
            { category: 'Category 5', name: 'Item 5', price: '$10' },
            { category: 'Category 6', name: 'Item 6', price: '$20' },
            { category: 'Category 7', name: 'Item 7', price: '$10' },
            { category: 'Category 8', name: 'Item 8', price: '$20' },
            { category: 'Category 9', name: 'Item 9', price: '$10' },
            { category: 'Category 10', name: 'Item 10', price: '$20' },
            { category: 'Category 1', name: 'Item 1', price: '$10' },
            { category: 'Category 2', name: 'Item 2', price: '$20' },
            { category: 'Category 3', name: 'Item 3', price: '$10' },
            { category: 'Category 4', name: 'Item 4', price: '$20' },
            { category: 'Category 5', name: 'Item 5', price: '$10' },
            { category: 'Category 6', name: 'Item 6', price: '$20' },
            { category: 'Category 7', name: 'Item 7', price: '$10' },
            { category: 'Category 8', name: 'Item 8', price: '$20' },
            { category: 'Category 9', name: 'Item 9', price: '$10' },
            { category: 'Category 10', name: 'Item 10', price: '$20' },
            { category: 'Category 1', name: 'Item 1', price: '$10' },
            { category: 'Category 2', name: 'Item 2', price: '$20' },
            { category: 'Category 3', name: 'Item 3', price: '$10' },
            { category: 'Category 4', name: 'Item 4', price: '$20' },
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