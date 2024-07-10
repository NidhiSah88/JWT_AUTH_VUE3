// in vue 3

import { createStore } from 'vuex'

const store = createStore({
  state: {
    user: null,
    token: null,
  },
  mutations: {
    setUser(state, user){
        state.user = user ;
    },
    setToken(state, token){
        state.token = token;
    },
  },
  actions: {
  },
  getters: {
    isLoggedIn: state => !!state.token,
  }
})

export default store







// in vue2

// import Vue from "vue";
// import Vuex from "vuex";
// Vue.use(Vuex);

// export default new Vuex.Store({
//     state:{
//         user: null,
//         token: null,
//     },
//     mutations:{
//         setUser(state, user){
//             state.user = user ;
//         },
//         setToken(state, token){
//             state.token = token;
//         },
//     },
//     actions: {},
//     getters: {
//         isLoggedIn(state) {
//             return !!state.token;
//           },
//     },

// })