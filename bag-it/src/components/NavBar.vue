<template>
    <div id="navBar" class="navBar">
        <nav class="NavBarLinks">
            <router-link to="/" class="homeLink">
                <div class="homeLinkContent">
                    BagIt
                </div>
            </router-link>

            <div class="NavBarInput">
                <div class="NavBarInputBox">
                    <input v-model="email" type="text" placeholder="Try 'Nutella'...">
                </div>
                <router-link :to="{ path: '/search', query: { email: email } }" class="NavBarInputButton">
                    <span>Search</span>
                </router-link>
            </div>

            <router-link to="/cart" class="cartLink">
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
    },
    data() {
        return {
            email: '' // Initialize email data property
        };
    },
    methods: {
        updateEmail() {
            console.log("navbar pre: "+ this.email);
            this.$emit('updateEmail', this.email);
            console.log("navbar post: "+ this.email);
        }
    }
}
</script>

<!-- <template>
    <div id="navBar" class="navBar">
        <nav class="NavBarLinks">
            <router-link to="/" class="homeLink">
                <div class="homeLinkContent">
                    BagIt
                </div>
            </router-link>

            <div class="NavBarInput">
                <div class="NavBarInputBox">
                    <input v-model="email" type="text" placeholder="Try 'Nutella'...">
                </div>
                <router-link to="/search" class="NavBarInputButton">
                    <span>Search</span>
                </router-link>
            </div>

            <router-link to="/cart" class="cartLink">
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
</script> -->

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
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.homeLink{
    margin-right: auto;
    text-decoration: none;
}

.homeLinkContent{
    border-radius: 5px;
    width: auto;
    height:auto;
    margin: 5px;
    font-size: 30px;
    color: rgb(52, 58, 0);

    display: flex;
    justify-content: space-between;
    align-items: center;

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
    width: 50px;
    height:auto;
    margin-left: auto;
    margin: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px;
    text-decoration: none;
}

.cartLink img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
}

.cartLink span {
    color: white;
    font-size: 12px;
    font-weight: bold;
}

.NavBarInput {
    border-radius: 5px;
    background-color: white;
    width: 250px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;

}

.NavBarInputBox {
    width: 70%;
    height: 100%;
    border-radius: 5px 0 0 5px;
    /* text-decoration: none; */
}

.NavBarInputBox input {
    width: 100%;
    height: 100%;
    padding: 5px;
    border: none;
    border-radius: 5px 0 0 5px;
    box-sizing: border-box;
    border: 2px solid rgb(52, 58, 0);
}

.NavBarInputButton {
    display: flex;
    height: 100%;
    width: 30%;
    background-color: rgb(52, 58, 0);
    border-radius: 0 5px 5px 0;
    color: white;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    text-decoration: none;
}

.NavBarInputButton button, .NavBarInputButton span {
    border: none;
    background: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    color: inherit;
    outline: none;
    border: 2px solid rgb(52, 58, 0);
}



</style>