<template>
    <div>
        <!-- 编译作用域 -->
        <h1>这个是App组件的数据</h1>
        <MyUser/>
    </div>
</template>

<script>
import MyUser from '@/components/MyUser.vue';
export default {
    name: 'App',
    components: {
        MyUser
    }
}
</script>

<style scoped>
 h1{
    color:blue;
 }
</style>
