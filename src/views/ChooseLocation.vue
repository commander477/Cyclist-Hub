<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <ion-img :src="compass" class="compass"></ion-img>
      </div>
      <strong class="title">Cyclyst Hub</strong>
      <ion-searchbar class="search"></ion-searchbar>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126386.07565084343!2d123.68792051457469!3d8.145701101528802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255ac621ea87229%3A0x29a34c1911c5bf46!2sOzamiz%20City%2C%20Misamis%20Occidental!5e0!3m2!1sen!2sph!4v1639315892389!5m2!1sen!2sph"
      class="map" style="border:0;" allowfullscreen="" loading="lazy">
      </iframe>
      <ion-button>Select Location</ion-button>
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonImg, } from "@ionic/vue";
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
      power: "../../assets/power.png",
      addcyclist: "../../assets/AddCyclist.jpg",
      gearsetting: "../../assets/GearSetting.jpg",
      location: "../../assets/location.jpg",
      cyclistId: "CH211207",
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
  .search {
    width: 297px;
    margin: 30px auto 5px auto;
  }
  .map {
    width: 100%;
    height: 73vh;
  }
</style>
