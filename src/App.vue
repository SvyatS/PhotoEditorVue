<template>
  <v-app id="app">
    <v-container class="app-container">
      <Sidebar/>
      <router-view/>
    </v-container>
  </v-app>
</template>

<script>
import Sidebar from "@/components/Sidebar";
export default {
  name: 'App',
  components: {
    Sidebar,
  }
}
</script>

<style lang="scss">
.app-container{
  display: flex;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
