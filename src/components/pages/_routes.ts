import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import { type IStaticMethods } from "preline/preline";

import AuthenticatedLayout from "../layouts/AuthenticatedLayout.vue";
import UnauthenticatedLayout from "../layouts/UnauthenticatedLayout.vue";

import LoginPage from "../pages/auth/LoginPage.vue";
import HelloWorld from "../pages/app/HelloWorld.vue";
import NotFound from "../pages/NotFound.vue";

declare global {
    interface Window {
        HSStaticMethods: IStaticMethods;
    }
}

const _routes = [
    { path: "/auth", component: UnauthenticatedLayout, children: [
            { path: "login", name: "Login", component: LoginPage },
        ]
    },
    { path: "/app", component: AuthenticatedLayout, children: [
            { path: "hello", name: "Hello World", component: HelloWorld },
        ]
    },
    { path: '/', redirect: '/auth/login' },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

export default () => {
    const history = import.meta.env.DEV ? createWebHashHistory() : createWebHistory();
    const router =  createRouter({ history, routes: _routes });
    router.afterEach((_to, _from, failure) => {
        if (!failure) {
            setTimeout(() => {
                window.HSStaticMethods.autoInit();
            }, 100)
        }
    });
    return router;
};