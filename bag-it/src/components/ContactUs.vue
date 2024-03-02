<template>
    <div class="contactUs">
        <div class="contactUsColumn">
            <span>Contact Us</span>
            <span>Careers</span>
            <span>Our Mission</span>
        </div>
        <div class="contactUsColumn">
            <span>Food Donation Program</span>
            <span>APIs</span>
            <span>Help</span>
        </div>
        <div class="contactUsColumn">
            <span>Product Recalls</span>
            <span>Get The App</span>
            <span>Terms Of Use</span>
        </div>
    </div>
</template>

<script>
export default {
name: 'ContactUs',
props: {
    msg: String
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contactUs{
    position: relative;
    width: 100%;
    height: auto;
    background-color: rgb(52, 58, 0);
    color: black;
    padding: 10px;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}

.contactUsColumn{
    flex: 1;
    width: auto;
    height: auto;
    /* background-color: red; */
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
}

.contactUsColumn span{
    flex: 1;
    padding: 10px;
}

</style>