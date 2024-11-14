<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <Menu :dark="dark" @dark-mode-changed="handleDarkModeChanged"/>
      <ion-router-outlet id="main-content"/>
    </ion-split-pane>
    <ion-toast
      :is-open="toastOpen"
      :message="toastMessage"
      :duration="3000"
      @didDismiss="toastOpen = false"
    ></ion-toast>
  </ion-app>
</template>

<style src='./theme/variables.css'></style>

<script lang="ts">
import {IonApp, IonSplitPane, IonRouterOutlet, IonToast} from '@ionic/vue';
import {Ref, defineComponent, onMounted, ref, computed} from 'vue';
import Menu from "./components/Menu.vue";
import {useStore} from '@/store';
import {Storage} from '@ionic/storage';

export default defineComponent({
  name: 'App',
  components: {
    IonToast,
    IonApp,
    IonSplitPane,
    IonRouterOutlet,
    Menu,
  },
  setup() {
    let dark: Ref<boolean> = ref(false);
    let globalStorage;

    async function initializeStorage() {
      const storage = new Storage();
      await storage.create();
      return storage;
    }

    const store = useStore();

    const toastOpen =  computed(() => store.getters.toastOpen);
    const toastMessage = computed(() => store.getters.toastMessage);




    const handleDarkModeChanged = (newDarkValue: boolean) => {
      dark.value = newDarkValue;
      document.documentElement.classList.toggle('ion-palette-dark', newDarkValue);
    };

    onMounted(async () => {
      globalStorage = await initializeStorage();
      store.dispatch("loadSessionData");
      store.dispatch("loadSpeakerData");
      await store.dispatch("fetchTracks");
    });

    return {
      dark,
      handleDarkModeChanged,
    };
  },
});
</script>
