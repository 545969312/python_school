<template>
	<div id='app'>
    <div>
      <span>'获取所有的课程数据'</span>
      <span @click='getList'>提交</span>
      <span>{{NoteList}}</span>
    </div>
		    
	</div>
</template>

<script>

export default {
  name: 'App',

  methods:{
    getList:function(){
      this.$store.dispatch('getList')
      }
    },

  computed:{
    NoteList:function(){
      return this.$store.state.NoteList
    }
  }
  }

</script>


<style>
</style>
