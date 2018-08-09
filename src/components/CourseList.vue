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

			<select v-model="selected">
	        <option 
	        v-for="p in item.price_policy" 
	        v-bind:value="p.price_policy_id"
	        v-bind:s_id="p.price_policy_id"
	        >
	    	{{p.price_policy_id}}学习周期{{p.valid_period}}价格{{p.price}}</option>
		    </select>
		    <span>已选:{{selected}}</span>

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
    	price_policy:'',
    	selected:''
    };
  },
  methods:{

  	btn(){

  		var newData={
	  		id: this.item.id,
	  		price_policy_id: this.selected,

  	};

  		this.$store.dispatch('addCar',newData)
  	}
  }
};
</script>

<style lang="css" scoped>
</style>
