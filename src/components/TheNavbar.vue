<template>
  <nav
    :class="['nav', { 'is-scrolled': isScrolled }]"
    role="navigation"
  >
    <div class="nav-inner">
      <!-- Logo -->
      <router-link
        to="/"
        class="logo"
      >
        <div class="logo-icon"></div>
        <span>LUMINA</span>
      </router-link>

      <!-- Navigation Links with Radix Vue Dropdown -->
      <div class="links">
        <!-- 分類 1: 產品中心 -->
        <DropdownMenuRoot>
          <DropdownMenuTrigger class="dropdown-label">
            產品中心
            <ChevronDown :size="16" />
          </DropdownMenuTrigger>
          <DropdownMenuPortal>
            <DropdownMenuContent
              :side="'bottom'"
              :align="'start'"
              :side-offset="5"
              class="dropdown-content"
            >
              <DropdownMenuItem as-child>
                <router-link to="/products">所有產品</router-link>
              </DropdownMenuItem>
              <DropdownMenuItem as-child>
                <router-link to="/ecosystem">配件與擴充</router-link>
              </DropdownMenuItem>
              <DropdownMenuItem as-child>
                <router-link to="/specs">核心規格</router-link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuPortal>
        </DropdownMenuRoot>

        <!-- 分類 2: 核心技術 -->
        <DropdownMenuRoot>
          <DropdownMenuTrigger class="dropdown-label">
            核心技術
            <ChevronDown :size="16" />
          </DropdownMenuTrigger>
          <DropdownMenuPortal>
            <DropdownMenuContent
              :side="'bottom'"
              :align="'start'"
              :side-offset="5"
              class="dropdown-content"
            >
              <DropdownMenuItem as-child>
                <router-link to="/innovation">創新突破</router-link>
              </DropdownMenuItem>
              <DropdownMenuItem as-child>
                <router-link to="/design">工業美學</router-link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuPortal>
        </DropdownMenuRoot>

        <!-- 分類 3: 探索體驗 -->
        <DropdownMenuRoot>
          <DropdownMenuTrigger class="dropdown-label">
            探索體驗
            <ChevronDown :size="16" />
          </DropdownMenuTrigger>
          <DropdownMenuPortal>
            <DropdownMenuContent
              :side="'bottom'"
              :align="'start'"
              :side-offset="5"
              class="dropdown-content"
            >
              <DropdownMenuItem as-child>
                <router-link to="/experience">3D 互動體驗</router-link>
              </DropdownMenuItem>
              <DropdownMenuItem as-child>
                <router-link to="/virtual-showroom">虛擬展示廳</router-link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuPortal>
        </DropdownMenuRoot>

        <!-- 分類 4: 永續使命 -->
        <router-link
          to="/environment"
          class="direct-link"
        >
          永續循環
        </router-link>
      </div>

      <!-- Actions -->
      <div class="nav-actions">
        <button class="cta-btn">
          <Zap :size="16" />
          立即配置
        </button>
        <ThemeToggle />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "radix-vue";
import { ChevronDown, Zap } from "lucide-vue-next";
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
/* 基礎導覽樣式 */
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  z-index: 100;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid transparent;
  user-select: none;
  background: transparent;
}

.nav.is-scrolled {
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

/* Logo 樣式 */
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
  color: var(--accent);
  text-decoration: none;
  letter-spacing: 1px;
  transition: var(--transition-normal);
}

.logo:hover {
  transform: scale(1.05);
}

.logo-icon {
  width: 16px;
  height: 16px;
  background: var(--grad-photon);
  border-radius: 4px;
  transform: rotate(45deg);
  box-shadow: 0 0 15px rgba(0, 102, 204, 0.3);
}

/* 導覽連結 */
.links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dropdown-label,
.direct-link {
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  padding: 8px 16px;
  transition: all var(--transition-fast);
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
}

.dropdown-label:hover,
.direct-link:hover,
.router-link-active {
  color: var(--accent);
  background: rgba(0, 102, 204, 0.08);
}

/* Radix Vue Dropdown Content */
.dropdown-content {
  background: var(--bg-main);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  padding: 8px;
  min-width: 200px;
  z-index: 1000;
  outline: none;
}

.dropdown-content a {
  display: flex;
  align-items: center;
  padding: 10px 14px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  border-radius: 8px;
  transition: all var(--transition-fast);
  outline: none;
}

.dropdown-content a:hover {
  background: var(--accent-soft);
  color: var(--accent);
  transform: translateX(4px);
}

/* 操作按鈕 */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.cta-btn {
  background: var(--accent);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 24px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  gap: 8px;
}

.cta-btn:hover {
  transform: scale(1.05) translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 102, 204, 0.3);
}

.cta-btn:active {
  transform: scale(0.98);
}

/* 深色模式 */
.dark .dropdown-content {
  background: var(--bg-main);
  border-color: var(--border);
}

.dark .dropdown-content a {
  color: var(--text-secondary);
}

.dark .dropdown-content a:hover {
  background: rgba(56, 189, 248, 0.1);
  color: var(--accent);
}

/* 響應式設計 */
@media (max-width: 1024px) {
  .dropdown-label,
  .direct-link {
    padding: 8px 12px;
    font-size: 13px;
  }

  .links {
    gap: 4px;
  }
}

@media (max-width: 768px) {
  .nav-inner {
    padding: 0 16px;
  }

  .links {
    display: none;
  }

  .nav-actions {
    gap: 10px;
  }

  .cta-btn {
    padding: 8px 16px;
    font-size: 12px;
  }
}
</style>
