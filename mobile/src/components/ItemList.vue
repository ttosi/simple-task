<template>
  <ion-list v-if="items.length > 0" :inset="true">
    <ion-item v-for="item in items" :key="item.name">
      <div
        class="flex justify-between items-center px-4 w-full"
        @click="item.completed = !item.completed">
        <div class="flex justify-between w-full">
          <div class="flex">
            <div v-if="item.recurring" class="mt-1 text-slate-500">
              <mdicon name="refresh" size="16" />
            </div>
            <div class="ml-2 capitalize" :class="{ completed: item.completed }">
              {{ item.name }}
            </div>
          </div>
          <div class="flex">
            <div v-if="item.completed && !item.recurring">
              <mdicon
                name="arrow-up-bold"
                class="text-slate-400"
                size="20"
                @click="item.completed = true" />
            </div>
            <div v-else>
              <ion-checkbox v-model="item.completed" />
            </div>
            <div class="mt-1 ml-4" @click="$emit('remove', item)">
              <mdicon name="trash-can-outline" size="18" class="text-red-700" />
            </div>
          </div>
        </div>
      </div>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
// import { Grocery } from '@/models/Grocery';
import { IonList, IonItem, IonCheckbox } from '@ionic/vue'

defineProps(['items'])

// const remove = (item: Grocery) => {
//   props.items.splice(props.items.indexOf(item), 1)
// }
</script>

<style scoped>
.completed {
  @apply line-through text-slate-500;
}
</style>
