<template>
    <div>
        这个是MyComponet组件
        {{message}}
        {{username}}
        <button @click="run">点击我</button>
    </div>
</template>

<script>
import Cart from '@/mixins/Cart.js';
export default {
    mixins: [Cart],
    data () {
        return {
            message: 'Spring',
            username: 'xxx'
        }
    },
    methods: {

    }
}
</script>

<style>

</style>