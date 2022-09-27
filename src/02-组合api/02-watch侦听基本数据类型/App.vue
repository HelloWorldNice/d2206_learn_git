<template>
    <div>
        <h1>这个是App组件的数据</h1>
        <p>message: {{message}}</p>
        <button @click="updateUsername">修改message的值</button>
    </div>
</template>

<script>
import { ref,watch } from 'vue';
export default {

    setup () {
        // 1、定义一个基本数据类型的响应式数据
        let message = ref('HelloWorld');

        let updateUsername = () => {
            message.value = 'Spring';
        }

        watch(message, (newValue,oldValue) => {
            console.log('watch侦听到了:',newValue,oldValue);
        }, {
            immediate: true
        });

        // 2、返回
        return {
            message,
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
