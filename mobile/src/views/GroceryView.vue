<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="primary" class="mr-2 flex">
          <ion-button id="open-modal" expand="block" class="-mr-3">
            <mdicon name="plus-circle-outline" />
          </ion-button>
          <ion-button @click="confirmReset">
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
              <ion-button class="text-green-600" :strong="true" @click="addItem()">Add</ion-button>
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
      <item-list :items="items.filter((i) => i.recurring || !i.completed)" @remove="remove" />
      <item-list :items="items.filter((i) => !i.recurring && i.completed)" @remove="remove" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
import { Grocery } from '@/models/Grocery'
// import ConfirmDialog from '@/components/ConfirmDialog.vue'
import { showDialog } from '@/composables/confirmDialog'
import ItemList from '@/components/ItemList.vue'
import grocerySeed from '@/models/GrocerySeed.json'
import {
  IonButton,
  IonButtons,
  IonModal,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonCheckbox,
} from '@ionic/vue'

const items: Grocery[] | null = reactive([])
const modal = ref()
const item = ref(new Grocery('', false))

const addItem = () => {
  if (item.value?.name) {
    items.push(new Grocery(item.value.name, item.value.recurring))
    item.value.name = ''
    item.value.recurring = false
  }
  modal.value.$el.dismiss()
}

const confirmReset = async () => {
  showDialog(
    'Confirm Reset',
    'Are you sure you want to reset the shopping list?',
    'RESET',
    (res: boolean) => {
      if (res) reset()
    }
  )
}

const reset = () => {
  // TODO: make not ugly
  items.map((i) => {
    if (i.recurring) {
      i.completed = false
    }

    if (!i.recurring) {
      i.completed = true
    }
  })
}

const remove = (item: Grocery) => {
  items.splice(items.indexOf(item), 1)
}

const cancel = () => modal.value.$el.dismiss(null, 'cancel')

watch(
  items,
  (changed) => {
    Grocery.save('groceries', changed)
  },
  { deep: true }
)

onMounted(() => {
  if (!localStorage.getItem('groceries')) {
    localStorage.setItem('groceries', JSON.stringify(grocerySeed))
  }

  items.push(...(JSON.parse(localStorage.getItem('groceries') as any) as Grocery[]))
})
</script>

<style scoped></style>
