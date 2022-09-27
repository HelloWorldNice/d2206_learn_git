import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App);

// import { sum } from '@/utils/DateFormat.js';
// console.log(sum(20, 40));

import ('@/utils/DateFormat.js').then(function(result) {
    console.log(result.sum(90, 60));
});

app.mount('#app')