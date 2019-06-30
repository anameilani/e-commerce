import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/api/axios.js' 

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      items:[],
      myitems:[],
      token:'',
      mycart:[],
      myhistory:[],
    },
    mutations: {
      SETPRODUCT (state, payload) {
        this.state.items= payload
      },

      SETMYPRODUCT (state, payload) {
        this.state.myitems= payload
      }
      ,
      SETTOKEN (state, payload) {
          this.state.token= payload
      },

      SETCART (state, payload) {
          this.state.mycart= payload
      },

      SETHISTORY (state, payload) {
          this.state.myhistory= payload
      },

    },
    actions: {
      getItems (context) {
        axios({
          method: 'get',
          url: '/items',
        })
        .then(items=>{
            context.commit('SETPRODUCT', items.data)
        })
        .catch(err=>{
          console.log('error get items')
          console.log(err)
        })
      },

      getMyItems (context) {
        console.log(localStorage.token, 'ini token')
        axios({
          method: 'get',
          url: `/items/myitem`,
          headers :{
            'token' : localStorage.token
          }
        })
        .then(({data})=>{
            context.commit('SETMYPRODUCT', data)
        })
        .catch(err=>{
          console.log('error get myitems')
          console.log(err)
        })
      },

      getCart (context){
        axios({
          method: 'get',
          url: `/transaction/${localStorage.userId}/not-paid`,
          headers :{
            'token' : localStorage.token
          }
        })
        .then(({data})=>{
            console.log(data)
            context.commit('SETCART', data)
        })
        .catch(err=>{
          console.log('error get cart')
          console.log(err)
        })
      },

      getHistory (context) {
        axios({
          method: 'get',
          url: `/transaction/${localStorage.userId}/paid`,
          headers :{
            'token' : localStorage.token
          }
        })
        .then(({data})=>{
            context.commit('SETHISTORY', data)
        })
        .catch(err=>{
          console.log('error get history')
          console.log(err)
        })
      }
    }

  })
