<script setup>
const props = defineProps({
  elements: {
    type: Array,
    default: null,
  },
})
</script>

<template>
  <VTable>
    <thead>
      <tr>
        <th
          v-for="item in elements.heads"
          :key="item.value"
          class="text-center"
        >
          {{ item.value }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in elements.data"
        :key="item.dessert"
      >
        <td>{{ item.dessert }}</td>
        <td class="text-center">
          {{ item.calories }}
        </td>
        <td class="text-center">
          {{ item.fat }}
        </td>
        <td class="text-center">
          {{ item.carbs }}
        </td>
        <td class="text-center">
          {{ item.protein }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
