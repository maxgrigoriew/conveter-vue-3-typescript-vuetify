import { createApp } from "vue"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import App from "./App.vue"
import router from "./router"
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import {VBtn} from "vuetify/components";

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
    aliases: {
        MyButton: VBtn,
    },
    defaults: {
        MyButton: {
            color: 'primary',
            variant: 'tonal',
        },
    },
})

app.use(router)
app.use(vuetify, {
    iconfont: 'mdi'
})

app.mount("#app")
