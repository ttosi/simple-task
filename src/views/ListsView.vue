<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="primary" class="mr-2 flex">
          <ion-button id="modal-add-list" expand="block" class="-mr-3">
            <mdicon name="plus-circle-outline" />
          </ion-button>
        </ion-buttons>
        <ion-title>Lists</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-modal ref="listssModal" trigger="modal-add-lists">
        <ion-header>
          <ion-toolbar>
            <ion-title>Add List</ion-title>
            <ion-buttons slot="end">
              <ion-button class="text-green-500" @click="addList()">Save</ion-button>
            </ion-buttons>
            <ion-buttons slot="end">
              <ion-button class="text-red-700" @click="cancel()">Cancel</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <div class="p-4">
            <div>
              <ion-input
                label-placement="floating"
                fill="outline"
                label="List Name"
                :counter="true"
                :maxlength="50" />
            </div>
            <!--  <div class="mb-5">
              <ion-select
                v-model="grocery.departmentId"
                interface="action-sheet"
                label="Select Department"
                fill="outline"
                :value="0">
                <ion-select-option
                  v-for="department in departments"
                  :key="department.id"
                  :value="department.id">
                  {{ department.name }}
                </ion-select-option>
              </ion-select>
            </div>
            <div class="ml-1">
              <ion-checkbox v-model="grocery.recurring" labelPlacement="end">
                Recurring
              </ion-checkbox>
            </div> -->
          </div>
        </ion-content>
      </ion-modal>
      <ion-grid>
        <ion-row v-for="(list, index) in lists" :key="index">
          <ion-col>
            <list-card id="modal-add-items" expand="block" :list="list" @click="open" />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { Lists } from '@/models/Lists'
import { ListCard, ItemList } from '@/components'
import listsSeed from '@/seeds/lists.json'
import {
  IonPage,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/vue'

const lists: Lists[] | null = reactive([])
const listModal = ref()

const open = () => {
  console.log('open')
}

const addList = () => {
  listModal.value.$el.dismiss()
}

const cancel = () => listModal.value.$el.dismiss(null, 'cancel')

onMounted(() => {
  if (!localStorage.getItem('lists')) {
    localStorage.setItem('lists', JSON.stringify(listsSeed))
  }
  lists.push(...(JSON.parse(localStorage.getItem('lists') as any) as Lists[]))
})
</script>
