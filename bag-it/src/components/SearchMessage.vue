<template>
    <div class="searchMessage">
        <span class="searchMessageContent">
            Unfortunately, without paying, this API only allows searching by barcode number, so that will be enough for demonstration purposes. Try "3017624010701" for Nutella, "8901764012273" for Coca Cola, or a different barcode number.
        </span>
    </div>
</template>

<script>
export default {
    name: 'SearchMessage',
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
</style>
