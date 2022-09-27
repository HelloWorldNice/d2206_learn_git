<template>
    <div>
        <h1>这个是数据的发送方</h1>
        <button @click="sendDataHandle">发送数据</button>
    </div>
</template>

<script>
import eventBus from '@/utils/eventBus.js';
export default {
    methods: {
        sendDataHandle () {
            // 发射事件
            eventBus.emit('sendDataToOther',200);
        }
    }
}
</script>

<style>

</style>