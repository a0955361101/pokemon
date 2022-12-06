import { createRouter, createWebHistory } from "vue-router";
import Attributes from '@/pages/Attributes.vue'

const routes = [
    {
        path: "/",
        name: "Attributes",
        component: Attributes,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;