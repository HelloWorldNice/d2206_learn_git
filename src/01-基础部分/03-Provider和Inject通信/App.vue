<template>
    <div>
        <h1>这个是App组件的数据</h1>
        <p v-for="item in books" :key="item.id">
            {{item.bookName}}
        </p>
        {{username}}
        <button @click="saveBookHandle">添加一本书</button>
        <button @click="updateUsernameHandle">修改username</button>
        <hr/>
        <MyCart></MyCart>
    </div>
</template>

<script>
import MyCart from '@/components/MyCart.vue';
import { computed } from 'vue';
export default {
    name: 'App',
    components: {
        MyCart
    },
    data () {
        return {
            books: [
                { id: 1, bookName: 'CSS' },
                { id: 2, bookName: 'HTML'}
            ],
            username: 'HelloWorld',
        }
    },
    provide() {
        return  {
            books: this.books,
            username: computed(()=> this.username)
        }
    },
    methods: {
        saveBookHandle () {
            let book = { id: 8, bookName: 'JavaScript' };
            this.books.push(book);
        },
        updateUsernameHandle () {
            this.username = 'Spring';
        }
    }
}
</script>

<style scoped>
 h1{
    color:blue;
 }
</style>
