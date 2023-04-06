<script setup>
const props = defineProps({
  elements: {
    type: Array,
    default: null,
  },
})
defineEmits(['approveRequest'])
</script>

<template>
  <VTable>
    <thead>
      <tr>
        <th class="text-center">
          Id
        </th>
        <th class="text-center">
          Name
        </th>
        <th class="text-center">
          Dscription
        </th>
        <th class="text-center">
          Rating
        </th>
        <th class="text-center">
          UserId
        </th>
        <th class="text-center">
          IsApproved
        </th>
        <th class="text-center">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in elements"
        :key="item.id"
      >
        <td class="text-center">
          {{ item.id }}
        </td>
        <td class="text-center">
          {{ item.name }}
        </td>
        <td class="text-center">
          {{ item.description }}
        </td>
        <td class="text-center">
          {{ item.rating }}
        </td>
        <td class="text-center">
          {{ item.userId }}
        </td>
        <td class="text-center">
          {{ item.isApproved }}
        </td>
        <td class="text-center">
          <VBtn
            variant="outlined"
            color="success"
            @click="$emit('approveRequest', item.id)"
          >
            Approve
          </VBtn>
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
