import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import ShopCar from '@/components/ShopCar'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'test',
      component: Test
    },
    {
      path: '/shop_car',
      name: 'shop_car',
      component: ShopCar
    }

  ],
})
