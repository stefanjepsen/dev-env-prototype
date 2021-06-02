<template>
  <q-page-container>
    <div class="row justify-center">
      <h1>Games List From API</h1>
    </div>

    <div class="row justify-center">
      <q-btn
        id="fetchData"
        @click="toggle = !toggle"
        color="deep-orange"
        glossy
        label="Click for list of games"
      />
    </div>

    <div class="row justify-center">
      <div v-if="!toggle">Fetch from API</div>
      <div v-else><GamesList /></div>
    </div>

    <!--     <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </q-page-container>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import GamesList from "@/components/GamesList.vue";

export default {
  name: "Home",
  components: {
    //HelloWorld
    GamesList,
  },
  data() {
    return {
      toggle: false,
    };
  },
};
</script>
