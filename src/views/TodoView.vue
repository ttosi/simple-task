<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Todos</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Todos</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid>
        <ion-row>
          <ion-col style="width: 50%"><todo-card /></ion-col>
          <ion-col><todo-card /></ion-col>
        </ion-row>
        <ion-row>
          <ion-col><todo-card /></ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { TodoCard } from '@/components'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCol,
  IonGrid,
  IonRow,
} from '@ionic/vue'
// import { Todo } from '@/models/Todo'
</script>
