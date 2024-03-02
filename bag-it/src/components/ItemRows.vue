<template>
    <div class="itemRows">
        <p class="message">{{ msg }}</p>
        <div class="items-container">
            <Item v-for="(item, index) in items" :key="index" :item="item" />
        </div>
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
    msg: String,
    items: Array
},
data() {
    return {
        
    };
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.itemRows {
    display: flex;
    flex-direction: column; /* Display items in a column layout */
    align-items: center; /* Center align items horizontally */
    padding: 50px;
}

.message {
    margin-bottom: 20px; /* Add some space below the message */
    text-align: left;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    font-weight: bold;
    font-size: 24px;
}

.items-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%; /* Ensure items span the full width */
}

@media screen and (max-width: 768px) {
    .itemRows {
        justify-content: center;
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

