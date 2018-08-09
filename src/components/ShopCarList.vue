<template>
	<div>
		<ul>
		<li
		v-for='price_policy in shop'
		v-bind:key='price_policy.id'
		v-bind:pricePolicy='price_policy'
		>
		{{price_policy.price}}
		</li>
		</ul>
	</div>
	
</template>

<script>
export default {

  name: 'ShopCarList',

  props:['shop'],

  data() {
    return {
    	pricePolicy:''
    };
  },

};
</script>

<style lang="css" scoped>
</style>
