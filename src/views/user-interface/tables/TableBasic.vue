<script setup>
const props = defineProps({
  elements: {
    type: Object,
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
          {{ item }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in elements.data"
        :key="item.email"
      >
        <td class="text-center">
          {{ item.id }}
        </td>
        <td class="text-center">
          {{ item.name }}
        </td>
        <td class="text-center">
          {{ item.surname }}
        </td>
        <td class="text-center">
          {{ item.company }}
        </td>
        <td class="text-center">
          {{ item.email }}
        </td>
        <td class="text-center">
          {{ String(item.role) }}
        </td>
        <td class="text-center">
          <VBtn
            variant="outlined"
            color="success"
          >
            {{ item.buttonMsg }}
          </VBtn>
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
