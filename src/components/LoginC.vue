<template>
  <div>
    <h1>LOGIN</h1>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="username" />
      <br />
      <br />
      <input v-model="password" placeholder="password" type="password" />
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
<script setup>

import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

 const store = useStore();
  const router = useRouter();
  const username = ref('');
  const password = ref('');

 const login = async () => {
  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
  });
  console.log("resp:",response);
  
  const { user, token } = await response.json();
  store.commit('setUser', user);
  store.commit('setToken', token);

  router.push('/');
};

// code vue2
// import { mapMutations } from "vuex";
// export default {
//   data: () => {
//     return {
//       username: "",
//       password: "",
//     };
//   },
//   methods:{

//     ...mapMutations(["setUser", "setToken"]),

//     async login(e) {
//       e.preventDefault();
//       const response = await fetch("http://localhost:3000/login", {
//             methodd: "POST",
//             headers:{
//                 "Content-Type": "application/json",

//             },
//             body: JSON.stringify({
//                 username: this.username,
//                 password: this.password,
//             }),
//         });
//         const { user, token } = await response.json();
//         this.setUser(user);
//         this.setToken(token);

//          this.$router.push("/");
//     }
//   }
// };
</script>




