<template>
    <div>
        <!-- 编译作用域 -->
        <h1>这个是App组件的数据</h1>
        <AsyncMyComponent/>
    </div>
</template>

<script>

import { defineAsyncComponent } from 'vue';

let AsyncMyComponent = defineAsyncComponent(() => {
    return import('@/components/MyComponent.vue');
});

export default {
    name: 'App',
    components: {
        AsyncMyComponent
    }
}
</script>

<style scoped>
 h1{
    color:blue;
 }
</style>
