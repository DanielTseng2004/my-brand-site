<template>
  <div class="cursor-follower" :style="{ left: cursorX + 'px', top: cursorY + 'px' }"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const cursorX = ref(0);
const cursorY = ref(0);

const handleMouseMove = (e: MouseEvent) => {
  cursorX.value = e.clientX - 10;
  cursorY.value = e.clientY - 10;
};

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
});
</script>

<style scoped>
.cursor-follower {
  position: fixed;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(0, 102, 204, 0.5);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  box-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
  transition: all 0.1s ease-out;
}
</style>
