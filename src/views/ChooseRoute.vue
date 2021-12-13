<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <div class="box">
          <ion-img :src="compass" class="compass"></ion-img>
        </div>
        <strong class="title">Cyclyst Hub</strong>
        <ion-searchbar class="search"></ion-searchbar>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126386.07565084343!2d123.68792051457469!3d8.145701101528802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255ac621ea87229%3A0x29a34c1911c5bf46!2sOzamiz%20City%2C%20Misamis%20Occidental!5e0!3m2!1sen!2sph!4v1639315892389!5m2!1sen!2sph"
          class="map"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        >
        </iframe>
        <ion-text class="loc"> Your Location - Dona Consuelo</ion-text>
        <ion-card>
          <ion-text class="time">5.4 Kilometer - 30 Minutes</ion-text>
        </ion-card>
      </div>
      <div class="buttons" >
        <ion-button @click="ChooseLocation" fill="clear" class="cancel">Select New Location</ion-button>
        <ion-button fill="clear" class="confirm">Confirm Location</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonImg } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfilePage",
  components: {
    IonContent,
    IonPage,
    IonImg,
  },
  data() {
    return {
      ppf: "../../assets/ProfilePicture.png",
      compass: "../../assets/compass.gif",
    };
  },
  methods: {
    ChooseLocation() {
      this.$router.push("/choose-location");
    },
  }
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
  height: 92vh;
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
.search {
  width: 297px;
  margin: 30px auto 5px auto;
}
.map {
  width: 100%;
  height: 215px;
}
.loc {
  font-family: "Rufina", serif;
  font-size: 16px;
  display: block;
  margin: 10px 20px;
}
ion-card {
  --background: #c4c4c4;
  --box-shadow: none;
  width: 226px;
  height: 22px;
      margin: 10px 20px;
  .time {
    font-family: "Quicksand", serif;
    font-size: 16px;
    display: block;
    color: #0b00a0;
    padding: 3px 10px;
    opacity: 0.64;
    text-align: center;
    text-transform: capitalize;
  }
}

.buttons {
  display: flex;
  position: relative;
  .cancel {
    font-family: "Quicksand", sans-serif;
    font-size: 14px;
    color: #000;
    text-transform: capitalize;
    text-decoration: underline;
  }
  .confirm {
    position: absolute;
    right: 0;
    font-family: "Quicksand", sans-serif;
    font-size: 14px;
    color: #000;
    text-transform: capitalize;
    text-decoration: underline;
  }
}
</style>
