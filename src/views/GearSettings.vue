<template>
  <ion-page>
    <ion-content :fullscreen="true">
        <div class="container">
                <div class="box">
        <ion-img :src="compass" class="compass"></ion-img>
      </div>
      <strong class="title">Cyclyst Hub</strong>

      <div class="section">
        <ion-text class="retri">Basic Information</ion-text>
        <ion-card class="basicinfo">
          <ion-item class="ion-no-padding" lines="none">
            <ion-text>First Name:</ion-text>
            <ion-text></ion-text>
          </ion-item>
          <ion-item class="ion-no-padding" lines="none">
            <ion-text>Last Name:</ion-text>
          </ion-item>
          <ion-item class="ion-no-padding" lines="none">
            <ion-text>Birthdate:</ion-text>
          </ion-item>
          <ion-item class="ion-no-padding" lines="none">
            <ion-text>Sex:</ion-text>
          </ion-item>
          <ion-button class="edit">Edit</ion-button>
        </ion-card>
      </div>

      <div class="section">
        <ion-text class="retri">Cyclyst Hub</ion-text>
        <ion-card class="basicinfo">
          <ion-item class="ion-no-padding" lines="none">
            <ion-button class="btn">Help Center</ion-button>
          </ion-item>
          <ion-item class="ion-no-padding" lines="none">
            <ion-button class="btn">About Cyclyst Hub</ion-button>
          </ion-item>
          <ion-item class="ion-no-padding" lines="none">
            <ion-button class="btn">Send Feedback</ion-button>
          </ion-item>
        </ion-card>
      </div>

      <div class="section">
        <ion-text class="retri">Advanced</ion-text>
        <ion-card class="basicinfo">
          <ion-item class="ion-no-padding" lines="none">
            <ion-button class="btn">Reset Settings</ion-button>
          </ion-item>
          <ion-item class="ion-no-padding" lines="none">
            <ion-button class="btn">Clear Cache</ion-button>
          </ion-item>
          <ion-item class="ion-no-padding" lines="none">
            <ion-button class="btn">Log Out</ion-button>
          </ion-item>
        </ion-card>
      </div>
        </div>

      <div class="buttons">
        <ion-button fill="clear" class="cancel">Cancel</ion-button>
        <ion-button fill="clear" class="confirm">Confirm</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonImg } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "GearSettings",
  components: {
    IonContent,
    IonPage,
    IonImg,
  },
  data() {
    return {
      compass: "../../assets/compass.gif",
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
  height: 92vh;
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

.section {
  font-family: "ABeeZee", sans-serif;
  font-size: 14px;

  display: block;
  margin: 30px 0 0 0;
  padding: 0 30px;
  .retri {
    font-family: "ABeeZee", sans-serif;
    font-size: 14px;
    padding: 10px 15px;
    width: 304px;
    height: auto;
    margin: auto;
    display: block;
    --background: #cecccc;
    opacity: 0.76;
  }
}

.basicinfo {
  position: relative;
  margin: auto;
  display: block;
  width: 100%;
  padding: 5px 5px 0px 5px;
  box-shadow: none;
  background: #c4c4c4;

  .edit {
    text-transform: capitalize;
    position: absolute;
    top: -15px;
    right: -15px;
    --background: none;
    color: #0080f6;
    --box-shadow: none;
  }
  ion-item {
    --background: none;
    --min-height: 35px;
    ion-text {
      font-family: "ABeeZee", sans-serif;
      font-weight: bold;
      font-size: 16px;
    }
    .btn {
      font-family: "ABeeZee", sans-serif;
      font-size: 14px;
      --background: none;
      color: #000;
      --box-shadow: none;
      font-weight: bold;
      text-transform: capitalize;
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
