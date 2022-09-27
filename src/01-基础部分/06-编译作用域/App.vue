<template>
    <div>
        <!-- 编译作用域 -->
        
        <h1>这个是App组件的数据</h1>
        这个是App组件的数据: {{message}}
        <hr/>
        <MyComponent>
            <p>这个是数据:{{message}}</p>
        </MyComponent>
    </div>
</template>

<script>
import MyComponent from '@/components/MyComponent.vue';
export default {
    name: 'App',
    components:{
        MyComponent
    },
    data () {
        return {
            message: 'HelloWorld'
        }
    }
}
</script>

<style scoped>
 h1{
    color:blue;
 }
</style>
