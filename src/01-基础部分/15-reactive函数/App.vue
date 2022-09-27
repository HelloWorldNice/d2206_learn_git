<template>
    <div>
        <h1>这个是App组件的数据</h1>
        <p>用户名是: {{user.username}}</p>
        <p>年龄是: {{user.age}}</p>
        <p>家庭住址: {{ address }}</p>

        <button @click="updateUser">修改用户信息</button>
        <button @click="updateAddress">修改用户地址</button>
    </div>
</template>

<script>
import { reactive } from 'vue';
export default {
    setup () {

        // 定义复杂的数据类型的数据
        let user = reactive({
            username: 'HelloWorld',
            age: 23
        })

        let updateUser = () => {
            user.username = 'Spring',
            user.age = 88;
        }

        // reactive是不支持基本的数据类型
        let address = reactive('郑州市');
        let updateAddress = () => {
            address = '周口市';
        }


        return {
            user,
            address,
            updateAddress,
            updateUser
        }
    }
}
</script>

<style scoped>
 h1{
    color:blue;
 }
</style>
