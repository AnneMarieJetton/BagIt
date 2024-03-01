<template>
    <div class="banner">
        <img class="bannerImg" src="../assets/GroceryBanner.png">
        <div class="bannerInput">
            <div class="bannerInputBox">
                <input v-model="email" type="text" placeholder="Enter your email">
            </div>
            <div class="bannerInputButton">
                <button @click="subscribe">Subscribe</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: 'Banner',
props: {
    msg: String
},
data() {
        return {
            email: '' // Initialize email data property
        }
},
methods: {
    subscribe() {
    // Check if the email is not blank
        if (this.email.trim() !== '') {
            // Reset email input to default text
            this.email = '';
            // Display an alert
            alert('Subscribed!');
        }
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.banner {
    position: relative;
    width: 100%;
    height: auto;
}

.bannerImg {
    width: 100%;
    height: 100%;
}

.bannerInput {
    position: absolute; /* Position absolutely within parent */
    top: 60%; /* Position vertically at 50% from the top */
    left: 50%; /* Position horizontally at 50% from the left */
    transform: translate(-50%, -50%); /* Center the element */
    border-radius: 5px;
    background-color: white;
    width: 250px; /* Set desired width */
    height: 35px; /* Set desired height */

    display: flex; /* Use flexbox layout */
    justify-content: space-between; /* Space items evenly */
    align-items: center; /* Align items vertically */

    /* border: 2px solid rgb(41, 58, 0); */
    
}

.bannerInputBox {
    width: 70%;
    height: 100%;
    border: 2px solid rgb(52, 58, 0);
    border-radius: 5px 0 0 5px;
}

.bannerInputBox input {
    width: 100%;
    height: 100%;
    padding: 5px; /* Add padding for better appearance */
    border: none;
    border-radius: 5px;
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

.bannerInputButton {
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

.bannerInputButton button {
    border: none;
    background: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    color: inherit;
    outline: none;
}

</style>