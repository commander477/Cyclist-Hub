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
      <ion-card class="form">
        <ion-item lines="none" class="section">
          <ion-label class="label" position="fixed">First Name:</ion-label>
          <ion-input class="input-box ion-no-padding"></ion-input>
        </ion-item>
        <ion-item lines="none" class="section">
          <ion-label class="label" position="fixed">Last Name:</ion-label>
          <ion-input class="input-box ion-no-padding"></ion-input>
        </ion-item>
        <ion-item lines="none" class="section">
          <ion-label class="label" position="fixed">Birthdate:</ion-label>
          <ion-input type="date" class="input-box ion-no-padding"></ion-input>
        </ion-item>
        <ion-item lines="none" class="section">
          <ion-label class="label" position="fixed">Sex:</ion-label>
          <ion-input class="input-box ion-no-padding"></ion-input>
        </ion-item>
      </ion-card>
      <div class="buttons">
        <ion-button  @click="SignUp" fill="clear" class="cancel">Cancel</ion-button>
        <ion-button  @click="ProfilePage" fill="clear" class="confirm">Confirm</ion-button>
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
      power: "../../assets/power.png",
      cyclistId: "CH211207",
    };
  },
   methods: {
    SignUp() {
      this.$router.push("/sign-up");
   },
    ProfilePage() {
      this.$router.push("/profile-page");
   }
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
}
ion-text {
  font-family: "Rufina", serif;
  font-size: 18px;
  display: block;
  margin: 30px auto;
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
  margin: 20px auto 0 auto;
  position: relative;
  ion-img {
    padding: 15px 0 0 0;
    margin: 0 auto;
    width: 89px;
    height: 98px;
    border-radius: 50%;
  }
}
.form {
  padding: 10px 15px;
  width: 304px;
  height: 303px;
  margin: auto;
  display: block;
  --background: #cecccc;
  opacity: 0.76;

  .section {
    --background: #c4c4c4;
    padding: 10px;
    .input-box {
      border-bottom: 1px solid #000;
      padding: 0;
      
    }
  }
}

.buttons {
  display: flex;
  position: relative;
  
  .cancel {
    font-family: "ABeeZee", sans-serif;
    font-size: 16px;
    color: #000;
    text-transform: capitalize;
  }
  .confirm {
    position: absolute;
    right: 0;
    font-family: "ABeeZee", sans-serif;
    font-size: 16px;
    color: #000;
    text-transform: capitalize;
  }
}
</style>
