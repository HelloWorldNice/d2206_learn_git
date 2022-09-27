<template>
    <div>
        <h1>这个是App组件的数据</h1>
        ---{{age}}

        <button @click="updateUsername">修改数据</button>
    </div>
</template>

<script>
import { toRef,reactive } from 'vue';
export default {
    setup () {
        let user = reactive({ username: 'HelloWorld', age: 66 });

        let age = toRef(user,'age');

        let updateUsername = () => {
            age.value = 62;
        }

        return {
            age,
            updateUsername
        }
    }
}
</script>

<style scoped>
 h1{
    color:blue;
 }
</style>
