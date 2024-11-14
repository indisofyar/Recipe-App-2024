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
      <h4>Select Week</h4>
      <ion-list>
        <ion-item>
          <ion-select label="Week" v-model="week">
            <ion-select-option value="This Week">This Week</ion-select-option>
            <ion-select-option value="Next Week">Next Week</ion-select-option>
            <ion-select-option value="Other">Other</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>
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

      <ion-toast
        :is-open="toastOpen"
        :message="toastMessage"
        :duration="3000"
        @didDismiss="toastOpen = false"
      ></ion-toast>
      <ion-button color="primary" @click="createSchedule">Create Schedule</ion-button>
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
  IonToast,
  IonTitle,
  IonLabel,
  IonList,
  IonItem,
  IonRadio,
  IonRadioGroup,
  IonSearchbar,
  IonIcon,
  IonBackButton, IonText, IonPopover, IonSelectOption, IonSelect, IonDatetime, loadingController,
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
  {text: 'Any amount', textSecondHalf: ' of vegan meals', number: null, type: 'vegan'},
])

const numberOfAvailableMeals = computed(() => {
  let i = 0;
  for (const row of selectMealTable.value) {
    for (const col of row) {
      if (col && typeof col == 'boolean') {
        i++;
      }
    }
  }
  return i++;
})

function managePreference(command, preference) {
  if (command === 'increase') {
    // If increasing goes beyond the number of available meals, show an error
    if (preference.number != null && (preference.number || 0) + 1 > numberOfAvailableMeals.value) {
      showToast(
        `You can't increase the number of ${preference.type} meals as you've only selected ${numberOfAvailableMeals.value} meals. Select more meals from the table.`
      );
      return;
    }

    // Initialize the count if it's null, otherwise increase it
    if (preference.number == null) {
      preference.number = 0;
      preference.text = preference.number;
      preference.textSecondHalf = preference.textSecondHalf.replace('of ', '');
    } else {
      preference.number++;
      preference.text = preference.number;
      if (preference.number == 1) {
        preference.textSecondHalf = preference.textSecondHalf.replace(' meals', ' meal');
      } else if (preference.number == 2) {
        preference.textSecondHalf = preference.textSecondHalf.replace(' meal', ' meals');
      }
    }
  } else if (command === 'decrease') {
    // If decreasing goes below 1, reset to null for default message
    if (preference.number <= 0) {
      preference.number = null;
      preference.text = 'Any amount';
      preference.textSecondHalf = ' of ' + preference.type + ' meals';
    } else {
      // Decrease the preference count and update text
      preference.number--;
      preference.text = preference.number;
    }

    if (preference.number == 1) {
      preference.textSecondHalf = preference.textSecondHalf.replace(' meals', ' meal');
    } else if (preference.number == 0) {
      preference.textSecondHalf = preference.textSecondHalf.replace(' meal', ' meals');
    }
  }
}


const toastOpen = ref(false);
const toastMessage = ref('');

function showToast(message) {
  toastOpen.value = true
  toastMessage.value = message;
  setTimeout(() => {
    toastOpen.value = false;

  }, 4000)
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

const week = ref('This Week')
const createSchedule = async (recipe) => {
  const loading = await loadingController.create({
    message: 'Creating schedule...',
    duration: 5000,
  });

  loading.present();

  axios.post(baseUrl + '/api/recipes/create-schedule/', {
    selectMealTable: selectMealTable.value,
    preferences: preferences.value,
    week: week.value,
  }).then((response) => {
    loading.dismiss();
    router.push({name:'recipe-schedule'})
  })
}
</script>
