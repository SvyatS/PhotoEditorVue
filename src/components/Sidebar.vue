<template>
  <div class="sidebar light-blue lighten-1">
    <v-col class="sidebar__col">
      <v-row class="sidebar__row">
        <router-link to="/libraly">
          <v-icon>{{ svgLibrary }}</v-icon>
        </router-link>
      </v-row>
      <v-row class="sidebar__row">
        <router-link to="/editor">
          <v-icon>{{ svgEditor }}</v-icon>
        </router-link>
      </v-row>
    </v-col>
  </div>
</template>

<script>
import {
  mdiHomeAccount,
  mdiImageMultiple,
  mdiNoteEdit,
  mdiCamera
} from '@mdi/js';

export default {
  name: "Sidebar",
  data: () => ({
    svgHome: mdiHomeAccount,
    svgLibrary: mdiImageMultiple,
    svgEditor: mdiNoteEdit,
    svgNormalize: mdiCamera
  }),
}
</script>

<style lang="scss">
.sidebar{
  width: 50px;
  height: 100%;
  &__row{
    justify-content: center;
    padding: 10px 5px;
  }
}
</style>
