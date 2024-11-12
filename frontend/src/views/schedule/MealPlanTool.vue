<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="Back"></ion-back-button>
        </ion-buttons>
        <ion-title>Plan your Meals</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <h4>Select Meals</h4>
      <table class="table">
        <tr>
          <th></th>
          <th>
            Breakfast
          </th>
          <th>
            Lunch
          </th>
          <th>
            Dinner
          </th>
        </tr>
        <tr v-for="(contents, index) in selectMealTable">
          <td v-for="(innerContents, innerIndex) in contents"
              @click="tableClick(innerContents, index, innerIndex, contents)" style="height: 50px;"
              :style="typeof innerContents == 'boolean' ? 'text-align:center;' : ''">
            <ion-icon :icon="checkmarkCircleOutline" v-if="typeof innerContents == 'boolean' && innerContents"
                      size="large"></ion-icon>
            <ion-icon :icon="removeOutline" v-else-if="typeof innerContents == 'boolean' && !innerContents"
                      color="light"></ion-icon>
            {{ typeof innerContents == 'string' ? innerContents : '' }}
          </td>
        </tr>
      </table>

      <h4>Preferences</h4>

      <ion-list>
        <ion-item v-for="preference in preferences">
          <ion-label v-html="'<b>' +preference.text + '</b>' + preference.textSecondHalf"></ion-label>
          <ion-button fill="outline" size="medium" @click="managePreference('decrease', preference)">-</ion-button>
          <ion-button fill="outline" size="medium" @click="managePreference('increase', preference)">+</ion-button>
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
  IonContent,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonButton,
  IonTitle,
  IonLabel,
  IonList,
  IonItem,
  IonSearchbar,
  IonIcon,
  IonBackButton, IonText, IonPopover, IonSelectOption, IonSelect, IonDatetime,
} from '@ionic/vue';

import {checkmark, checkmarkCircleOutline, removeOutline} from 'ionicons/icons';


import {useRoute, useRouter} from 'vue-router';
import {useStore} from '@/store';
import axios from "axios";
import baseUrl from "@/utils/baseUrl.js";

const speaker = computed(() => {
  return {name: '', profilePic: ''}
});

const selectMealTable = ref([
  ['Monday', false, false, false],
  ['Tuesday', false, false, false],
  ['Wednesday', false, false, false],
  ['Thursday', false, false, false],
  ['Friday', false, false, false],
  ['Saturday', false, false, false],
  ['Sunday', false, false, false],
])


const tableClick = (innerContents, index, innerIndex, contents) => {
  if (typeof innerContents == 'boolean') {
    contents[innerIndex] = !contents[innerIndex];
  }
}

const preferences = ref([
  {text: 'Any amount', textSecondHalf: ' of vegetarian meals', number: null, type: 'vegetarian'},
])

const numberOfAvailableMeals = computed(() => {
  let i;
  for (row of selectMealTable.value) {
    for (col of row) {
      if (col && typeof col == 'boolean') {
        i++;
      }
    }
  }
  return i++;
})

function managePreference(command, preference) {
  if (command == 'increase') {
    // If we want to increase it to an amount which exceeds available meals, display an error
    if (preference.number + 1 > numberOfAvailableMeals.value) {
      showToast("You can't increase " + preference.type + " as there aren't enough available meals. Select more meals from the table.")
    }

    if (preference.number == null) {
      preference.number = 1;
      preference.text = preference.number;
      preference.textSecondHalf = preference.textSecondHalf.replace('of ', '');
    } else {
      preference.number = preference.number + 1;
      preference.text = preference.number;
    }
  }
}

function showToast(message) {
  setTimeout(() => {

  }, 3000)

}

const store = useStore();
const route = useRoute();
const router = useRouter();


const recipes = ref([])

function getRecipes() {
  axios.get(baseUrl + '/api/recipes/recipes/').then((response) => {
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
