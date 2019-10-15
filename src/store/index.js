import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        data: {}
    },
    mutations: {
        changeLang (state) {
            state.data = window.vm.$i18n.getLocaleMessage(window.vm.$i18n.locate)
        }
    }
})

export default store
