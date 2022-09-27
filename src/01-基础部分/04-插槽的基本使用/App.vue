<template>
    <div>
        <h1>这个是App组件的数据</h1>
        <MyComponet/>
        <hr/>
         <MyComponet>
            <p>p标签</p>
         </MyComponet>
         <hr/>
         <MyComponet>
            <button>buttont按钮</button>
         </MyComponet>
    </div>
</template>

<script>
import MyComponet from '@/components/MyComponent.vue';
export default {
    name: 'App',
    components: {
        MyComponet
    }
}
</script>

<style scoped>
 h1{
    color:blue;
 }
</style>
