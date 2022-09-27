<template>
    <div>
        <!-- 编译作用域 -->
        <h1>这个是App组件的数据</h1>
        <p ref="pObj">今天天气很晴朗......</p>
        <button @click="getContent">获取p标签中的内容</button>
        <hr/>
        <MyComponet ref="myComp"></MyComponet>
        <button @click="getComp">获取MyCompent组件实例</button>
    </div>
</template>

<script>
import MyComponet from '@/components/MyComponent.vue';
export default {
    name: 'App',
    components: {
        MyComponet
    },
    methods: {
        getContent () {
            // 原生的方式获取p元素
            // let pObj = document.querySelector('p');
            // console.log(pObj.innerText);

            // 通过ref的方式获取元素
            let content = this.$refs.pObj.innerText;
            console.log(content);
        },
        getComp () {
            let compObj = this.$refs.myComp;
            console.log(compObj.message);
            compObj.info();
        }
    }
}
</script>

<style scoped>
 h1{
    color:blue;
 }
</style>
