<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <ion-img :src="compass" class="compass"></ion-img>
      </div>

      <strong class="title">Cyclyst Hub</strong>

      <div class="profile">
        <div class="container2">
          <ion-img :src="ppf" class=""></ion-img>
        </div>
        <ion-button @click="ProfileSetting">Edit</ion-button>
      </div>
      <ion-text
        >Cylist's ID:
        <span class="c-id">{{ cyclistId }}</span>
      </ion-text>
      <div class="lists">
        <ion-button @click="ChooseLocation">
          <ion-img :src="power" class="icons"></ion-img>
          <ion-text>Choose Route</ion-text>
        </ion-button>
        <ion-button @click="AddCyclist">
          <ion-img :src="addcyclist" class="icons"></ion-img>
          <ion-text>Cyclist List</ion-text>
        </ion-button>
        <ion-button @click="AddCyclist">
          <ion-img :src="gearsetting" class="icons"></ion-img>
          <ion-text>Add Cyclist</ion-text>
        </ion-button>
        <ion-button @click="GearSettings">
          <ion-img :src="ppf" class="icons"></ion-img>
          <ion-text>Gear Settings</ion-text>
        </ion-button>
      </div>
      <ion-button @click="ProfilePage" class="pin">
        <ion-img :src="location" class="location"></ion-img>
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonImg, IonButton } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfilePage",
  components: {
    IonContent,
    IonPage,
    IonImg,
    IonButton,
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
  methods: {
    ChooseLocation() {
      this.$router.push("/choose-location");
    },
    AddCyclist() {
      this.$router.push("/add-cyclist");
    },
    GearSettings() {
      this.$router.push("/gear-settings");
    },
    ProfileSetting() {
      this.$router.push("/profile-setting");
    },
    ProfilePage() {
      this.$router.push("/profile-page");
    },
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
.profile {
  width: 121px;
  margin: 0 auto;
  ion-button {
    --ion-color-primary: #fff;
    --background: none;
    color: #000;
    --box-shadow: none;
    margin: -25px -30px 0 0;
    float: right;
    font-family: "Abhaya Libre", serif;
    font-size: 14px;
    text-transform: capitalize;
  }
}
ion-text {
  font-family: "Rufina", serif;
  font-size: 18px;
  display: block;
  margin: 10px auto;
  width: min-content;
  white-space: nowrap;
  .c-id {
    text-decoration: underline;
  }
}
.container2 {
  display: block;
  width: 121px;
  height: 117px;
  border-radius: 50%;
  background: #bcbcbc;
  margin: 50px auto 0 auto;
  position: relative;
  ion-img {
    padding: 15px 0 0 0;
    margin: 0 auto;
    width: 89px;
    height: 98px;
    border-radius: 50%;
  }
}
.lists {
  display: block;
  margin: 100px 0 0 0;
  ion-button {
    --background: none;
    --box-shadow: none;
    display: block;
    width: min-content;
  }
  ion-text {
    color: #000;
    font-family: "ABeeZee", sans-serif;
    font-size: 16px;
    text-transform: capitalize;
    padding: 0 0 0 10px;
  }
  .icons {
    width: 34px;
    height: 32px;
    border-radius: 50%;
  }
}
.pin {
  position: absolute;
  bottom: 5px;
  --ion-color-primary: #fff;
  --background: none;
  --box-shadow: none;
  width: 100%;
  display: block;
  height: 100px;
  .location {
    width: 64px;
    border-radius: 50%;
    --ion-color-primary: #fff;
    --background: none;
    color: #000;
    --box-shadow: none;
    float: center;
  }
}
</style>
