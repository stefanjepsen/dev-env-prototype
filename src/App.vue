<template>
  <div id="q-app">
    <router-view />

    <q-layout view="lHh Lpr lFf">
      <q-header elevated class="glossy">
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            aria-label="Menu"
            icon="menu"
          />

          <q-toolbar-title> Quasar App </q-toolbar-title>

          <div>Quasar v{{ $q.version }}</div>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        content-class="bg-grey-2"
      >
        <q-list>
          <q-item-label header>Essential Links</q-item-label>
          <q-item clickable tag="a"  to="/">
            <q-item-section avatar>
              <q-icon name="school" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Home</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable tag="a"  to="/about">
            <q-item-section avatar>
              <q-icon name="school" />
            </q-item-section>
            <q-item-section>
              <q-item-label>About Page</q-item-label>
            </q-item-section>
          </q-item>
         
        </q-list>
      </q-drawer>

      <q-page-container> </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: "LayoutDefault",

  components: {},

  data() {
    return {
      leftDrawerOpen: true,
    };
  },
};
</script>

<style>
</style>
