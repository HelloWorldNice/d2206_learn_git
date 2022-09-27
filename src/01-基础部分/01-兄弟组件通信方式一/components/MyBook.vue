<template>
    <div>
        <p class="bookClass" v-for="(item,index) in books" :key="item.id"
            @click="changeContentHandle(index)">
            {{item.type}}-{{index}}
        </p>
    </div>
</template>

<script>
export default {
    props: ['books'],
    methods: {
        changeContentHandle (index) {
            // 子组件向父组件发送数据
            this.$emit('sendIndexToAppHandle',index);
        }
    }
}
</script>

<style scoped>
    .bookClass{
        float: left;
        width: 100px;
        height: 50px;
        background-color: gray;
        text-align:center;
        line-height:50px;
        color: red;
        margin-right: 20px;
        cursor:pointer;
    }
</style>