<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="Home"></ion-back-button>
        </ion-buttons>
        <ion-title>Recipe Bank</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="goToAddRecipe"> Add
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content padding class="speaker-detail">
      <ion-searchbar placeholder="Search"></ion-searchbar>
      <ion-list>
        <ion-item v-for="recipe in recipes" @click="router.push({name:'recipe', params:{id:recipe.id}})">
          <ion-label>{{ recipe.title }}</ion-label>
        </ion-item>
      </ion-list>
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
  IonTitle,
  IonLabel,
  IonList,
  IonItem,
  IonSearchbar,
  IonBackButton,
} from '@ionic/vue';

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

const goToAddRecipe = () => {
  router.push({
    name: "add-recipe",
  });
};
</script>
