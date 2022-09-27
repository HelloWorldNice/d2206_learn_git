<template>
    <div>
        <h1>这个是MyComponent组件..</h1>
        {{message}}
        <slot></slot>
    </div>
</template>

<script>
export default {
 data () {
        return {
            message: 'Spring'
        }
    }
}
</script>

<style>

</style>