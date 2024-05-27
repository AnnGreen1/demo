import { createRouter, createWebHistory } from "vue-router";

import commonroute from "./routes/commonroute";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...commonroute,
    ],
});

export default router;
