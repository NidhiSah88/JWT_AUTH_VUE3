<template>
  <div>
    <h1>Welcome</h1>
    <router-link  v-if="!isLoggedIn" to="/login"><button>Login</button></router-link> 
  </div>
</template>

<script setup>

import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isLoggedIn = computed(() => store.getters.isLoggedIn);

// code vue2
// import { mapGetters } from "vuex";
// export default {
//   computed: {
//     ...mapGetters(["isLoggedIn"])
//   }
// };
</script>


