import { createStore } from 'vuex'

const store = createStore({
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
