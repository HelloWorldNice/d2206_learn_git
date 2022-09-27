<template>
  <div>
    <ul>
      <li v-for="(user,index) in users" :key="user.id">
            <input v-if="currentId == user.id" 
                   type="text" v-model="user.name"
                   :ref="'input_'+user.id">
            <span v-else>{{user.name}}--{{index}} </span>
          <button @click="edit(user.id)">编辑</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
      return {
          users: [
            {id:1,name: '张三'},
            {id:2,name: '李四'},
            {id:3,name: '王五'}
          ],
          currentId: 0
      }
  },
  methods: {
    edit(id){
        this.currentId = id;

        // setTimeout(()=>{
        //     let inputId = 'input_' + id;
        //     this.$refs[inputId][0].focus();
        // },0)

        this.$nextTick(function(){
            let inputId = 'input_' + id;
            this.$refs[inputId][0].focus();
        });
    }
  }
}
</script>

<style>

</style>