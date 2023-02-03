<script setup>
import TableBasic from '@/views/user-interface/tables/TableBasic.vue'
import TableDark from '@/views/user-interface/tables/TableDark.vue'
import TableDensity from '@/views/user-interface/tables/TableDensity.vue'
import TableHeight from '@/views/user-interface/tables/TableHeight.vue'
import TableFixedHeader from '@/views/user-interface/tables/TableFixedHeader.vue'
import { onMounted, ref } from 'vue'
import Admin from "../services/adminServices/AdminService"

const data = ref()

onMounted(() => {
  Admin.getUnregisteredUsers().then(result => {
    result.heads.push("Action")
    data.value = result
  })
})
</script>

<template>
  <VRow>
    <!-- basic -->
    <VCol cols="12">
      <VCard title="Registration Requests">
        <TableBasic
          v-if="data"
          :elements="data"
        />
      </VCard>
    </VCol>
  </VRow>
</template>
