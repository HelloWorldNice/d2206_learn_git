<template>
    <div>
        <h1>这个是App组件的数据</h1>
        <p ref="pRef">今天天气很晴朗</p>
        <button @click="getPNodeContent">获取p标签中的内容</button>
        <hr/>
        <User ref="userRef"/>
        <button @click="getUserComp">获取User组件</button>
    </div>
</template>

<script>
import { ref } from 'vue';
import User from '@/components/User.vue';
export default {
    components: {
        User
    },
    setup () {
        // 1、定义一个ref响应式的数据
        let pRef = ref();  
        let userRef = ref();

        function getPNodeContent () {
            console.log(pRef.value.innerHTML);
        }

        function getUserComp () {
            let user = userRef.value.user;
            console.log(user);

            userRef.value.run();
        }

        // 2、返回该数据
        return {
            pRef,
            userRef,
            getPNodeContent,
            getUserComp
        }
    }
}
</script>

<style scoped>
 h1{
    color:blue;
 }
</style>
