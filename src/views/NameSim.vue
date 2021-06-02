<template>
  <q-page-container>
    <div class="row justify-center">
      <h1>Who am I?</h1>
    </div>

    <div class="row justify-center">
      <MyName />
    </div>
  </q-page-container>
</template>

<script>
import MyName from "@/components/MyName.vue";
export default {
  components: {
    MyName,
  },
};
</script>

<style>
</style>