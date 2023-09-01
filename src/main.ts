import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { IonicVue } from '@ionic/vue'

import App from './App.vue'
import router from './router'
import '@ionic/vue/css/core.css'
import '@/assets/main.css'

/* Basic CSS for apps built with Ionic */
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'
import './theme/variables.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(IonicVue)
app.use(mdiVue, {
  icons: mdijs,
})

router.isReady().then(() => {
  app.mount('#app')
})
