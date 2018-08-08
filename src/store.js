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

	},
	actions:{
		getList(context) {
            axios
                .get('/api/v1/query_all/c/')
                .then(function (response) {
                    context.commit('INITNOTELIST', response.data.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        
	}
})


