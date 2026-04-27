<template>
  <nav :class="['nav', { 'is-scrolled': isScrolled }]">
    <div class="container nav-inner">
      <router-link
        to="/"
        class="logo"
      >
        <div class="logo-icon"></div>
        <span>LUMINA</span>
      </router-link>
      <div class="links">
        <router-link to="/innovation">未來技術</router-link>
        <router-link to="/design">工業美學</router-link>
        <router-link to="/environment">永續循環</router-link>
        <router-link to="/specs">核心規格</router-link>
        <router-link to="/experience">互動體驗</router-link>
      </div>
      <div class="nav-actions">
        <button class="cta-btn">立即配置</button>
        <ThemeToggle />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ThemeToggle from "./ThemeToggle.vue";
const isScrolled = ref(false);
onMounted(() => {
  window.addEventListener("scroll", () => {
    isScrolled.value = window.scrollY > 20;
  });
});
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  z-index: 100;
  transition: all 0.4s;
  border-bottom: 1px solid transparent;
}
.is-scrolled {
  background: var(--nav-bg);
  color: var(--accent);
  backdrop-filter: blur(20px);
  height: 60px;
  border-bottom: 1px solid var(--border);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  color: var(--accent);
  text-decoration: none;
}
.logo-icon {
  width: 16px;
  height: 16px;
  background: var(--grad-photon);
  border-radius: 4px;
  transform: rotate(45deg);
}
.links a {
  margin: 0 20px;
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
}
.links a:hover {
  color: var(--accent);
}
.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
.cta-btn {
  background: var(--accent);
  color: var(--bg-main);
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
}
</style>
