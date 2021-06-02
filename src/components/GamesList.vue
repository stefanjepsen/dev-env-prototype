<template>
  <div class="GamesList">
    <div class="row justify-center">
      <h3>GamesList</h3>
    </div>

    <div class="row justify-center q-gutter-md">
      <q-card
        v-for="item in list"
        :key="item.id"
        dark
        bordered
        class="bg-grey-9 my-card"
      >
        <q-card-section>
          <div class="text-h6">{{ item.name }}</div>
          <div class="text-subtitle2">{{ item.genre }}</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
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