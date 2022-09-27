<template>
    <div>
        <h1>这个是App组件的数据</h1>
        <p>姓名: {{user.username}}</p>
        <p>年龄: {{user.age}}</p>
        <p>父亲的姓名: {{user.parent.father}}</p>
        <p>母亲的姓名: {{user.parent.mother}}</p>
        <button @click="updateUsername">修改username的值</button>
        <button @click="updateFahter">修改父亲的值</button>
    </div>
</template>

<script>
import { reactive,watch } from 'vue';
export default {

    setup () {
        // 1、定义引用数据类型的响应式数据
        let user = reactive({
            username: 'HelloWorld',
            age: 21,
            parent: {
                father: '大Hello',
                mother: '小Hello'
            }
        });

        function updateUsername () {
            user.username = 'Spring';
        }

        function updateFahter(){
            user.parent.father = '大大大Hello';
        }

        // 默认采用的就是深度侦听
        // newValue和oldValue指向的是一个对象
        watch(user,(newValue,oldValue)=>{
            console.log('侦听到了数据:' , newValue, oldValue);
            console.log(newValue === oldValue);
        },{
            immediate: true
        }); 

        // 2、返回
        return {
            user,
            updateUsername,
            updateFahter
        }
    }
}
</script>

<style scoped>
 h1{
    color:blue;
 }
</style>
