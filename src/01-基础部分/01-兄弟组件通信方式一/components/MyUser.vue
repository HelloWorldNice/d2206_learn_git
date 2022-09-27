<template>
    <div>
        <h1>这个是数据的发送方</h1>
        <button @click="sendData">发送数据</button>
    </div>
</template>

<script>
export default {
    methods: {
        sendData () {
            // 发射了一个事件
            this.$eventBus.emit('sendDataToOther',900);
        }
    }
}
</script>

<style>

</style>