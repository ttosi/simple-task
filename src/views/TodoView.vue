<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="primary" class="mr-2 flex">
          <ion-button id="open-modal" expand="block" class="-mr-3">
            <mdicon name="plus-circle-outline" />
          </ion-button>
        </ion-buttons>
        <ion-title>Todos</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row v-for="todo in todos" :key="todo.name">
          <ion-col>
            <todo-card :todo="todo" />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { Todos } from '@/models/Todos'
import { TodoCard } from '@/components'
import todosSeed from '@/seeds/todos.json'
import {
  IonPage,
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

const todos: Todos[] | null = reactive([])

onMounted(() => {
  if (!localStorage.getItem('todos')) {
    localStorage.setItem('todos', JSON.stringify(todosSeed))
  }

  const t = JSON.parse(localStorage.getItem('todos') as any) as Todos[]
  // console.log(t)
  for (const xxx of t) {
    console.log(xxx.title)
  }

  // todos.push(...(JSON.parse(localStorage.getItem('todos') as any) as Todos[]))
  // console.log(todos)
})
</script>
