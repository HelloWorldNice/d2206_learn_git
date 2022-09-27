import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

// 在app的全局属性上去注册事件中心
import mitt from 'mitt';
app.config.globalProperties.$eventBus = mitt();

app.mount('#app')