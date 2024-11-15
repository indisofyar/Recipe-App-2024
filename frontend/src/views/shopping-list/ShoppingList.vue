<script setup>
import {
  IonPage,
  IonInput,
  IonIcon,
  IonContent,
  IonButton,
  IonList,
  IonItem,
  IonRefresher,
  IonRefresherContent,
  IonCheckbox
} from '@ionic/vue';
import {ref, watch} from "vue";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import router from "@/router";
import {useRoute} from "vue-router";

import {onClickOutside} from '@vueuse/core'

const addingNewItem = ref(false);  // Track if we're adding a new item
const newItemText = ref("");  // New item text input
const shoppingList = ref([]);

const loaded = ref(false);
let accessToken = localStorage.getItem('accessToken');
let accessTokenFull = 'Bearer ' + accessToken;

const refreshToken = localStorage.getItem('refreshToken');

// Check if user is logged in
axios.post(baseUrl + '/api/user/token/refresh/', {
  refresh: refreshToken
}).then((response) => {
  localStorage.setItem('accessToken', response.data.access);
  accessToken = localStorage.getItem('accessToken');
  accessTokenFull = 'Bearer ' + accessToken;
  axios.defaults.headers.common['Authorization'] = accessTokenFull;
  getShoppingList();
}).catch(e => loaded.value = true);

const getShoppingList = () => {
  axios.get(baseUrl + '/api/recipes/shopping-list/').then((response) => {
    setTimeout(() => {
      shoppingList.value = response.data;
      newItem.value = emptyItem;
    }, 0)

  })
}


getShoppingList();

const updateItemStatus = (itemId, checked) => {
  axios.post(`${baseUrl}/api/recipes/shopping-list/${itemId}/`, {
    checked: checked
  }).then(response => {
    console.log(`Updated item ${itemId} status to ${checked}`);
  }).catch(error => {
    console.error("Failed to update item status:", error);
  });
};

const emptyItem = {text: '', checked: false, id: null,}
const newItem = ref(emptyItem)

const addNewItem = () => {
  newItem.value.shoppingListId = shoppingList.value.id
  axios.post(baseUrl + '/api/recipes/new-shopping-list-item/', newItem.value).then(response => {
    newItem.value.text = response.data.ingredient.text;
    newItem.value.checked = response.data.checked;
    newItem.value.id = response.data.id;
  }).catch(error => {
    console.error("Failed to add new item:", error);
  });
};

const route = useRoute();
watch(
  () => route.name, () => {
    getShoppingList();
  }
);

const handleRefresh = (event) => {
  setTimeout(() => {
    // Any calls to load data go here
    event.target.complete();
  }, 2000);
};

const target = ref(null)

onClickOutside(target, event => {

  addingNewItem.value = false;
  getShoppingList();
  newItem.value = emptyItem;

})


</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true" padding class="ion-padding">
      <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <h3>Shopping List</h3>
      <ion-list>
        <ion-item v-for="item in shoppingList.items" :key="item.id">
          <ion-checkbox label-placement="start"
                        v-model="item.checked"
                        v-html="item.ingredient.text"
                        @ionChange="updateItemStatus(item.id, item.checked)"
          ></ion-checkbox>

        </ion-item>
      </ion-list>


      <ion-item v-if="addingNewItem">
        <ion-input v-model="newItem.text"
                   @input="addNewItem()"
                   @focusout="newItem = emptyItem"
                   ref="target"
                   autofocus
        ></ion-input>
      </ion-item>

      <!-- Button to show input field -->
      <ion-button v-if="!addingNewItem" @click="addingNewItem = true" expand="block" fill="clear">
        Add
      </ion-button>

    </ion-content>
  </ion-page>
</template>

<style scoped>
/* Optional styling for better UI */
.ion-padding {
  padding: 16px;
}
</style>
