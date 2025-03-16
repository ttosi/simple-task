<template>
  <div>
    <ion-card class="ion-activatable ripple-parent">
      <ion-card-header>
        <ion-card-title class="flex justify-between">
          <div>{{ list.title }}</div>
          <div class="font-normal text-sm italic">
            {{ useDateFormat(list.created, 'MM/DD/YYYY').value }}
          </div>
        </ion-card-title>
        <ion-card-subtitle class="italic flex justify-between">
          <div>
            {{ list.items.filter((i: Item) => i.completed === true).length }} of
            {{ list.items.length }} tasks completed
          </div>
          <!-- <div>
            <ion-button fill="clear" class="p-0 m-0`">
              <mdicon name="trash-can-outline" size="18" class="text-red-700 p-0 m-0" />
            </ion-button>
          </div> -->
        </ion-card-subtitle>
      </ion-card-header>
      <div class="flex justify-end">
        <!-- <ion-button fill="clear">
          <mdicon name="trash-can-outline" size="18" class="text-red-700" />
        </ion-button> -->
        <!-- <ion-button fill="clear">Action 2</ion-button> -->
      </div>
      <ion-ripple-effect></ion-ripple-effect>
    </ion-card>
  </div>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonRippleEffect,
  IonButton,
} from '@ionic/vue'
import { useDateFormat } from '@vueuse/core'
import { Item } from '@/models/Item'

defineProps(['list'])
</script>

<style scoped></style>
