import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
// Vue Router
import { createRouter, createWebHashHistory } from "vue-router"
import routes from "./router/routes"
// Pinia
import { createPinia } from "pinia"
// Vuetify
import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})
const pinia = createPinia()
const vuetify = createVuetify({
    components,
    directives,
    theme: {},
})

createApp(App).use(router).use(pinia).use(vuetify).mount("#app")
