<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="primary" class="mr-2 flex">
          <ion-button id="modal-add-grocery" expand="block" class="-mr-3">
            <mdicon name="plus-circle-outline" />
          </ion-button>
          <ion-button @click="confirmReset">
            <mdicon name="refresh" />
          </ion-button>
          <ion-button @click="confirmReset">
            <mdicon name="tune-variant" />
          </ion-button>
        </ion-buttons>
        <ion-title>Groceries</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-modal ref="groceryModal" trigger="modal-add-grocery">
        <ion-header>
          <ion-toolbar>
            <ion-title>Add Grocery</ion-title>
            <ion-buttons slot="end">
              <ion-button class="text-green-500" @click="addItem()">Save</ion-button>
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
                v-model="grocery.name"
                label="Item"
                label-placement="floating"
                fill="outline"
                placeholder="Enter Item"
                :counter="true"
                :maxlength="25" />
            </div>
            <div class="mb-5">
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
            </div>
          </div>
        </ion-content>
      </ion-modal>
      <item-list
        :items="sorted.filter((i) => i.recurring || !i.completed)"
        :component="GroceryItem"
        @remove="remove" />
      <item-list
        :items="sorted.filter((i) => !i.recurring && i.completed)"
        :component="GroceryItem"
        @remove="remove" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watch, computed } from 'vue'
import { Grocery } from '@/models/Grocery'
import { GroceryItem } from '@/components'
import { showDialog } from '@/composables/confirmDialog'
import ItemList from '@/components/GroceryItems.vue'
import departments from '@/seeds/departments.json'
import grocerySeed from '@/seeds/groceries.json'
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
  IonSelect,
  IonSelectOption,
} from '@ionic/vue'

const groceries: Grocery[] | null = reactive([])
const groceryModal = ref()
const grocery = ref(new Grocery('', 0, false))

const sorted = computed(() => {
  return groceries
    .sort((a, b) => a.name.localeCompare(b.name))
    .sort((a, b) => a.departmentId - b.departmentId)
})

const addItem = () => {
  if (grocery.value?.name) {
    groceries.push(
      new Grocery(grocery.value.name, grocery.value.departmentId, grocery.value.recurring)
    )

    grocery.value.name = ''
    grocery.value.departmentId = 0
    grocery.value.recurring = false
  }
  groceryModal.value.$el.dismiss()
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
  groceries.map((i) => {
    if (i.recurring) {
      i.completed = false
    }

    if (!i.recurring) {
      i.completed = true
    }
  })
}

const remove = (item: Grocery) => {
  groceries.splice(groceries.indexOf(item), 1)
}

const cancel = () => groceryModal.value.$el.dismiss(null, 'cancel')

watch(
  groceries,
  (changed) => {
    Grocery.save('groceries', changed)
  },
  { deep: true }
)

onMounted(() => {
  if (!localStorage.getItem('groceries')) {
    localStorage.setItem('groceries', JSON.stringify(grocerySeed))
  }
  groceries.push(...(JSON.parse(localStorage.getItem('groceries') as any) as Grocery[]))
})
</script>

<style scoped></style>
