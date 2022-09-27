<template>
    <div>
        <h1>这个是App组件的数据</h1>
        <Home/>
        <hr/>
        <About/>
    </div>
</template>

<script>
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
export default {
    components: {
        Home,
        About
    }
}
</script>

<style scoped>
 h1{
    color:blue;
 }
</style>
