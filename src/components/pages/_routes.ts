import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";

import AuthenticatedLayout from "../layouts/AuthenticatedLayout.vue";
import UnauthenticatedLayout from "../layouts/UnauthenticatedLayout.vue";

import FirstPage from "./app/FirstPage.vue";
import SecondPage from "./app/SecondPage.vue";
import ThirdPage from "./app/ThirdPage.vue";

import LoginPage from "./auth/LoginPage.vue";
import NotFound from "./auth/NotFound.vue";

const _routes = [
  { path: "/auth", component: UnauthenticatedLayout, children: [
      { path: "login", name: "Login", component: LoginPage },
    ]
  },
  { path: "/app", component: AuthenticatedLayout, children: [
      { path: "1", name: "First Page", component: FirstPage },
      { path: "2", name: "Second Page", component: SecondPage },
      { path: "3", name: "Third Page", component: ThirdPage },
    ]
  },
  { path: '/', redirect: '/auth/login' },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

export default () => {
  const history = import.meta.env.DEV ? createWebHashHistory() : createWebHistory();
  return createRouter({ history, routes: _routes });
};
