<script setup>
import TableBasicProducts from '@/views/user-interface/tables/TableBasicProducts.vue'
import TableDark from '@/views/user-interface/tables/TableDark.vue'
import TableDensity from '@/views/user-interface/tables/TableDensity.vue'
import TableHeight from '@/views/user-interface/tables/TableHeight.vue'
import TableFixedHeader from '@/views/user-interface/tables/TableFixedHeader.vue'
import { onMounted, ref, watch } from 'vue'
import Admin from "../services/adminServices/AdminService"
import { useStore } from 'vuex'

const store = useStore()
const data = ref()
const notification = ref({
  showing: false,
  message: null,
  color: null,
})

const notifications = computed(() => store.getters["signalr/GetNotifications"])

watch(notifications, () => {
  fetchProducts()
})
onMounted(() => {
  fetchProducts()
})

const fetchProducts = () => {
  Admin.getUnapprovedProducts().then(result => {
    data.value = result
  })
}

const approveProduct = productId => {
  Admin.approveProduct(productId).then(result => {
    notification.value.color = "success"
    notification.value.message = "Successfully approved!"
    fetchProducts()
  }, error => {
    notification.value.color = "error"
    notification.value.message = error.message
  }).then(() => {
    notification.value.showing = true
  })
}
</script>

<template>
  <VRow>
    <!-- basic -->
    <VCol cols="12">
      <VCard title="Products Requests">
        <TableBasicProducts
          v-if="data"
          :elements="data"
          @approve-request="approveProduct"
        />
      </VCard>
    </VCol>
  </VRow>
  <VSnackbar
    v-model="notification.showing"
    :color="notification.color"
  >
    {{ notification.message }}
    <template #actions>
      <VBtn
        color="white"
        variant="text"
        @click="notification.showing = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
