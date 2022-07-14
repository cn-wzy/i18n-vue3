import { createApp } from 'vue'
import { i18n, loadLanguageAsync } from '@/i18n/index'
import App from './App.vue'
const app = createApp(App).use(i18n)

app.config.globalProperties.$changeLanguage = loadLanguageAsync

app.mount('#app')