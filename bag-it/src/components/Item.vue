<template>
    <div class="item">
        <div class="itemImgContainer">
            <!-- <img src="https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg" alt="logo"> -->
            <img :src="item.image" alt="https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg">
        </div>
        <div class="itemInfo">
            <span class="itemInfoCategory">{{ item.category }}</span>
            <span class="itemInfoName">{{ item.name }}</span>
            <!-- <span class="itemInfoPrice">{{ item.price }}</span> -->
            <span class="itemInfoPrice">${{ Price }}</span>
            <button @click="addToCart">ADD TO CART</button>
        </div>
    </div>
</template>

<script>
import { cartItems } from '@/jsFiles/cartStore.js';

// const price = (Math.random() * (5 - 1) + 1).toFixed(2);

export default {
name: 'Item',
props: {
    item: Object
},
computed: {
    Price() {
        const price = (Math.random() * (5 - 1) + 1).toFixed(2);
        return price;
    }
},
methods: {
    addToCart() {
        // this.$cartContents.items.push(this.item);
        // console.log("Item added to cart:", this.item);
        cartItems.value.push(this.item);
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.item{
    width: 200px;
    height: 300px;
    background-color: white;
    border-radius: 5px;
    /* margin: 10px; */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

    display: flex;
    flex-direction: column;
}

.itemImgContainer{
    width: 100%;
    height: 70%;
    overflow: hidden;
    border-bottom: 1px solid rgb(235, 235, 235);
    padding: 10px;
    box-sizing: border-box;
}

.itemImgContainer img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.itemInfo {
    display: flex;
    flex-direction: column;
    padding: 10px;
    flex: 1;
}

.itemInfo span {
    display: block;
    margin-bottom: 10px;
}

.itemInfoCategory {
    color: rgb(204, 204, 204);
    font-size: 12px;
}

.itemInfoName {
    color: black;
    font-size: 14px;
    font-weight: bold;
}

.itemInfoPrice {
    color: gray;
    font-size: 12px;
}

.itemInfo button {
    border: none;
    background: none;
    padding: 5px;
    font: inherit;
    cursor: pointer;
    color: inherit;
    outline: none;

    background-color: rgb(52, 58, 0);
    border-radius: 5px;
    color: white;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 10px;
}
</style>