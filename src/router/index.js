import { createRouter, createWebHashHistory } from "vue-router";
import Attributes from '../pages/Attributes.vue';

const routes = [
    {
        path: "/",
        name: "Attributes",
        component: Attributes,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;