<template>
  <ion-list v-if="items.length > 0" :inset="true">
    <ion-item v-for="item in items" :key="item.name">
      <div class="flex justify-between items-center px-4 w-full">
        <div class="flex justify-between w-full">
          <div class="flex w-full" @click="item.completed = !item.completed">
            <div v-if="item.recurring" class="mt-1 text-slate-500">
              <mdicon name="refresh" size="16" />
            </div>
            <div class="flex-col" :class="{ completed: item.completed }">
              <div class="ml-2" :class="{ left: !item.recurring }">
                <div class="capitalize">
                  {{ item.name }}
                </div>
                <div class="text-xs italic text-slate-400">
                  {{ departments.find((d) => d.id === item.departmentId)?.name }}
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <div v-if="item.completed && !item.recurring" class="">
              <mdicon
                name="arrow-up-bold"
                class="text-slate-400"
                size="20"
                @click="item.completed = !item.completed" />
            </div>
            <div v-else class="mt-2">
              <ion-checkbox v-model="item.completed" />
            </div>
            <div class="ml-4" @click="confirmRemove(item)">
              <mdicon name="trash-can-outline" size="18" class="text-red-700" />
            </div>
          </div>
        </div>
      </div>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
import { showDialog } from '@/composables/confirmDialog'
import { IonList, IonItem, IonCheckbox } from '@ionic/vue'
import departments from '@/stores/departments.json'

const emit = defineEmits(['remove'])

defineProps(['items'])

const confirmRemove = async (item: any) => {
  showDialog(
    'Confirm Delete',
    'Are you sure you want to delete this item?',
    'DELETE',
    (res: boolean) => {
      if (res) {
        console.log(item)
        emit('remove', item)
      }
    }
  )
}
</script>

<style scoped>
.completed {
  @apply line-through text-slate-500;
}

.left {
  @apply ml-[24px];
}
</style>
