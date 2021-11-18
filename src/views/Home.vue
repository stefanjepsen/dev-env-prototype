<template>
  <q-page
    class="window-height window-width row justify-center q-mt"
    style="background: linear-gradient(#8274c5, #5a4a9f)"
  >
    <q-card square class="shadow-24" style="width: 375px; height: 485px">
      <q-card-section class="bg-deep-purple-7">
        <h4 class="text-h5 text-white lollerik text-center q-pa-xs">Login</h4>
      </q-card-section>
      <q-card-section class="bg-deep-purple-7">
        <q-card-actions class="q-px-lg col bg-deep-purple-7">
          <q-btn
            to="/FranksSurprise"
            type="submit"
            size="xl"
            color="purple-4"
            class="full-width text-white q-mb-xl"
            label="Frank"
          />
          <q-btn
            to="/PiasSurprise"
            type="submit"
            size="xl"
            color="purple-4"
            class="full-width text-white q-mb-xl"
            label="Pia"
          />
          <q-btn
            to="/UllasSurprise"
            type="submit"
            size="xl"
            color="purple-4"
            class="full-width text-white q-mb-xl"
            label="Ulla"
          />
        </q-card-actions>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.lollerik {
  font-size: 80px;
  text-align: center;
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6,
    0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
  animation: blinker 3s linear infinite;
}
@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs