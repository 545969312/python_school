<template>
	<div id='app'>
    <div>
      <router-link to='/'>获取所有的课程数据</router-link>
      <router-link to='/shop_car'>购物车</router-link>
      <router-view/>
    </div>
		    
	</div>
</template>

<script>

export default {
  name: 'App',
  }

</script>


<style>
.box{
  height: 40px;
  width: 1140px;
  line-height: 40px;
  background-color: #4395ff;
  border-radius: 3px;
  text-align: center;
  color: white;
  font-size: 20px;
}
</style>
