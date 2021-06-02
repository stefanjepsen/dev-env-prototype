<template>
  <div class="home">
    <h1>Dukker</h1>
    <GamesList />

    <!--     <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
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
};
</script>
