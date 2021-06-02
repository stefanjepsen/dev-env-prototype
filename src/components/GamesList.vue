<template>
  <div class="GamesList">
    <h1>GamesList</h1>
  <div class="row justify center">
    <q-card v-for="item in list" :key="item.id" flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">{{ item.name }}</div>
        <p>{{ item.genre }}</p>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ item.details }}
      </q-card-section>
    </q-card>

    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  name: "GamesList",
  data() {
    return { list: undefined };
  },
  mounted() {
    Vue.axios
      .get("https://restful-api-games.herokuapp.com/api/games")
      .then((res) => {
        this.list = res.data;
        console.warn(res.data);
      });
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>