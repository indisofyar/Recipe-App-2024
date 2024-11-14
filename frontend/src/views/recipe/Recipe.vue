<template>
  <ion-page v-if="recipe">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="Back"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ recipe.title }}</ion-title>
        <ion-buttons slot="end">
          <ion-button id="popover-button">
            <ion-icon slot="icon-only" :icon="ellipsisHorizontal"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-popover trigger="popover-button" :dismiss-on-select="true">
      <ion-content>
        <ion-list>
          <ion-item button @click="close('https://ionicframework.com/getting-started')">
            <ion-label>Edit</ion-label>
          </ion-item>
          <ion-item button @click="deleteRecipe">
            <ion-label>Delete</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-popover>

    <ion-content padding class="speaker-detail">
      <ion-img
        v-if="recipe.recipe_image_url"
        :src="recipe.recipe_image_url"
        style="height: 200px; width: 100%; object-fit: cover"
      ></ion-img>
      <div class="ion-padding">
        <ion-chip v-html="recipe.prep_time"/>
        <ion-chip v-html="recipe.cook_time"/>
        <ion-chip>{{ recipe.serves }}</ion-chip>
        <ion-chip>{{ recipe.difficulty }}</ion-chip>
        <ion-chip v-for="tag in recipe.tags">{{ tag.text.charAt(0).toUpperCase() + String(tag.text).slice(1) }}
        </ion-chip>
      </div>
      <div class="ion-padding">
        <h2>Ingredients</h2>
        <ion-list>
          <ion-item v-for="ingredient in recipe.ingredients" v-html="ingredient.text">
          </ion-item>
        </ion-list>
        <h2>Steps</h2>
        <ion-list>
          <ion-item v-for="step in recipe.steps">
            <ion-label>{{ step.text }}</ion-label>
          </ion-item>
        </ion-list>
      </div>
      <ion-card>
        <ion-card-content>
          URL: {{ recipe.recipe_url }}
        </ion-card-content>
      </ion-card>


    </ion-content>

  </ion-page>
</template>

<script setup>
import {computed, ref} from 'vue';

import {
  IonLoading,
  IonPage,
  IonCardTitle,
  IonHeader,
  IonImg,
  IonCard,
  IonCardContent,
  IonChip,
  IonToolbar,
  IonButtons,
  IonText,
  IonButton,
  IonIcon,
  IonContent,
  IonTitle,
  IonLabel,
  IonList,
  IonItem,
  loadingController,
  IonSearchbar,
  IonBackButton, IonPopover,
} from '@ionic/vue';
import {
  logoTwitter,
  logoGithub,
  logoInstagram, ellipsisHorizontal
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


const recipe = ref(null)

function getRecipe() {
  axios.get(baseUrl + '/api/recipes/recipe/' + route.params.id).then((response) => {
    console.log(response.data)
    recipe.value = response.data;
  })
}

getRecipe()

const searchTerm = ref('')
const searchResults = ref(null)


const loading = ref(false);
const extractRecipe = async (recipe) => {
  const loading = await loadingController.create({
    message: 'Extracting recipe...',
    duration: 5000,
  });

  loading.present();
  axios.post(baseUrl + '/api/recipes/extract-recipe/', {
    url: recipe.link,
    imageUrl: recipe.pagemap.metatags[0]['og:image']
  }).then((response) => {
    loading.dismiss();
    router.push({name: 'recipe', params: {id: response.data.id}});
  })
}

const deleteRecipe = () => {
  axios.post(baseUrl + '/api/recipes/delete/', {
    id: recipe.value.id
  }).then((res) => {
    router.push({name: 'recipe-bank'});
  })
};
</script>
