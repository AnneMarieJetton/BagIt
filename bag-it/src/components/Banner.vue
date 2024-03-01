<template>
    <div class="banner">
        <img class="bannerImg" src="../assets/GroceryBanner.png">
    </div>
</template>

<script>
export default {
name: 'Banner',
props: {
    msg: String
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.banner {
    width: 100%;
    height: auto;
    /* background-color: red; */
}

.bannerImg {
    width: 100%;
    height: 100%;
}

</style>