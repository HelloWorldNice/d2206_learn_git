<template>
    <div>
        <h1>数据接收方</h1>
        <h1>接收到的数据是: {{receiveData}}</h1>
    </div>
</template>

<script>
import eventBus from '@/utils/eventBus.js';
export default {
    data () {
        return {
            receiveData: ''
        }
    },

    created () {
        eventBus.on('sendDataToOther', (value) => {
            this.receiveData = value;
        });
    }
}
</script>

<style>

</style>