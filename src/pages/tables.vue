<script setup>
import TableBasic from '@/views/user-interface/tables/TableBasic.vue'
import TableDark from '@/views/user-interface/tables/TableDark.vue'
import TableDensity from '@/views/user-interface/tables/TableDensity.vue'
import TableHeight from '@/views/user-interface/tables/TableHeight.vue'
import TableFixedHeader from '@/views/user-interface/tables/TableFixedHeader.vue'
import { onMounted, ref } from 'vue'
import Admin from "../services/adminServices/AdminService"

const data = ref()
const array = ref({
  heads: [
    {
      value: "Dessert (100g serving)",
    },
    {
      value: "Calories",
    },
    {
      value: "Fat (g)",
    },
    {
      value: "Carbs (g)",
    },
    {
      value: "Protein (g)",
    },
  ],
  data: [{
    dessert: 'Frozen Yogurt',
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Ice cream sandwich',
    calories: 237,
    fat: 6,
    carbs: 24,
    protein: 4,
  }],
})

onMounted(() => {
  Admin.getUnregisteredUsers().then(result => {
    data.value = result
  })
})
</script>

<template>
  <VRow>
    <!-- basic -->
    <VCol cols="12">
      <VCard title="Basic">
        <TableBasic :elements="array" />
      </VCard>
    </VCol>
  </VRow>
</template>
