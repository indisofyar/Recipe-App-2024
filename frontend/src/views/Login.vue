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
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
        </ion-buttons>
        <ion-title>Login Hello</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      {{erorr}}
      {{baseUrl2}}
      <span v-if='erorr'>{{erorr.message}}</span>
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
          <ion-button type="submit" expand="block">Login</ion-button>
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

<script  setup>
import {computed, ref} from "vue";
import baseUrl from '@/utils/baseUrl';

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

const erorr = ref(null)
const baseUrl2 = ref(baseUrl)
const onSignup = () => {
  submitted.value = true;

  if (usernameValid.value && passwordValid.value) {


    axios.post(baseUrl + '/api/user/login/', {
      email: username.value,
      password: password.value,
      name: 'filler',
      tc: true,
    }).then(res => {
      if (!res.data) {
        throw new Error
      }
      localStorage.setItem('refreshToken', res.data.token.refresh);
      localStorage.setItem('accessToken', res.data.token.access);
      router.push({name: 'meal-planner'});
    }).catch(err => {
      let message = '';
      if (err.response && err.response.data.errors.email) {
        for (const text of err.response.data.errors.email) {
          message += text
        }
        toastMessage.value = message;
        showToast.value = true;

      } else {
        erorr.value = err;
        toastMessage.value = err.message;
        showToast.value = true;
      }


    })


  }
};
</script>
