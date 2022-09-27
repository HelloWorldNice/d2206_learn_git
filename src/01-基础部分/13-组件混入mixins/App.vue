<template>
    <div>
        <!-- 编译作用域 -->
        <h1>这个是App组件的数据</h1>
        <AsyncMyComponent/>
        <MyOrder/>
    </div>
</template>

<script>

import { defineAsyncComponent } from 'vue';

let AsyncMyComponent = defineAsyncComponent(() => {
    return import('@/components/MyComponent.vue');
});

import MyOrder from '@/components/MyOrder.vue';

export default {
    name: 'App',
    components: {
        AsyncMyComponent,
        MyOrder
    }
}
</script>

<style scoped>
 h1{
    color:blue;
 }
</style>
