<template>
    <div class="itemColumn">
        <Item v-for="(item, index) in items" :key="index" :item="item" />
    </div>
</template>

<script>

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
        items: [ /* Array of item data */
            { image: "https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg", category: 'Category 1', name: 'Item 1', price: '$10' },
        ]
    };
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>