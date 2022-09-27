<template>
    <div>
        <slot name="first"></slot>
        <h1>这个是MyComponet组件,这个是公共的代码</h1>
        <slot name="two"></slot>
        <slot name="three"></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>