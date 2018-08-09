import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'

Vue.use(Vuex)

// 设置post请求的请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default new Vuex.Store({
	state:{
		NoteList:[],
		currentNote:{
			id:'',
			title:'',
			content:'',
			markedConent:''
		}
	},
	mutations:{
		INITNOTELIST:function(state,NoteList){
			state.NoteList=NoteList
		},
		INITSHOPLIST:function(state,ShopList){
			state.ShopList=ShopList
		},

	},
	actions:{
		getList(context) {
            axios
                .get('http://127.0.0.1:8000/api/v1/query_all/c/')
                .then(function (response) {
                    context.commit('INITNOTELIST', response.data.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        getShopCar(context) {
            axios
                .get('http://127.0.0.1:8000/api/v1/shop_car/')
                .then(function (response) {
                    context.commit('INITSHOPLIST', response.data.data)
                    console.log(response.data.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

 		addCar(context, newData){
		return new Promise((resolve, reject)=>{
			
			axios({
				method:'post',
				url:'http://127.0.0.1:8000/api/v1/shop_car/',
				
				headers:{
					'Content-Type':'application/json',
				},

				data:newData,
				
			}).then((res)=>{
				console.log('+++++++++++++++')
				console.log(res.data);
				resolve();
			}).catch(function(err){
				console.log(err);
				reject();
			})
		})
	}
	}
})


