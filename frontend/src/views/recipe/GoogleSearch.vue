<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="Back"></ion-back-button>
        </ion-buttons>
        <ion-title>Search Google</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding class="speaker-detail">
      <ion-searchbar placeholder="Search" @keydown.enter="searchGoogle" v-model="searchTerm"></ion-searchbar>
      <ion-list>
        <ion-item v-for="recipe in searchResults.items" :key="recipe.id" v-if="searchResults && searchResults.items"
                  @click="extractRecipe(recipe)"
        >
          <ion-label>{{ recipe.title }}<br>

            <ion-text style="font-size: 12px; " color="primary">{{
                recipe.displayLink
              }}
            </ion-text>
          </ion-label>

        </ion-item>
      </ion-list>
    </ion-content>

  </ion-page>
</template>

<script setup>
import {computed, ref} from 'vue';

import {
  IonLoading,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonText,
  IonButton,
  IonIcon,
  IonCardContent,
  IonContent,
  IonTitle,
  IonLabel,
  IonList,
  IonItem,
  loadingController,
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

const searchTerm = ref('')
const searchResults = ref(null)

const searchGoogle = () => {
  axios.get(baseUrl + '/api/recipes/search-google/' + searchTerm.value).then((response) => {
    searchResults.value = response.data;
  })
};

const loading = ref(false);
const extractRecipe = async (recipe) => {
  const loading = await loadingController.create({
    message: 'Extracting recipe...',
    duration: 5000,
  });

  loading.present();
  axios.post(baseUrl + '/api/recipes/extract-recipe/', {url: recipe.link, imageUrl: recipe.pagemap.metatags[0]['og:image']}).then((response) => {
    loading.dismiss();
    console.log(response.data)
    router.push({name: 'recipe', params: {id: response.data.id}});
  })
}

const showLoading = async () => {

};
</script>
