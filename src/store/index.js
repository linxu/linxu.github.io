import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    data: {}
  },
  actions: {
    changeLang (context, value) {
      context.commit("changeLang", value);
    }
  },
  mutations: {
    changeLang (state, value) {
      state.data = value;
    }
  },
  getters: {
      
  }
})

export default store
