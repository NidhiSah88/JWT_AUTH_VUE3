// in vue2
// import Vue from "vue";
// import VueRouter from "vue-router";
// Vue.use(VueRouter);

// in vue3

import { createRouter, createWebHistory } from 'vue-router'

import Login from "../components/LoginC.vue";
import Welcome from "../components/WelcomeC.vue";


const routes = [
    {
        path: "/",
        name: "Welcome",
        component: Welcome,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
      },
    
];

// in vue2

// const router = new VueRouter({
//     mode: "history",
//     base: process.env.BASE_URL,
//     routes,
//   });

  // in vue3
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  export default router;


