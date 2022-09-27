<template>
    <div>
        <h1>这个是MyCompoent组件</h1>
        <template v-for="(item,index) in books" :key="item.id">
            <slot :item="item" :index="index"></slot>
        </template>
    </div>
</template>

<script>
export default {
    // 2、接收父组件的数据
    props: ['books']
}
</script>

<style>

</style>