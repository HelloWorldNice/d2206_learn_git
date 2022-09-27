<template>
    <h1>这个是About组件</h1>
    <p>计数器: {{number}}</p>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
</template>

<script>
import { ref } from 'vue';
export default {
    setup(){
        let number = ref(0);

        function add(){
            number.value++;
        }

        function sub(){
            number.value--;

        }
        return {
            number,
            add,
            sub
        }
    }
}
</script>

<style>

</style>