<template>
  <nav :class="['nav', { 'is-scrolled': isScrolled }]">
    <div class="container nav-inner">
      <!-- Logo 區塊 -->
      <router-link
        to="/"
        class="logo"
      >
        <div class="logo-icon"></div>
        <span>LUMINA</span>
      </router-link>

      <!-- 導覽連結區塊 -->
      <div class="links">
        <!-- 分類 1: 產品中心 -->
        <div class="nav-item-dropdown">
          <span class="dropdown-label">產品中心</span>
          <div class="dropdown-content">
            <router-link to="/products">所有產品</router-link>
            <router-link to="/ecosystem">配件與擴充</router-link>
            <router-link to="/specs">核心規格</router-link>
          </div>
        </div>

        <!-- 分類 2: 核心技術 -->
        <div class="nav-item-dropdown">
          <span class="dropdown-label">核心技術</span>
          <div class="dropdown-content">
            <router-link to="/innovation">創新突破</router-link>
            <router-link to="/design">工業美學</router-link>
          </div>
        </div>

        <!-- 分類 3: 探索體驗 -->
        <div class="nav-item-dropdown">
          <span class="dropdown-label">探索體驗</span>
          <div class="dropdown-content">
            <router-link to="/experience">3D 互動體驗</router-link>
            <router-link to="/virtual-showroom">虛擬展示廳</router-link>
          </div>
        </div>

        <!-- 分類 4: 永續使命 -->
        <router-link
          to="/environment"
          class="direct-link"
          >永續循環</router-link
        >
      </div>

      <!-- 操作區塊 -->
      <div class="nav-actions">
        <button class="cta-btn">立即配置</button>
        <ThemeToggle />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import ThemeToggle from "./ThemeToggle.vue";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  z-index: 100;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  color: var(--accent);
  text-decoration: none;
  letter-spacing: 1px;
}

.logo-icon {
  width: 16px;
  height: 16px;
  background: var(--grad-photon);
  border-radius: 4px;
  transform: rotate(45deg);
}

.links {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-item-dropdown {
  position: relative;
  padding: 10px 0;
}

.dropdown-label,
.direct-link {
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  padding: 8px 15px;
  transition: color 0.3s;
  cursor: pointer;
}

.dropdown-label:hover,
.direct-link:hover,
.router-link-active {
  color: var(--accent);
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--nav-bg);
  min-width: 180px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border);
  backdrop-filter: blur(20px);
  padding: 8px;
  overflow: hidden;
}

.dropdown-content a {
  display: block;
  padding: 12px 16px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 13px;
  border-radius: 8px;
  transition: all 0.2s;
}

.dropdown-content a:hover {
  background: rgba(var(--accent-rgb), 0.1);
  color: var(--accent);
  padding-left: 20px;
}

.nav-item-dropdown:hover .dropdown-content {
  display: block;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translate(-50%, 10px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
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
  transition: transform 0.2s;
}

.cta-btn:hover {
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  .dropdown-label,
  .direct-link {
    padding: 8px 10px;
    font-size: 13px;
  }
}
</style>
