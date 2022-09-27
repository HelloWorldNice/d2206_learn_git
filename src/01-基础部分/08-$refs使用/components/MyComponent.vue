<template>
    <div>
        <h1>这个是MyComponet组件</h1>
    </div>
</template>

<script>
export default {
    data () {
        return {
            message: 'HelloWorld'
        }
    },
    methods: {
        info(){
            console.log('info方法');
        }
    }
}
</script>

<style>

</style>