import { createI18n } from 'vue-i18n'
import en from '@/i18n/en'
import zh from '@/i18n/zh'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: en,
    zh: zh
  }
})
window.i18n = i18n.global;
export default i18n
