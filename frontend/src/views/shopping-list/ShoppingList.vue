<script setup>
import {
  IonPage,
  IonInput,
  IonIcon,
  IonContent,
  IonButton,
  IonList,
  IonTitle,
  IonItem,
  IonRefresher,
  IonRefresherContent,
  IonCheckbox, IonPopover, IonLabel, IonHeader, IonToolbar, IonMenuButton, IonButtons
} from '@ionic/vue';
import {ref, watch} from "vue";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import router from "@/router";
import {useRoute} from "vue-router";

import {onClickOutside} from '@vueuse/core'
import {ellipsisHorizontal} from "ionicons/icons";

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

const clearShoppingList = () => {
  axios.post(baseUrl + '/api/recipes/clear-shopping-list/').then((response) => {
    getShoppingList()
  })
}

const editItem = (item) => {
  axios.post(`${baseUrl}/api/recipes/shopping-list-item/${itemId}/`, item).then(response => {
    console.log('Updated item', response.data)
  }).catch(error => {
    console.error("Failed to update item status:", error);
  });
};


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
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>
          Shopping List
        </ion-title>
        <ion-buttons slot="end">
          <ion-button id="popover-button">
            <ion-icon slot="icon-only" :icon="ellipsisHorizontal"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" padding class="ion-padding">

      <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <ion-list>
        <ion-item v-for="item in shoppingList.items" :key="item.id">
          <ion-checkbox label-placement="end"
                        alignment="start"
                        justify="start"
                        v-model="item.checked"

                        @ionChange="updateItemStatus(item.id, item.checked)"
          ></ion-checkbox>
          <div style="width: 15px"></div>
          <ion-input v-model="item.ingredient.text"
                     @input="editItem(item)"
                     ref="target"
                     autofocus
          ></ion-input>
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

      <ion-popover trigger="popover-button" :dismiss-on-select="true">
        <ion-content>
          <ion-list>
            <ion-item button @click="clearShoppingList()">
              <ion-label>Clear</ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-popover>

    </ion-content>
  </ion-page>
</template>

<style scoped>
/* Optional styling for better UI */
.ion-padding {
  padding: 16px;
}
</style>
