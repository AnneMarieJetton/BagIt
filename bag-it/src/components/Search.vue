<template>
    <div class="search">
        <div class="searchBar">
            <div class="searchBarInput">
                <div class="searchBarInputBox">
                    <input v-model="email" type="text" placeholder="Enter your email">
                </div>
                <div class="searchBarInputButton">
                    <button @click="subscribe">Subscribe</button>
                </div>
            </div>
        </div>
        <div class="searchMessage">
            <span class="searchMessageContent">
                Unfortunately, without paying, this API only allows searching by barcode number, so that will be enough for demonstration purposes. Try "3017624010701" for Nutella, "8901764012273" for Coca Cola, or a different barcode number.
            </span>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Search',
    props: {},
    data() {},
    methods: {}
}
</script>

<style scoped>
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

.searchMessageTitle {
    margin-bottom: 5px;
    font-size: 24px;
    font-weight: bold;
}

.searchMessageContent {
    /* color: rgb(209, 209, 209); */
}

/*  */

.searchBarInput {
    /* position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%); */
    margin: 0 auto;
    border-radius: 5px;
    background-color: white;
    width: auto;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.searchBarInputBox {
    width: 70%;
    height: 100%;
    border: 2px solid rgb(52, 58, 0);
    border-radius: 5px 0 0 5px;
}

.searchBarInputBox input {
    width: 100%;
    height: 100%;
    padding: 5px; /* Add padding for better appearance */
    border: none;
    border-radius: 5px;
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

.searchBarInputButton {
    display: flex;
    height: 100%;
    width: 30%;
    background-color: rgb(52, 58, 0);
    border-radius: 0 5px 5px 0;
    /* margin: 0; */
    border: 2px solid rgb(52, 58, 0);
    color: white;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
}

.searchBarInputButton button {
    border: none;
    background: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    color: inherit;
    outline: none;
}
</style>