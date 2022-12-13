import { createRouter, createWebHashHistory } from "vue-router";
import Attributes from '../pages/Attributes.vue';
import Pokemon from '../pages/Pokemon.vue';

const routes = [
    {
        path: "/",
        component: Attributes,
    },
    {
        path: "/pokemon",
        component: Pokemon,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;