<template>
  <div>
    <ion-card class="ion-activatable ripple-parent" @click="test">
      <ion-card-header>
        <ion-card-title>{{ todo.title }}</ion-card-title>
        <ion-card-subtitle class="italic">
          {{ useDateFormat(todo.created, 'YYYY-MM-DD').value }}
        </ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>Todos: {{ todo.items.length }}</ion-card-content>
      <!-- <div v-for="todo in todo.items" :key="todo.name">
        {{ todo }}
      </div> -->
      <ion-ripple-effect></ion-ripple-effect>
    </ion-card>
  </div>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonRippleEffect,
} from '@ionic/vue'
import { useDateFormat } from '@vueuse/core'

defineProps(['todo'])

const test = () => {
  console.log('woot')
}
</script>

<style scoped></style>
