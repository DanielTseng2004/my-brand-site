<template>
  <div class="scroll-progress">
    <div class="progress-bar" :style="{ width: scrollProgress + '%' }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const scrollProgress = ref(0);

const updateProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgress.value = scrolled;
};

onMounted(() => {
  window.addEventListener("scroll", updateProgress);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateProgress);
});
</script>

<style scoped>
.scroll-progress {
  position: fixed;
  top: 64px;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--border);
  z-index: 999;
}

.progress-bar {
  height: 100%;
  background: var(--grad-blue);
  width: 0%;
  transition: width 0.1s ease-out;
  box-shadow: 0 0 10px rgba(0, 102, 204, 0.3);
}

.dark .progress-bar {
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.3);
}
</style>
