<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <ion-img :src="compass" class="compass"></ion-img>
      </div>

      <div class="">
        <strong class="title">Cyclyst Hub</strong>
      </div>

      <div class="card">
        <ion-card>
          <ion-card-content>
            <ion-item>
              <ion-label position="floating">Username</ion-label>
              <ion-input type="username"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Password</ion-label>
              <ion-input type="password"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Confirm Password</ion-label>
              <ion-input type="password"></ion-input>
            </ion-item>
            <div class="buttons">
              <ion-button fill="clear" class="sign-up">Sign In</ion-button>
              
            </div>
          </ion-card-content>
        </ion-card>
      </div>
       <ion-img :src="idiots" class="3idiots"></ion-img>
    </ion-content>
  </ion-page>
</template>

 



<script lang="ts">
import { IonContent, IonPage, IonImg } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LogIn",
  components: {
    IonContent,
    IonPage,
    IonImg,
  },
  data() {
    return {
      compass: "../../assets/compass.gif",
      idiots: "../../assets/3idiots.jpg"
    };
  },
});
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap');
.container {
  display: block;
  width: 100%;
  height: 125px;
  padding: 5px 5px 0px 5px;
}
.card {
  display: block;
  background: white;
}
.bg-white {
  background: white;
}
.compass {
  width: 79px;
  height: 84px;
  float: right;
}
.title {
  font-size: 42px;
  font-family: 'Sawarabi Mincho', sans-serif;
  display: block;
  text-align: center;
  background-image: linear-gradient(180deg, #FF000F, #0469FF);
  background-clip: text;
  color: transparent;
}

.buttons {
  display: flex;
  position: relative;
  .login {
    position: absolute;
    right: 0;
    text-decoration:underline;
    color: #000;
  }
    .sign-up{
  text-decoration:underline;
  color: #000;

  }
}
</style>

