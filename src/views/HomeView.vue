<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="groceries" href="/tabs/groceries">
          <mdicon name="cart" />
          <ion-label>Groceries</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="todos" href="/tabs/todos">
          <mdicon name="head-check" />
          <ion-label>Todos</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="goals" href="/tabs/goals">
          <mdicon name="flag-checkered" />
          <ion-label>Goals</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonPage, IonRouterOutlet } from '@ionic/vue'
</script>
