<template>
  <div class="home">
    <NavBar/>
    <Banner/>
    <DealOfTheDay/>
    <ItemRows msg="Produce" :items="items1" />
    <ItemRows msg="Dairy" :items="items2" />
    <ItemRows msg="Snacks" :items="items3" />
    <ContactUs/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Banner from '@/components/Banner.vue'
import DealOfTheDay from '@/components/DealOfTheDay.vue'
import ItemRows from '@/components/ItemRows.vue'
import ContactUs from '@/components/ContactUs.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    Banner,
    DealOfTheDay,
    ItemRows,
    ContactUs,
  },
  data() {
    return {
        items1: [ /* Array of item data */
            { image: "https://freepngimg.com/thumb/cherry/32667-5-black-cherry-transparent-background.png", category: 'Produce', name: 'Cherries', price: '$10' },
            { image: "https://i.pinimg.com/originals/30/90/f6/3090f63b47d642ac1be6b059e2820946.png", category: 'Produce', name: 'Strawberries', price: '$20' },
            { image: "https://pngfre.com/wp-content/uploads/orange-png-from-pngfre-6-300x260.png", category: 'Produce', name: 'Oranges', price: '$10' },
            { image: "https://www.freeiconspng.com/uploads/banana-png-28.png", category: 'Produce', name: 'Bannanas', price: '$20' },
            { image: "https://www.pngall.com/wp-content/uploads/12/Lime-PNG.png", category: 'Produce', name: 'Limes', price: '$10' },
            { image: "https://purepng.com/public/uploads/large/purepng.com-blueberry-with-leaffruitsblueberriesberryberriesblueberry-981524760516srdeu.png", category: 'Produce', name: 'Blueberries', price: '$20' },
            { image: "https://pngimg.com/d/plum_PNG8674.png", category: 'Produce', name: 'Plums', price: '$10' },
            { image: "https://static.vecteezy.com/system/resources/previews/010/987/513/non_2x/ripe-dragon-fruit-with-half-isolated-on-white-background-with-clipping-path-png.png", category: 'Produce', name: 'Dragonfruit', price: '$20' },
            // Add more item data as needed
        ],
        items2: [ /* Array of item data */
            { image: "https://purepng.com/public/uploads/large/purepng.com-milkmilkliquidnutritioncow-1411527877115csfpi.png", category: 'Dairy', name: 'Lowfat Milk', price: '$10' },
            { image: "https://static.vecteezy.com/system/resources/thumbnails/019/908/317/small/fresh-chicken-eggs-in-woven-bamboo-basket-isolated-with-clipping-path-in-file-format-close-up-with-full-focus-png.png", category: 'Dairy', name: 'Eggs', price: '$20' },
            { image: "https://pngimg.com/d/butter_PNG17.png", category: 'Dairy', name: 'Butter', price: '$10' },
            { image: "https://cdn.gardengrocer.com/attachments/photos/high_res/1284.png?7542", category: 'Dairy', name: 'Sour Cream', price: '$20' },
            { image: "https://pngimg.com/d/yogurt_PNG15186.png", category: 'Dairy', name: 'Yogurt', price: '$10' },
            { image: "https://cdn.gardengrocer.com/attachments/photos/high_res/1323.png?6702", category: 'Dairy', name: 'Creme Cheese', price: '$20' },
            { image: "https://ip.prod.freshop.retail.ncrcloud.com/resize?url=https://images.freshop.ncrcloud.com/00036800051447/7caca36899ad34309b264a2617d71095_large.png&width=512&type=webp&quality=90", category: 'Dairy', name: 'Mozzarella Cheese', price: '$10' },
            { image: "https://cdn.gardengrocer.com/attachments/photos/big/6320.jpeg?4937", category: 'Dairy', name: 'Cheddar Cheese', price: '$20' },
            // Add more item data as needed
        ],
        items3: [ /* Array of item data */
            { image: "https://yoshon.b-cdn.net/wp-content/uploads/2021/09/nabiscooreodoublestuf600x434.png", category: 'Snacks', name: 'Oreos Double Stuff', price: '$10' },
            { image: "https://bjs.scene7.com/is/image/bjs/199179?$bjs-Zoom$", category: 'Snacks', name: 'Gushers', price: '$20' },
            { image: "https://www.pngkey.com/png/full/579-5799427_twizzlers-twists-twizzlers-strawberry.png", category: 'Snacks', name: 'Twizzlers', price: '$10' },
            { image: "https://www.pngall.com/wp-content/uploads/15/MM-Background-PNG.png", category: 'Snacks', name: 'M&Ms', price: '$20' },
            { image: "https://www.berkshirenatural.com/wp-content/uploads/2018/03/Nature-Valley-Oats-and-Honey.png", category: 'Snacks', name: 'Nature Valley Bars', price: '$10' },
            { image: "https://images.freshop.com/00044000031114/3a931e1b83670b278878d693e4f2cebb_large.png", category: 'Snacks', name: 'Ritz Crackers', price: '$20' },
            { image: "https://bjs.scene7.com/is/image/bjs/35906?$bjs-Zoom$", category: 'Snacks', name: 'Beef Jerky', price: '$10' },
            { image: "https://images.freshop.ncrcloud.com/00028400420730/5ffdf82119739561e6c77d64b2781e88_large.png", category: 'Snacks', name: 'Doritos', price: '$20' },
            // Add more item data as needed
        ]
    };
}
}
</script>
