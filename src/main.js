import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import store from './store'
import router from './router'
import { Toast } from 'vant'

const app = createApp(App);
app.use(i18n);
app.use(store);
app.use(router);
app.use(Toast);
app.mount('#app')
