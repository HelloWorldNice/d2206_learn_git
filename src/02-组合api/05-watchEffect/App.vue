<template>
    <div>
        <h1>这个是App组件的数据</h1>
        <p>姓名: {{message}}</p>
        <button @click="updateMessage">修改message的值</button>
        <hr/>
        <p>数字:{{number}}</p>
        <button @click="updateNumber">修改Number的值</button>
    </div>
</template>

<script>
import { ref,watchEffect } from 'vue';
export default {

    setup () {
        let message = ref('HelloWorld');
        let number = ref(0);

        function updateMessage () {
            message.value = 'Spring' + Math.random();
        }

        function updateNumber () {
            number.value++;
        }

        let stop = watchEffect(() => {
            console.log('----' , number.value);
            
            if (number.value > 5) {
                stop();
            }
        });

        return {
            message,
            number,
            updateNumber,
            updateMessage
        }
    }
}
</script>

<style scoped>
 h1{
    color:blue;
 }
</style>
