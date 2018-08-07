<template>
	<div>
		{{NoteList}}
    </div>
</template>

<script>

export default {

  name: 'NoteList',

  data() {
    return {

    }
  },
  computed:{
    NoteList:function(){
      return this.$store.state.NoteList
    }
  }
};
</script>

<style lang="css" scoped>
</style>

