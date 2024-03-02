<template>
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
</template>

<script>
export default {
    name: 'SearchBar',
    props: {},
    data() {},
    methods: {}
}
</script>

<style scoped>

/* .searchBar{

} */

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