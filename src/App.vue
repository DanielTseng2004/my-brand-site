<template>
  <div class="app-root">
    <ScrollProgress />
    <CursorFollower />
    
    <TheNavbar />
    
    <router-view v-slot="{ Component }">
      <transition
        name="page"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import TheNavbar from "./components/TheNavbar.vue";
import Footer from "./components/Footer.vue";
import ScrollProgress from "./components/ScrollProgress.vue";
import CursorFollower from "./components/CursorFollower.vue";
</script>

<style scoped>
.app-root {
  min-height: 100vh;
  background: var(--bg-main);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.4s,
    transform 0.4s;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
