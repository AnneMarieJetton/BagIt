<template>
    <div id="navBar" class="navBar">
        <nav class="NavBarLinks">
            <router-link to="/" class="homeLink">
                <!-- <img src="https://t4.ftcdn.net/jpg/06/24/40/73/360_F_624407356_SEawnQTYWqB73IMvpQPKcDB1CvowLUBH.jpg" alt="logo"> -->
                <div class="homeLinkContent">
                    BagIt
                </div>
            </router-link>

            <router-link to="/about" class="cartLink">
                <img src=".\..\assets\CartIconWhite.png" alt="cart">
                <span>Cart</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
name: 'NavBar',
props: {
    msg: String
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

nav {
    display: flex;
}



.footerP{
    padding: 0px;
    margin: 0px;
}
.navBar{
    width: 100%;
    height: auto;
    background-color: rgb(147, 160, 75);
}

.navBarLinks{
    display: flex; /* Use flexbox layout */
    justify-content: space-between; /* Space items evenly */
    align-items: center; /* Align items vertically */
}

.homeLink{
    /* flex: 1; */
    margin-right: auto;
    text-decoration: none;
}

.homeLinkContent{
    border-radius: 5px;
    /* background-color: rgb(0, 36, 2); */
    /* flex: 1; */
    width: auto;
    height:auto;
    /* margin-left: auto; */
    margin: 5px;
    font-size: 30px;
    color: rgb(52, 58, 0);

    display: flex; /* Use flexbox layout */
    justify-content: space-between; /* Space items evenly */
    align-items: center; /* Align items vertically */

    padding: 10px;
    font-weight: bold;
}

.homeLink img{
    width: 10%;
    height: 100%;
}

.cartLink {
    border-radius: 5px;
    background-color: rgb(52, 58, 0);
    /* flex: 1; */
    width: 50px;
    height:auto;
    margin-left: auto;
    margin: 5px;

    display: flex; /* Use flexbox layout */
    justify-content: space-between; /* Space items evenly */
    align-items: center; /* Align items vertically */

    padding: 10px;
    text-decoration: none;
}

.cartLink img {
    width: 20px; /* Set width of the image */
    height: 20px; /* Set height of the image */
    margin-right: 5px; /* Add margin for spacing between image and text */
}

.cartLink span {
    color: white; /* Set color of the text */
    font-size: 12px;
    font-weight: bold;
}

</style>