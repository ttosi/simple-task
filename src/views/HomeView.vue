<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="groceries" href="/tabs/groceries">
          <mdicon name="cart" />
          <ion-label>Groceries</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="lists" href="/tabs/lists">
          <mdicon name="check-decagram-outline" />
          <ion-label>Lists</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="notes" href="/tabs/notes">
          <mdicon name="note-multiple-outline" />
          <ion-label>Notes</ion-label>
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
