<template>
    <div>
        <h2>这个是User.vue组件</h2>
        <p>姓名: {{user.username}}</p>
        <p>年龄: {{user.age}}</p>
    </div>
</template>

<script>
export default {
    setup () {
        let user = {
            username: 'HelloWorld',
            age: 23
        }

        let run = function () {
            console.log('---run--');
        }

        return {
            user,
            run
        }
    }
}
</script>

<style>

</style>