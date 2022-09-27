<template>
  <div>
    <h1>数据接收方: {{receiveData}}</h1>
  </div>
</template>

<script>
export default {
    data () {
        return {
            receiveData: ''
        }  
    },
    created () {
        console.log('----');
        // 监听事件
        this.$eventBus.on('sendDataToOther',  (value)=> {
            console.log(value);
            this.receiveData = value;
        });
    }
}
</script>

<style>

</style>