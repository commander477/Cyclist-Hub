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
      </div>
      <ion-text
        >Cylist's ID:
        <span class="c-id">{{ cyclistId }}</span>
      </ion-text>
      <ion-button @click="ProfilePage" class="pin">
        <ion-img :src="location" class="location"></ion-img>
      </ion-button>
      <div class="section">
        <div>
          <ion-text class="retri">Cyclist List</ion-text>
          <ion-card class="basicinfo">
            <ion-item class="ion-no-padding" lines="none">
              <ion-img :src="baye" class="profile-img"></ion-img>
              <ion-text>(Cyclist’s Name)</ion-text>
            </ion-item>
            <ion-item class="ion-no-padding" lines="none">
              <ion-img :src="ppf" class="profile-img"></ion-img>
              <ion-text>(Cyclist’s Name)</ion-text>
            </ion-item>
            <ion-item class="ion-no-padding" lines="none">
              <ion-img :src="woman" class="profile-img"></ion-img>
              <ion-text>(Cyclist’s Name)</ion-text>
            </ion-item>
            <ion-item class="ion-no-padding" lines="none">
              <ion-img :src="ppf" class="profile-img"></ion-img>
              <ion-text>(Cyclist’s Name)</ion-text>
            </ion-item>
            <ion-item class="ion-no-padding" lines="none">
              <ion-img :src="ppf" class="profile-img"></ion-img>
              <ion-text>(Cyclist’s Name)</ion-text>
            </ion-item>
          </ion-card>
        </div>
        <div>
          <div>
            <ion-text class="retri">Search List</ion-text>
            <div class="box">
              <ion-img :src="addcyclist" class="add"></ion-img>
              <ion-item>
                <ion-input placeholder="Input Cyclist’s ID"></ion-input>
              </ion-item>
            </div>
          </div>
          <div>
            <ion-text class="retri2">Result</ion-text>
             <div class="box">
              <ion-img :src="result" class="add"></ion-img>
              <ion-item>
                <ion-label position="fixed"></ion-label>
                <ion-input></ion-input>
              </ion-item>
            </div>
         </div>
        </div>
      </div>
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
      baye: "../../assets/baye.jfif",
      woman: "../../assets/woman.jpg",
      result: "../../assets/result.png",
      cyclistId: "CH211207",
    };
  },
  methods: {
    ProfilePage() {
      this.$router.push("/profile-page");
    },
    CyclistList() {
      this.$router.push("/cyclist-list");
    },
    AddCyclist() {
      this.$router.push("/add-cyclist");
    },
    GearSettings() {
      this.$router.push("/gear-settings");
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
  margin: 0 0 0 37px;
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
  margin: 15px 0 0 42px;
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
.section {
  font-family: "ABeeZee", sans-serif;
  font-size: 14px;
  display: flex;
  margin: 30px 0 0 0;
  padding: 0 25px;
  .retri {
    font-family: "Sofadi One", sans-serif;
    font-size: 20px;
    font-style: Italic;
    font-weight: Bold;
    padding: 24px 15px;
    width: auto;
    height: auto;
    margin: auto;
    display: block;
    --background: #cecccc;
    opacity: 0.76;
  }
  .basicinfo {
    box-shadow: none !important;
    width: 180px;
    margin: 0;
    ion-item {
      .profile-img {
        width: 36px;
        height: 31px;
      }
      ion-text {
        margin: 0;
        padding: 0 0 0 10px;
      }
    }
  }
}
ion-card {
  --box-shadow: none;
}
.retri2 {
  font-family: "Sofadi One", sans-serif;
  font-size: 20px;
  font-style: Italic;
  font-weight: Bold;
  padding: 24px 15px;
  width: auto;
  height: auto;
  margin: auto;
  display: block;
  --background: #cecccc;
  opacity: 0.76;
  display: block;
}
.box {
  display: flex;
  ion-img {
    width: 30px; 
    height: 30px;
    margin: 10px 0 0 0;
  }
  ion-item {
    width: 100px;
    ion-input {
      font-family: "Rufina";
      font-size: 10px;
    }
  }
}
</style>
