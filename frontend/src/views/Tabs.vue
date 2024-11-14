<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/meal-planner">
          <ion-icon :icon="home()" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="radio" href="/tabs/recipe-schedule">
          <ion-icon :icon="calendar()" />
          <ion-label>Schedule</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="library" href="/tabs/shopping-list">
          <ion-icon :icon="list()" />
          <ion-label>Shopping List</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
  import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';

  import {playCircle, radio, library, search, home, list, calendar} from 'ionicons/icons';

  export default {
    methods: {
      calendar() {
        return calendar
      },
      list() {
        return list
      },
      home() {
        return home
      }
    },
    components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
    data() {
      return {
        playCircle,
        radio,
        library,
        search,
      };
    },
  };
</script>
