<template>
	<div>	
		<ul>
			<li @click='getShopCar'>
				点击查看购物车
			</li>
			<li 
			v-for='shop in ShopList'
			v-bind:key='shop.id'
			v-bind:shop='shop'
			>
				课程名称：{{shop.name}}

			</li>
			<li>
				<ShopCarList
				v-for='shop in ShopList'
				v-bind:key='shop.id'
				v-bind:shop='shop'
				>
				</ShopCarList>
			</li>
			
		</ul>
	</div>
</template>

<script>

import ShopCarList from '@/components/ShopCarList'
export default {

  name: 'ShopCar',

  data() {
    return {

    };
  },

  components:{
  	ShopCarList,
  },

  methods:{

  	getShopCar(){
      this.$store.dispatch('getShopCar')
    },
	},

  computed:{
  	ShopList:function(){
    	return this.$store.state.ShopList //拿到购物车
  }
  },
};
</script>

<style lang="css" scoped>
</style>
