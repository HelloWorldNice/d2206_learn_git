<template>
    <h1>这个是Home组件</h1>
    <p>计数器: {{number}}</p>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
</template>

<script>
import useNumber from '@/hooks/useNumber.js';
export default {
    setup () {
        
        // 使用计数器的功能
        let {number,add,sub} = useNumber();

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