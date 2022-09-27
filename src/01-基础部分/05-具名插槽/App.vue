<template>
    <div>
        <h1>这个是App组件的数据</h1>
        <MyComponet>
            <template #first>
                <h1>第一部分。。。</h1>
            </template>
            <template v-slot:two>
                <p>这个是第二部分</p>
            </template>
            <!-- 动态具名插槽 -->
           <template v-slot:[slotName]>
                <button>这个是第三部分...</button>
           </template>
        </MyComponet>
        <hr/>
      
    </div>
</template>

<script>
import MyComponet from '@/components/MyComponent.vue';
export default {
    name: 'App',
    components: {
        MyComponet
    },
    data(){
        return {
            slotName: 'three'
        }
    }
}
</script>

<style scoped>
 h1{
    color:blue;
 }
</style>
