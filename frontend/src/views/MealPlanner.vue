<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-grid fixed>
          <ion-row align-items-stretch>
            <ion-col size="12" size-md="6">
              <ion-card class="speaker-card">
                <ion-card-content @click="router.push({name:'select-schedule'})" style="text-align: center">
                  No schedule this week
                </ion-card-content>
                <ion-card-content style="text-align: center">
                  <ion-button @click="goToSchedule">Create schedule</ion-button>
                </ion-card-content>
              </ion-card>
              <ion-card class="speaker-card">
                <ion-card-content style="text-align: center">
                  Recipe Bank
                </ion-card-content>
                <ion-card-content style="text-align: center">
                  <ion-button @click="goToRecipeBank">View Recipes</ion-button>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { alertController, modalController, menuController } from "@ionic/vue";
import { useIonRouter } from "@ionic/vue";
import { useRouter } from "vue-router";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonIcon,
  IonContent,
  IonList,
  IonItem,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonAvatar,
  loadingController,
} from "@ionic/vue";
type GroupedSession = {
  id: string;
  startTime: string;
  sessions: Session[];
};

type Session = {
  id: number;
  dateTimeStart: string;
  dateTimeEnd: string;
  name: string;
  location: string;
  description: string;
  speakerIds: number[];
  tracks: string[];
};

const segment = ref("all");
const store = useStore();
const ionRouter = useIonRouter();
const allGroupedRef = ref<GroupedSession[]>([]);





const checkAndLoadData = async () => {
  if (allGroupedRef.value.length === 0) {
    await store.dispatch("loadSessionData");
    await store.dispatch("loadSpeakerData");
    await store.dispatch("fetchTracks");
  }
};

onMounted(() => {
  menuController.enable(true);
  checkAndLoadData();
});


const router = useRouter();
const goToRecipeBank = () => {
  router.push({
    name: "recipe-bank",
  });
};

const goToSchedule = () => {
  router.push({
    name: "select-schedule",
  });
};
</script>

<style scoped>
ion-fab-button {
  --background: var(--ion-color-step-150, #ffffff);
  --background-hover: var(--ion-color-step-200, #f2f2f2);
  --background-focused: var(--ion-color-step-250, #d9d9d9);
  --color: var(--ion-color-primary, #3880ff);
}
</style>
