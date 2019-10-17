import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        data: window.i18n.getLocaleMessage(window.i18n.locale)
    },
    mutations: {
        changeLang (state) {
            state.data = window.i18n.getLocaleMessage(window.i18n.locale)
        }
    }
})

export default store
