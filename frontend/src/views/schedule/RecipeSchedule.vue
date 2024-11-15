<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>

        <ion-title>Recipe Schedule</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="goToAddRecipe">
            <ion-icon :icon="addOutline" size="medium"></ion-icon>
          </ion-button>
        </ion-buttons>

      </ion-toolbar>


    </ion-header>

    <ion-content :fullscreen="true">

      <ion-list v-show="groupedMealEvents.length > 0">
        <ion-item-group v-for="group in groupedMealEvents" :key="group.id">
          <ion-item-divider sticky>
            <ion-label><b>{{ group.label }}</b></ion-label>
          </ion-item-divider>

          <ion-item-sliding
            v-for="mealEvent in group.mealEvents"
            :key="mealEvent.id"
          >
            <ion-item button @click="router.push({name:'recipe', params:{id:mealEvent.recipe.id}})">
              <ion-label>

                <h3><b>{{ mealEvent.type }}</b></h3>
                <p>
                  {{ mealEvent.recipe.title }}
                </p>
              </ion-label>
            </ion-item>
            <!--            <ion-item-options>-->
            <!--              <ion-item-option-->
            <!--                color="favorite"-->
            <!--                @click="addFavorite($event, session)"-->
            <!--                v-if="segment === 'all'"-->
            <!--                >Favorite</ion-item-option-->
            <!--              >-->
            <!--              <ion-item-option-->
            <!--                color="danger"-->
            <!--                @click="removeFavorite($event, session, 'Remove Favorite')"-->
            <!--                v-if="segment === 'favorites'"-->
            <!--                >Remove</ion-item-option-->
            <!--              >-->
            <!--            </ion-item-options>-->
          </ion-item-sliding>
        </ion-item-group>
      </ion-list>
    </ion-content>
  </ion-page>
</template>
<script setup>
import {addOutline, options} from "ionicons/icons";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
  IonTitle,
} from "@ionic/vue";
import {dateFormat} from "@/filters/dateFormat";
import {computed, ref} from "vue";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import {useRouter} from "vue-router";

const mealEvents = ref([])

const goToSessionDetail = () => {

}

const getLabelStyle = () => {

}

const week = ref(0)
const getEvents = () => {
  axios.get(baseUrl + '/api/recipes/events/' + week.value + '/').then((response) => {
    mealEvents.value = response.data
  })
}

const groupedMealEvents = computed(() => {
  let groupedMealEvents = [];
  let i = 0;
  let j = 0;

  // Loop through evens
  for (const event of mealEvents.value) {
    // if (i > 0) {
    //   event.date != mealEvents.value[j - 1].date;
    //   i++;
    // }
    if (!groupedMealEvents[i]) {
      groupedMealEvents[i] = {
        label: null,
        mealEvents: [],
      }
    }

    if (groupedMealEvents[i].label != null && event.date != groupedMealEvents[i].label) {
      i++;
      groupedMealEvents[i] = {
        label: null,
        mealEvents: [],
      }
    }
    if (groupedMealEvents[i]) {
      groupedMealEvents[i].label = event.date;
      groupedMealEvents[i].mealEvents.push(event);
    }
  }
  return groupedMealEvents;
})

getEvents();

const router = useRouter()

const goToAddRecipe = () => {
  router.push({name: 'recipe-bank'})
}
</script>
