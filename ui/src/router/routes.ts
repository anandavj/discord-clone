import { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Root",
        component: () => import("@views/Index.vue"),
    },
]

export default routes
