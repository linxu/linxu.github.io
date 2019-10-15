import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '@/i18n/en'
import zh from '@/i18n/zh'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'en',
    messages: {
      en: en,
      zh: zh
    }
  })
  
window.i18n = i18n;  
export default i18n
