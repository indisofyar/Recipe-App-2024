<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="Back"></ion-back-button>
        </ion-buttons>
        <ion-title>Add Recipe</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>

      <ion-card @click="goToSearch">
        <ion-card-header>
          <ion-card-title>Add Recipe from Google</ion-card-title>
        </ion-card-header>
      </ion-card>
      <ion-card disabled>
        <ion-card-header>
          <ion-card-title>Community Recipe</ion-card-title>
        </ion-card-header>
        <ion-card-content>Coming soon</ion-card-content>
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

const goToSearch = () => {
  router.push({
    name: "google-search",
  });
};
let a = {
  "kind": "customsearch#result",
  "title": "Homemade Pasta - Recipes by Love and Lemons",
  "htmlTitle": "Homemade &lt;b&gt;Pasta&lt;/b&gt; - &lt;b&gt;Recipes&lt;/b&gt; by Love and Lemons",
  "link": "https://www.loveandlemons.com/homemade-pasta-recipe/",
  "displayLink": "www.loveandlemons.com",
  "snippet": "This 4-ingredient homemade pasta recipe is easy to make, and it yields chewy, delicious noodles every time.",
  "htmlSnippet": "This 4-ingredient homemade &lt;b&gt;pasta recipe&lt;/b&gt; is easy to make, and it yields chewy, delicious noodles every time.",
  "formattedUrl": "https://www.loveandlemons.com/homemade-pasta-recipe/",
  "htmlFormattedUrl": "https://www.loveandlemons.com/homemade-&lt;b&gt;pasta&lt;/b&gt;-&lt;b&gt;recipe&lt;/b&gt;/",
  "pagemap": {
    "cse_thumbnail": [
      {
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxslue_eYkUuQdaV0RxZdOY0sByjUJWNq8zDXpZLIbLlSdIbYIXAnHdyQ&amp;s",
        "width": "203",
        "height": "248"
      }
    ],
    "metatags": [
      {
        "og:image": "https://cdn.loveandlemons.com/wp-content/uploads/opengraph/2020/04/homemade-pasta.jpg",
        "article:published_time": "2020-04-25T13:39:43+00:00",
        "og:image:width": "1740",
        "twitter:card": "summary_large_image",
        "og:site_name": "Love and Lemons",
        "twitter:label1": "Written by",
        "twitter:label2": "Est. reading time",
        "og:image:type": "image/jpeg",
        "msapplication-tileimage": "/ms-icon-144x144.png",
        "slick:category": "cooking-component:cooking basics;more-recipes:more recipes:",
        "og:description": "Fresh pasta is SO easy to make! This homemade pasta recipe uses just 4 ingredients - flour, eggs, olive oil, and salt - and it comes out perfect every time.",
        "twitter:creator": "@lovelemonsfood",
        "article:publisher": "https://www.facebook.com/lovelemonsfood",
        "twitter:data1": "Jeanine Donofrio",
        "twitter:data2": "8 minutes",
        "twitter:site": "@lovelemonsfood",
        "article:modified_time": "2024-06-10T14:18:08+00:00",
        "slick:featured_image": "https://cdn.loveandlemons.com/wp-content/uploads/2020/04/homemade-pasta.jpg",
        "msapplication-tilecolor": "#ffffff",
        "og:type": "recipe",
        "author": "Jeanine Donofrio",
        "og:title": "Homemade Pasta - Love and Lemons",
        "og:image:height": "2118",
        "slick:wpversion": "1.4.3",
        "fb:pages": "253349134732302",
        "slick:group": "post",
        "viewport": "width=device-width, initial-scale=1.0",
        "slick:wppostid": "47191",
        "og:locale": "en_US",
        "og:url": "https://www.loveandlemons.com/homemade-pasta-recipe/"
      }
    ],
    "videoobject": [
      {
        "contenturl": "https://content.jwplatform.com/videos/ipsF0kqD.mp4",
        "uploaddate": "2022-08-29T16:34:02.000Z",
        "name": "Homemade Pasta",
        "description": "Fresh pasta is SO easy to make! This homemade pasta recipe uses just 4 ingredients - flour, eggs, olive oil, and salt - and it comes out perfect every time.",
        "thumbnailurl": "https://content.jwplatform.com/thumbs/ipsF0kqD-720.jpg"
      }
    ],
    "cse_image": [
      {
        "src": "https://cdn.loveandlemons.com/wp-content/uploads/opengraph/2020/04/homemade-pasta.jpg"
      }
    ]
  }
}
</script>
