<template>
    <div>
        <h1>这个是App组件的数据</h1>
        <p>姓名: {{username}}</p>
        <p>年龄: {{age}}</p>
        <button @click="run">点击我</button>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup () {

        // 通过ref来实现响应式
        let username = ref('HelloWorld');
        // 这些变量不是响应式的变量
        let age = 23; 

        let run =  ()=>{
            console.log('---run---');
            username.value = 'Spring';
            console.log(username);
        }

        return {
            username,
            age,
            run
        }
    }
}
</script>

<style scoped>
 h1{
    color:blue;
 }
</style>
