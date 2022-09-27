<template>
    <div>
        <h1>这个是App组件</h1>
        <MyUser></MyUser>
        <MyOrder></MyOrder>
    </div>
</template>

<script>
import MyOrder from '@/components/MyOrder.vue';
import MyUser from '@/components/MyUser.vue';
export default {
    name: 'App',
    components: {
        MyOrder,
        MyUser
    }
}
</script>

<style scoped>
 h1{
    color:blue;
 }
</style>
