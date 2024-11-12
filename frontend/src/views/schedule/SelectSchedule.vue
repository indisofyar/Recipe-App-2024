<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="Back"></ion-back-button>
        </ion-buttons>
        <ion-title>Create Schedule</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>

      <ion-card @click="goToMealPlanTool">
        <ion-card-header>
          <ion-card-title>Help me pick</ion-card-title>
          <ion-card-subtitle>Use our tool to autogenerate a meal plan</ion-card-subtitle>
        </ion-card-header>
      </ion-card>

      <ion-card @click="goToMealSchedule">
        <ion-card-header>
          <ion-card-title>Pick your own meals</ion-card-title>
          <ion-card-subtitle>Free selection</ion-card-subtitle>
        </ion-card-header>

      </ion-card>
    </ion-content>


  </ion-page>
</template>

<script setup>
import {computed, ref} from 'vue';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonTitle,
  IonLabel,
  IonList,
  IonItem,
  IonSearchbar,
  IonBackButton,
} from '@ionic/vue';
import {
  logoTwitter,
  logoGithub,
  logoInstagram
} from "ionicons/icons";
import {useRoute, useRouter} from 'vue-router';
import {useStore} from '@/store';
import axios from "axios";
import baseUrl from "@/utils/baseUrl.js";

const speaker = computed(() => {
  return {name: '', profilePic: ''}
});

const store = useStore();
const route = useRoute();
const router = useRouter();


const recipes = ref([])

function getRecipes() {
  axios.get(baseUrl + '/api/recipes/recipes/').then((response) => {
    console.log(response.data)
    recipes.value = response.data;
  })
}

getRecipes()

const goToMealPlanTool = () => {
  router.push({
    name: "meal-plan-tool",
  });
};

const goToMealSchedule = () => {
  router.push({
    name: "meal-plan-tool",
  });
};
</script>
