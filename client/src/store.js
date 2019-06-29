import Vue from 'vue'
import Vuex from 'vuex'

const store = new Vuex.Store({
    state: {
      items:[],
      token:'',
      cart:[]
    },
    mutations: {
      increment (state) {
        state.count++
      }
    },
    actions: {
      increment (context) {
        context.commit('increment')
      }
    }
  })

export default store