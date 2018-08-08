<template>
	<div>
		<div>
			<input type="" placeholder="课程的名称" v-model='course_name'>
		</div>
		<div>
			<input type="" placeholder="课程的价格" v-model='course_price'>
		</div>
		
		<span @click='addCar'>添加到购物车</span>
	</div>
</template>

<script>
export default {

  name: 'ShopCar',

  data() {
    return {
    	course_name:'',
    	course_price:''
    };
  },

  methods:{

  	addCar(){
      var newData={
        course_name:this.course_name,
        course_price:this.course_price,
      };
      this.$store.dispatch('addCar',newData)
    },
}
};
</script>

<style lang="css" scoped>
</style>
