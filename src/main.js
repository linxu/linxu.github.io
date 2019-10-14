import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import en from '@/lang/en'
import zh from '@/lang/zh'

Vue.config.productionTip = false
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en: en,
    zh: zh
  }
})

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
