import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue';

createApp(App).use(router).mount('#app')

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import Vue from 'vue';

// const app = createApp(App);

// app.use(router);

// const cartContents = {
//     items: []
// };

// app.config.globalProperties.$cartContents = cartContents;

// app.mount('#app');
