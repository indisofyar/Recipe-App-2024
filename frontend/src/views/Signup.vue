<style scoped>
.signup-logo {
  min-height: 200px;

  padding: 20px 0;

  text-align: center;
}

.signup-logo img {
  max-width: 150px;
}
</style>

<template>
  <ion-page v-if="loaded">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
        </ion-buttons>
        <ion-title>Signup</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="signup-logo">
        <img src="./../../public/assets/img/appicon.svg" alt="Ionic Logo"/>
      </div>
      <form @submit.prevent="onSignup">
        <ion-list>
          <ion-item>
            <ion-input
              labelPlacement="stacked"
              label="Email"
              v-model="username"
              name="username"
              type="text"
              required
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-input
              labelPlacement="stacked"
              label="Password"
              v-model="password"
              name="password"
              type="password"
              required
            ></ion-input>
          </ion-item>
        </ion-list>
        <div class="ion-padding">
          <ion-button type="submit" expand="block">Create account</ion-button>
        </div>
      </form>
      <ion-toast
        :is-open="showToast"
        :message="toastMessage"
        :duration="2000"
      ></ion-toast>

      <ion-content>
        <router-link to="/login">
          <ion-button fill="clear">Login</ion-button>
        </router-link>
      </ion-content>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {computed, ref} from "vue";
import baseUrl from '@/utils/baseUrl';

const loaded = ref(false)
let accessToken = localStorage.getItem('accessToken');
let accessTokenFull = 'Bearer ' + accessToken

const refreshToken = localStorage.getItem('refreshToken');

// Check if user is logged in
axios.post(baseUrl + '/api/user/token/refresh/', {
  refresh: refreshToken
}).then((response) => {
  localStorage.setItem('accessToken', response.data.access);
  accessToken = localStorage.getItem('accessToken');
  accessTokenFull = 'Bearer ' + accessToken
  axios.defaults.headers.common['Authorization'] = accessTokenFull
  router.push({name: 'meal-planner'});
}).catch(e => loaded.value = true)


import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonContent,
  IonList,
  IonItem,
  IonTitle,
  IonInput,
  IonToast,
} from "@ionic/vue";
import axios from "axios";
import router from "@/router";

const username = ref("");
const password = ref("");
const submitted = ref(false);

const showToast = ref(false);
const toastMessage = ref("");

const usernameValid = computed(() => {
  return true;
});

const passwordValid = computed(() => {
  return true;
});

const onSignup = () => {
  submitted.value = true;

  if (usernameValid.value && passwordValid.value) {


    axios.post(baseUrl + '/api/user/register/', {
      email: username.value,
      password: password.value,
      name: 'filler',
      tc: true,
    }).then(res => {
      router.push({name: 'meal-planner'});
    }).catch(err => {
      let message = '';

      for (const text of err.response.data.errors.email) {
        message += text
      }
      toastMessage.value = message;
      showToast.value = true;

    })


  }
};
</script>
