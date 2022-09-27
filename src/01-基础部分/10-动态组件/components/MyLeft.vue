<template>
    <div>
        <button>Left组件: {{number}}</button>
        {{username}}
        <button @click="incrementNumber">+1</button>
    </div>
</template>

<script>
export default {
    name: 'MyLeftComp',
    props: ['username'],
    data(){
        return {
            number: 0
        }
    },
    created () {
        console.log('---MyLeft--created---');
    },
     // 组件被激活
    activated(){
        console.log('Left 组件被激活了...');
    },

    // 组件被缓存的时候触发
    deactivated(){
        console.log('Left 组件被缓存了...');
    },
    methods: {
        incrementNumber () {
            this.number++;
        }
    }
}
</script>

<style>

</style>