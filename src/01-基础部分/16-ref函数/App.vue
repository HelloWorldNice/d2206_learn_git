<template>
    <div>
        <h1>这个是App组件的数据</h1>
        <p>用户名是: {{user.username}}</p>
        <p>年龄是: {{user.age}}</p>
        <p>家庭住址: {{ address }}</p>

        <button @click="updateUser">修改用户信息</button>
        <button @click="updateAddress">修改用户地址</button>
        <hr/>

        <ul>
            <li v-for="item in books" :key="item.id">
                {{item.bookName}}
            </li>
        </ul>

    </div>
</template>

<script>
import { ref,onMounted } from 'vue';
export default {
    setup () {

        // 定义复杂的数据类型的数据
        let user = ref({
            username: 'HelloWorld',
            age: 23
        });

        let updateUser = () => {
            user.value.username = 'xxx';
            user.value.age = 66;
        }

        // reactive是不支持基本的数据类型
        let address = ref('郑州市');
        let updateAddress = () => {
            address.value = '周口市';
        }

        let books = ref([]);
        onMounted(() => {
            // 模拟ajax
            let result = [
                {id: 1, bookName: '天龙八部'},
                {id: 2, bookName: 'CSS'}
            ];
            books.value = result;
        });


        return {
            user,
            address,
            books,
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
