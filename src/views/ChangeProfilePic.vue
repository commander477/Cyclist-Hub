<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <ion-img :src="compass" class="compass"></ion-img>
      </div>
      <strong class="title">Cyclyst Hub</strong>
      <ion-img :src="Profile" class="Profile"></ion-img>
      <ion-button class="set">Set New Profile Picture</ion-button>

      <ion-text class="retri">Choose From</ion-text>
      <div class="section">
        <ion-button>
          <ion-img :src="gallery" class="icons"></ion-img>
          <ion-text>Gallery</ion-text>
        </ion-button>
        <ion-button>
          <ion-img :src="camera" class="icons"></ion-img>
          <ion-text>Camera</ion-text>
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonImg } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChangeProfilePic",
  components: {
    IonContent,
    IonPage,
    IonImg,
  },
  data() {
    return {
      compass: "../../assets/compass.gif",
      Profile: "../../assets/Profile.jpg",
      gallery: "../../assets/gallery.png",
      camera: "../../assets/camera.png",
    };
  },
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap");
ion-page {
  position: relative;
}

.container {
  display: block;
  width: 100%;
  padding: 5px 5px 0px 5px;
}
.compass {
  width: 79px;
  height: 84px;
  float: right;
}
.title {
  font-size: 42px;
  font-family: "Sawarabi Mincho", sans-serif;
  display: block;
  text-align: left;
  background-image: linear-gradient(180deg, #ff000f, #0469ff);
  background-clip: text;
  color: transparent;
  white-space: nowrap;
  padding: 10px 0 0 10px;
}
.Profile {
  display: block;
  width: 290px;
  height: 266px;
  border: 10px solid #c4c4c4;
  margin: 75px auto 0 auto;
  background-size: cover;
  position: relative;
  ion-img {
    padding: 0 0 0 0;
    margin: 0 auto;
    width: 276px;
    height: 249px;
  }
}
.set {
  --ion-color-primary: #fff;
  --background: none;
  color: #000;
  --box-shadow: none;
  margin: 5px 10px 0 0;
  float: right;
  font-family: "Rufina", serif;
  font-size: 12px;
  text-transform: capitalize;
}
.section {
  font-family: "Rufina", sans-serif;
  font-size: 10px;
  display: flex;
  margin: 30px auto 0 auto;
  padding: 0 30px;
  width: min-content;
  ion-button {
    --background: none;
    --box-shadow: none;
    margin: 0;
    background: #c4c4c4;
    width: 100px;
    height: 100px;
          border: 1px solid red;
    ion-img {
      display: block;
      width: 100%;
      height: 32px;
      border-radius: 50%;

    }
    ion-text {
      display: block;
      text-transform: capitalize;
      color: #000;
      height: 0 0 0 0;
    }
  }
}
</style>
