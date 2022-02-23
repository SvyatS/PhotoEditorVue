<template>
  <v-container class="blue lighten-5">
    <div class="editor-content">
      <h2>Редактор фото</h2>
      <div class="editor-container d-flex">
        <div class="photo-container d-flex">
          <EditorKits :canvasWidth="canvasWidth" :canvasHeight="canvasHeight" :style="filters" ref="editor" editorId="canvasId"/>
          <div class="kits-container">
            <button @click="savePhoto">Сохранить фото</button>
            <button @click="downloadPhoto">Скачать фото</button>
            <button @click="addText">Добавить текст</button>
            <button @click="changeMode">Масштабировать</button>
            <button @click="changeModeCancel">Применить</button>
            <button @click="defaultFilters">Сбросить</button>
            <button @click="undo">Отменить последнее действие</button>
            <button @click="redo">Вернуть отмененное действие</button>
          </div>
        </div>
        <div class="photo-filters">
          <h3>Фильтры</h3>
          <v-row>
            <v-col>
              <div class="photo-filters__filter">
                <label for="blur-filter">Blur({{ blurValue }}px)</label>
                <input id="blur-filter" type="range" min="0" max="50" step="1" v-model="blurValue">
              </div>
            </v-col>
            <v-col>
              <div class="photo-filters__filter">
                <label for="grayscale-filter">Grayscale({{ grayScaleValue }})</label>
                <input id="grayscale-filter" type="range" min="0" max="1" step="0.1" v-model="grayScaleValue">
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="photo-filters__filter">
                <label for="sepia-filter">Sepia({{ sepiaValue }})</label>
                <input id="sepia-filter" type="range" min="0" max="1" step="0.1" v-model="sepiaValue">
              </div>
            </v-col>
            <v-col>
              <div class="photo-filters__filter">
                <label for="brightness-filter">Brightness({{ brightnessValue }})</label>
                <input id="brightness-filter" type="range" min="0" max="5" step="0.1" v-model="brightnessValue">
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="photo-filters__filter">
                <label for="contrast-filter">Contrast({{ contrastValue }})</label>
                <input id="contrast-filter" type="range" min="0" max="10" step="0.2" v-model="contrastValue">
              </div>
            </v-col>
            <v-col>
              <div class="photo-filters__filter">
                <label for="opacity-filter">Opacity({{ opacityValue }})</label>
                <input id="opacity-filter" type="range" min="0" max="1" step="0.1" v-model="opacityValue">
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="photo-filters__filter">
                <label for="saturate-filter">Saturate({{ saturateValue }})</label>
                <input id="saturate-filter" type="range" min="0" max="2" step="0.1" v-model="saturateValue">
              </div>
            </v-col>
            <v-col></v-col>
          </v-row>
        </div>
      </div>
      <div class="presets-container">
        <div class="content__photos-list d-flex">
          <v-card class="photo-item">
            <button class="load-photo__button" onclick="document.getElementById('getFilePhoto').click()">
              <img src="../assets/add-photo.svg" width="64" alt="add photo">
            </button>
            <input type="file" id="getFilePhoto" style="display:none" @click="uploadPhoto"/>
          </v-card>
          <v-card class="photo-item">
            <img src="../assets/guts.jpg" alt="guts" width="200">
          </v-card>
          <v-card class="photo-item">
            <img src="../assets/guts.jpg" alt="guts" width="200">
          </v-card>
          <v-card class="photo-item">
            <img src="../assets/guts.jpg" alt="guts" width="200">
          </v-card>
          <v-card class="photo-item">
            <img src="../assets/guts.jpg" alt="guts" width="200">
          </v-card>
          <v-card class="photo-item">
            <img src="../assets/guts.jpg" alt="guts" width="200">
          </v-card>
          <v-card class="photo-item">
            <img src="../assets/guts.jpg" alt="guts" width="200">
          </v-card>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import EditorKits from 'vue-image-markup';
export default {
  name: "Editor",
  components: {
    EditorKits
  },
  data() {
    return {
      image: null,
      canvasWidth: 1000,
      canvasHeight: 700,
      imageUrl: "https://i.ytimg.com/vi/rNrtnb99eLw/maxresdefault.jpg",
      blurValue: 0,
      grayScaleValue: 0,
      sepiaValue: 0,
      brightnessValue: 1,
      contrastValue: 1,
      opacityValue: 1,
      saturateValue: 1
    };
  },
  computed: {
    canvas(){
      return this.$refs.editor;
    },
    filters() {
      return this.setFilters();
    },
    ctx() {
      return this.$refs.editor.$el.querySelector('canvas').getContext('2d');
    }
  },
  methods: {
    uploadPhoto(e){
      this.canvas.uploadImage(e);
    },
    downloadPhoto(){
      var a = document.createElement("a"); //Create <a>
      a.href = this.canvas.saveImage(); //Image Base64 Goes here
      a.download = "Image.png"; //File name Here
      a.click(); //Downloaded file
    },
    addText(){
      this.canvas.set('text');
    },
    changeMode(){
      this.canvas.set('crop');
    },
    changeModeCancel(){
      this.canvas.applyCropping();
    },
    undo(){
      this.canvas.undo();
    },
    redo(){
      this.canvas.redo();
    },
    defaultFilters(){

    },
    setFilters() {
      return {filter: `blur(${this.blurValue}px) grayscale(${this.grayScaleValue}) sepia(${this.sepiaValue}) saturate(${this.saturateValue}) brightness(${this.brightnessValue}) contrast(${this.contrastValue}) opacity(${this.opacityValue})`};
    },
  },
  mounted() {
    this.canvas.setBackgroundImage(this.imageUrl);
  }
}
</script>

<style lang="scss" scoped>
.kits-container {
  padding: 5px;
  display: flex;
  flex-direction: column;
  button {
    margin: 10px;
    background: #1E88E5;
    color: white;
    padding: 5px;
    border-radius: 7px;
  }
}

.photo-filters {
  padding: 8px 32px;
  &__filter {
    padding-right: 24px;
    display: flex;
    flex-direction: column;
    max-width: 270px;
    label {
      font-size: 14px;
    }
  }
}

.content__photos-list {
  overflow-x: auto;
  max-width: 90vw;
}

.load-photo {
  &__button {
    padding: 34px 64px;
    border: 2px solid rgb(82,222,255);
  }
}

.content__photos-loader {
  button {
    margin: 10px;
    background: cadetblue;
    padding: 5px;
    border-radius: 7px;
  }
}
</style>
