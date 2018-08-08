<template>
	<div>
    <span @click='getList'>点击啊</span>
		<CourseList 
      v-for='item in NoteList'
      v-bind:item='item'
      v-bind:key='item.id'
      >
    </CourseList>

    </ul>
  </div>
</template>

<script>
import CourseList from '@/components/CourseList'
export default {

  name: 'Test',

  components:{
    CourseList
  },

  data() {
    return {

    }
  },


  methods:{
  getList:function(){
    this.$store.dispatch('getList')
    }
  },

  computed:{
  NoteList:function(){
    return this.$store.state.NoteList //拿到所有路由
  }
  }
};
</script>

<style lang="css" scoped>
</style>

