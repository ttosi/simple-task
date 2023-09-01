<template>
  <div class="flex">
    <div v-if="item.recurring" class="mt-1 text-slate-500">
      <mdicon name="refresh" size="16" />
    </div>
    <div class="flex-col" :class="{ completed: item.completed }">
      <div class="ml-2" :class="{ left: !item.recurring }">
        <div class="capitalize">{{ item.name }}</div>
        <div class="text-xs italic text-slate-400">
          {{ departments.find((d) => d.id === item.departmentId)?.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import departments from '@/stores/departments.json'

defineProps(['item'])
</script>

<style scoped></style>
