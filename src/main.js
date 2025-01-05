import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Checkbox from './components/Checkbox.vue'

const app = createApp(App)

app.component('checkbox', Checkbox)

app.mount('#app')
