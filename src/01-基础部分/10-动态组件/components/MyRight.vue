<template>
    <div>
        <button>Right组件</button>
    </div>
</template>
<script>
export default {
    created () {
        console.log('---MyRight--created---');
    },
     // 组件被激活
  activated(){
    console.log('Right 组件被激活了...');
  },

  // 组件被缓存的时候触发
  deactivated(){
    console.log('Right 组件被缓存了...');
  }
}
</script>

<style>

</style>