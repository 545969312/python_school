<template>
	<div>
		<ul>
			<li>{{item.name}}</li>
			<li>{{item.course_img}}</li>
			<li>{{item.brief}}</li>
			<li v-for='ask in item.asked_question'
				v-bind:ask='ask'
			>
				{{ask.question}}
			</li>
			<li v-for='ask in item.asked_question'
				v-bind:ask='ask'
			>
				{{ask.answer}}
			</li>
			<button @click='btn'>
				添加到购物车
			</button>
		</ul>

	</div>
</template>

<script>
import CourseDetail from '@/components/CourseDetail'
export default {

  name: 'CourseList',
  props: ['item'],
  data() {
    return {
    	id:'',
    	name:'',
    	price:''
    };
  },
  methods:{

  	btn(){
  		var newData={
	  		id: this.item.id,
	  		name: this.item.name,
	  		price_policy: this.item.price_policy,

  	};
  		this.$store.dispatch('addCar',newData)
  	}
  }
};
</script>

<style lang="css" scoped>
</style>
