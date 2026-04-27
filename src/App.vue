<template>
  <div class="app-root">
    <ScrollProgress />
    <CursorFollower />
    
    <nav :class="['main-nav', { scrolled: scrolled }]">
      <div class="container nav-content">
        <router-link
          to="/"
          class="brand"
        >
          <div class="brand-icon"></div>
          <span>LUMINA</span>
        </router-link>
        <div class="nav-links">
          <router-link to="/innovation">核心創新</router-link>
          <router-link to="/design">設計理念</router-link>
          <router-link to="/environment">環保承諾</router-link>
          <router-link to="/specs">產品規格</router-link>
        </div>
        <button class="nav-cta">聯絡我們</button>
      </div>
    </nav>
    
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
import { ref, onMounted } from "vue";
import Footer from "./components/Footer.vue";
import ScrollProgress from "./components/ScrollProgress.vue";
import CursorFollower from "./components/CursorFollower.vue";

const scrolled = ref(false);

onMounted(() => {
  window.addEventListener(
    "scroll",
    () => (scrolled.value = window.scrollY > 30),
  );
});
</script>

<style scoped>
.main-nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  z-index: 1000;
  transition: 0.3s;
  background: transparent;
}

.main-nav.scrolled {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid var(--border);
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #000;
  font-weight: 800;
  font-size: 20px;
  transition: 0.3s;
}

.brand:hover {
  color: var(--accent);
}

.brand-icon {
  width: 16px;
  height: 16px;
  background: var(--grad-blue);
  border-radius: 4px;
  transform: rotate(45deg);
}

.nav-links {
  display: flex;
  gap: 0;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-secondary);
  padding: 8px 18px;
  font-size: 14px;
  font-weight: 500;
  transition: 0.2s;
  border-radius: 20px;
}

.nav-links a:hover {
  color: var(--accent);
  background: rgba(0, 102, 204, 0.1);
}

.nav-cta {
  background: #000;
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.nav-cta:hover {
  background: var(--accent);
  transform: translateY(-2px);
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
