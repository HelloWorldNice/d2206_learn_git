<template>
    <div>
        <!-- 编译作用域 -->
        <h1>这个是App组件的数据</h1>
        <button @click="toLeft">切换到Left组件</button>
        <button @click="toRight">切换到Right组件</button>
        <hr/>

        <keep-alive include="MyLeftComp">
            <component :is="compName" :username="username" ></component>
        </keep-alive>
    </div>
</template>

<script>
import MyLeft from '@/components/MyLeft.vue';
import MyRight from '@/components/MyRight.vue'

export default {
    name: 'App',
    data () {
        return {
            compName: 'MyLeft',
            username: 'HelloWorld--'
        }
    },
    components: {
        MyLeft,
        MyRight
    },
    methods: {
        toLeft () {
            this.compName = 'MyLeft';
        },
        toRight () {
            this.compName = 'MyRight';
        }
    }
}
</script>

<style scoped>
 h1{
    color:blue;
 }
</style>
