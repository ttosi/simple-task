<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="primary" class="mr-2 flex">
          <ion-button id="open-modal" expand="block" class="-mr-3">
            <mdicon name="plus-circle-outline" />
          </ion-button>
          <ion-button>
            <mdicon name="refresh" />
          </ion-button>
        </ion-buttons>
        <ion-title>Groceries</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense"></ion-header>
      <ion-modal ref="modal" trigger="open-modal">
        <ion-header>
          <ion-toolbar>
            <ion-title>Add Grocery</ion-title>
            <ion-buttons slot="end">
              <ion-button class="text-green-600" :strong="true" @click="addItem()">
                Confirm
              </ion-button>
            </ion-buttons>
            <ion-buttons slot="end">
              <ion-button class="text-red-700" @click="cancel()">Cancel</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <div class="p-4 border-t flex items-center">
            <div class="mr-3">
              <ion-input
                v-model="item.name"
                label="Grocery Item"
                label-placement="floating"
                fill="outline"
                placeholder="Enter Item" />
            </div>
            <div>
              <ion-checkbox v-model="item.recurring" labelPlacement="end">Recurring</ion-checkbox>
            </div>
          </div>
        </ion-content>
      </ion-modal>
      <ion-list class="m-2">
        <ion-item v-for="item in items" :key="item.name">
          <div class="flex justify-between items-center px-4 w-full">
            <div class="flex">
              <div v-if="item.recurring" class="mt-1 text-slate-500">
                <mdicon name="refresh" size="16" />
              </div>
              <div class="ml-2 capitalize" :class="{ completed: item.completed }">
                {{ item.name }}
              </div>
            </div>
            <div class="flex items-start">
              <div class="mr-5"><ion-checkbox @ion-change="complete(item)" /></div>
              <div>
                <mdicon
                  name="trash-can-outline"
                  class="text-red-800"
                  size="16"
                  @click="deleteItem(item)" />
              </div>
            </div>
          </div>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Grocery } from '@/models/Grocery'
import {
  IonButton,
  IonButtons,
  IonModal,
  IonList,
  IonItem,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonCheckbox,
} from '@ionic/vue'

const items: Grocery[] | undefined = reactive([
  { id: 1, recurring: true, name: 'Apples', completed: false },
  { id: 2, recurring: true, name: 'Bananas', completed: false },
  { id: 3, recurring: true, name: 'Lettuce', completed: false },
  { id: 4, recurring: true, name: 'Spinach', completed: false },
  { id: 5, recurring: true, name: 'Strawberries', completed: false },
  { id: 6, recurring: true, name: 'Sandwich Meat', completed: false },
  { id: 7, recurring: true, name: 'Sliced Cheese', completed: false },
  { id: 8, recurring: true, name: 'Orange Juice', completed: false },
  { id: 9, recurring: true, name: 'Almond Milk', completed: false },
  { id: 10, recurring: true, name: 'Milk', completed: false },
  { id: 11, recurring: true, name: 'Bread', completed: false },
])

const modal = ref()
const item = ref(new Grocery('', false))

const addItem = () => {
  if (item.value?.name) {
    items.unshift(new Grocery(item.value.name, item.value.recurring as boolean))
    item.value.name = ''
    item.value.recurring = false
  }
  modal.value.$el.dismiss()
}

const deleteItem = (item: any) => {
  items.splice(items.indexOf(item), 1)
}

const complete = (item: any) => {
  console.log(item)
  item.completed = !item.completed
}

const cancel = () => modal.value.$el.dismiss(null, 'cancel')
</script>

<style scoped>
.completed {
  @apply line-through text-slate-500;
}
</style>
