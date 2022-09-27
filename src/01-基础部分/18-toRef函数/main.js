import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App);

// 全局混入
app.mixin({
    data() {
        return {
            xxx: 'abc'
        }
    }
});

app.mount('#app')