<template>
  <v-container>
    <h2>Каталог шаблонов</h2>
    <div class="content d-flex">
      <div class="content__photos blue lighten-5">
        <div class="content__photos-loader">PLUS</div>
        <div class="content__photos-list v-item-group">
          <v-row>
            <v-col>
              <v-card class="photo-item">
                <img src="../assets/guts.jpg" alt="guts" width="250">
              </v-card>
            </v-col>
            <v-col>
              <v-card class="photo-item">
                <img src="../assets/guts.jpg" alt="guts" width="250">
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card class="photo-item">
                <img src="../assets/guts.jpg" alt="guts" width="250">
              </v-card>
            </v-col>
            <v-col>
              <v-card class="photo-item">
                <img src="../assets/guts.jpg" alt="guts" width="250">
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card class="photo-item">
                <img src="../assets/guts.jpg" alt="guts" width="250">
              </v-card>
            </v-col>
            <v-col>
              <v-card class="photo-item">
                <img src="../assets/guts.jpg" alt="guts" width="250">
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>
      <div class="content__projects">
        <v-card></v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Libraly"
}
</script>

<style lang="scss">
.content{
  &__photos{
    &-loader{
      width: 300px;
      height: 200px;
    }
  }
}
.photo-item{
  margin: 20px;
}
</style>
