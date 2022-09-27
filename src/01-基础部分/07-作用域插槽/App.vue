<template>
    <div>
        <!-- 编译作用域 -->
        <h1>这个是App组件的数据</h1>
        <MyComponent :books="books">
            <template v-slot:default="abc">
                <button>{{abc.item.bookName}}</button>
            </template>
        </MyComponent>
    </div>
</template>

<script>
import MyComponent from '@/components/MyComponent.vue';
export default {
    name: 'App',
    // 1、首先在父组件中去定义数据
    data(){
        return {
            books: [
                { id: 1, bookName: 'CSS' },
                { id: 2, bookName: 'JavaScript'},
                { id: 3, bookName: 'HTML'}
            ]
        }
    },
    components: {
        MyComponent
    }
}
</script>

<style scoped>
 h1{
    color:blue;
 }
</style>
