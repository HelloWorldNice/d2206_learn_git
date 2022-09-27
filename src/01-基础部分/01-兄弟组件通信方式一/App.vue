<template>
    <div>
        <h1>这个是App组件</h1>
        <!-- <MyBook :books="books" @sendIndexToAppHandle="receiveIndexHandle"></MyBook>
        {{contents[currentInde]}} -->
        <MyUser></MyUser>
        <MyOrder></MyOrder>
    </div>
</template>

<script>
// import MyBook from '@/components/MyBook.vue';
import MyUser from '@/components/MyUser.vue';
import MyOrder from '@/components/MyOrder.vue';
export default {
    data () {
        return {
            books: [
                { id: 1, type: '科技类' },
                { id: 2, type: '体育类' },
                { id: 3, type: '小说类' },
                { id: 4, type: '漫画类'}
            ],
            currentIndex: 0,
            contents: [
                '科技类的内容',
                '体育类的内容',
                '小说类的内容',
                '漫画类的内容'
            ]
        }
    },
    components: {
        // MyBook,
        MyUser,
        MyOrder
    },
    methods: {
        receiveIndexHandle(index) {
            console.log('父组件接收过来的数据:' + index);
            this.currentIndex = index;
        }
    },
    name: 'App',
}
</script>

<style scoped>
 h1{
    color:blue;
 }
</style>
