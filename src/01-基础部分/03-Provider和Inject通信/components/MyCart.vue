<template>
    <div>
        <h1>这个是中间的组件MyCart</h1>
        <MyCartItem></MyCartItem>
    </div>
</template>

<script>
import MyCartItem from '@/components/MyCartItem.vue';
export default {
    components: {
        MyCartItem
    }
}
</script>

<style>

</style>