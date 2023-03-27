<script setup>
import DrawerContent from './DrawerContent.vue'
import { VerticalNavLayout } from '@layouts'
import { useStore } from "vuex"

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
import { computed, onMounted, ref, watch } from 'vue'

const snackbar = ref(false)
const store = useStore()

const isLoggedIn = computed(() => store.state.auth.status.loggedIn)
const notifications = computed(() => store.getters["signalr/GetNotifications"])

onMounted(() => {
  if (isLoggedIn.value) {
    store.dispatch('signalr/createConnection')
  }
})

const calcMargin = index => {
  return `bottom: ${index * 50}px`
}
</script>

<template>
  <VerticalNavLayout>
    <!-- 👉 navbar -->
    <template #navbar>
      <VTextField
        rounded
        prepend-inner-icon="mdi-magnify"
        density="compact"
        max-width="100px"
        class="app-bar-search d-none d-sm-block"
      />

      <VSpacer />

      <a
        href="https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free"
        target="_blank"
        rel="noopener noreferrer"
        style="color: inherit"
      >
        <VIcon
          class="ms-6 me-4"
          icon="mdi-github"
        />
      </a>
      <NavbarThemeSwitcher />
      <VBtn
        icon
        variant="text"
        color="default"
        class="me-2"
        size="small"
      >
        <VIcon
          icon="mdi-bell-outline"
          size="24"
        />
      </VBtn>
      <div v-if="isLoggedIn">
        <UserProfile />
      </div>
      <div v-if="!isLoggedIn">
        <RouterLink to="/login">
          Login
        </RouterLink>
      </div>
    </template>

    <!-- 👉 Drawer content -->
    <template #navigation-drawer-content>
      <DrawerContent />
    </template>

    <!-- 👉 Pages -->
    <div class="layout-page-content">
      <RouterView />
    </div>

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>


    <template #notifications>
      <VSnackbar
        v-for="(notification, i) in notifications.filter(n => n.showing)"
        :key="i"
        v-model="notification.showing"
        :style="calcMargin(i)"
        :timeout="3000"
        location="top right"
      >
        {{ notification.message }}

        <template #actions>
          <VBtn
            color="blue"
            variant="text"
            @click="notification.showing = false"
          >
            Close
          </VBtn>
        </template>
      </VSnackbar>
    </template>
  </VerticalNavLayout>
</template>

<style lang="scss">
.app-bar-search {
  .v-input__control {
    width: 236px
  }

  .v-field__outline__start {
    border-radius: 28px 0 0 28px !important;
    flex-basis: 20px !important;
  }

  .v-field__outline__end {
    border-radius: 0 28px 28px 0 !important;
  }
}
</style>
