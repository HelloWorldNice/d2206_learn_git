<template>
    <div>
        <h1>这个是子组件MyCartItem</h1>
        <ul>
            <li v-for="item in books" :key="item.id">
                {{item.bookName}}
            </li>
        </ul>
        {{username.value}}
    </div>
</template>

<script>
export default {
    inject: ['books','username']
}
</script>

<style>

</style>