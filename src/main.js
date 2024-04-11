import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import Notifications from '@kyvg/vue3-notification'
import VueCookies from 'vue-cookies'
import HeaderComponent from './components/Header.vue'
import SideBar from './components/SideBar.vue'
const app = createApp(App)
app.use(Notifications)
app.use(router)
app.use(VueCookies, { expires: '7d' })
app.component('HeaderComponent', HeaderComponent)
app.component('SideBar', SideBar)

app.mount('#app')
