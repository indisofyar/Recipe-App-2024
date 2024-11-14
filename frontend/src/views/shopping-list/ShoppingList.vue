<script setup >
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon, IonContent
} from '@ionic/vue';
import {ref, watch} from "vue";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import router from "@/router";

const shoppingList = ref([])

const getShoppingList = () => {
  axios.get(baseUrl + '/api/recipes/shopping-list/').then((response) => {
    shoppingList.value = response.data;
  })
}
const loaded = ref(false)
let accessToken = localStorage.getItem('accessToken');
let accessTokenFull = 'Bearer ' + accessToken

const refreshToken = localStorage.getItem('refreshToken');

// Check if user is logged in
axios.post(baseUrl + '/api/user/token/refresh/', {
  refresh: refreshToken
}).then((response) => {
  localStorage.setItem('accessToken', response.data.access);
  accessToken = localStorage.getItem('accessToken');
  accessTokenFull = 'Bearer ' + accessToken
  axios.defaults.headers.common['Authorization'] = accessTokenFull;
  getShoppingList()
}).catch(e => loaded.value = true)

getShoppingList();

const updateItemStatus = (itemId, checked) => {
  axios.post(`${baseUrl}/api/recipes/shopping-list/${itemId}/`, {
    checked: checked
  }).then(response => {
    console.log(`Updated item ${itemId} status to ${checked}`);
  }).catch(error => {
    console.error("Failed to update item status:", error);
  });
}

// watch(
//   () => shoppingList.value.map(item => item.checked),
//   (newVal, oldVal) => {
//     newVal.forEach((checked, index) => {
//       if (checked !== oldVal[index]) {
//         const item = shoppingList.value[index];
//         updateItemStatus(item.id, checked);
//       }
//     });
//   },
//   { deep: true }
// );

</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true" padding class="ion-padding">
      <h3>Shopping List</h3>
      <ion-list>
        <ion-item v-for="item in shoppingList.items">
          <ion-checkbox label-placement="start"
                        v-model="item.checked"
                        v-html="item.ingredient.text"
                      @ionChange="updateItemStatus(item.id, item.checked)"

          ></ion-checkbox>
        </ion-item>
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<style scoped>

</style>
