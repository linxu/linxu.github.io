import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        data: window.i18n.getLocaleMessage(window.i18n.locale)
    },
    actions: {
        changeLang (context, value) {
            context.commit("changeLang", value);
        }
    },
    mutations: {
        changeLang (state, value) {
            state.data = window.i18n.getLocaleMessage(value)
        }
    },
    getters: {
        
    }
})

export default store
