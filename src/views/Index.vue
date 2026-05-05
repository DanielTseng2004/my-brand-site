<template>
  <div
    class="index-page"
    ref="container"
  >
    <!-- 背景流體裝飾 -->
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>

    <!-- Hero Section: 套用 v-motion 進場動畫 -->
    <section class="hero container">
      <div
        class="hero-content"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
      >
        <div class="badge">次世代光子技術</div>
        <h1>
          智能光子<br />
          <span class="text-gradient">無限可能</span>
        </h1>
        <p class="hero-sub">
          LUMINA Nexus 是革命性的光子處理平台，結合先進的量子感測與 6G
          連接技術，為您的未來賦能。
        </p>
        <div class="hero-btns">
          <button
            class="btn-primary"
            @click="handleExplore"
          >
            探索 Nexus Pro
          </button>
          <button class="btn-text">觀看演示 <span>→</span></button>
        </div>
      </div>

      <!-- 效能數據卡片：使用 GSAP 數字跳動 -->
      <div class="hero-data">
        <div
          class="data-card glass"
          v-motion-roll-visible-right
        >
          <span class="val">{{ stats.latency }}ms</span>
          <span class="lab">超低延遲</span>
        </div>
        <div
          class="data-card glass"
          v-motion-roll-visible-right
        >
          <span class="val">{{ stats.efficiency }}%</span>
          <span class="lab">能源效率</span>
        </div>
      </div>
    </section>

    <!-- 核心優勢：套用 v-motion-slide-visible-bottom 滾動觸發 -->
    <section class="advantages">
      <div class="container">
        <div class="section-header">
          <span class="label">核心優勢</span>
          <h2>為什麼選擇 LUMINA</h2>
        </div>
        <div class="advantages-grid">
          <div
            v-for="(adv, index) in advantageList"
            :key="index"
            class="advantage-card glass"
            v-motion-slide-visible-bottom
            :delay="index * 100"
          >
            <div class="icon">{{ adv.icon }}</div>
            <h3>{{ adv.title }}</h3>
            <p>{{ adv.desc }}</p>
            <div class="metric">{{ adv.metric }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 購物車預覽（參考 source 2 的互動邏輯） -->
    <div
      class="cart-status glass"
      v-if="cartCount > 0"
      v-motion-slide-right
    >
      🛒 已預約 {{ cartCount }} 台 Nexus
      <button class="checkout-btn">立即預訂</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { gsap } from "gsap";

const cartCount = ref(0);

const stats = reactive({
  latency: 0.1,
  efficiency: 0,
});

const advantageList = [
  {
    icon: "⚡",
    title: "極速性能",
    desc: "業界領先的處理速度，0.01ms 超低延遲",
    metric: "800% 更快",
  },
  {
    icon: "🔋",
    title: "能源高效",
    desc: "降低功耗 95%，延長使用壽命",
    metric: "0.5W 功耗",
  },
  {
    icon: "🛡️",
    title: "量子安全",
    desc: "採用量子加密技術，提供軍事級別保護",
    metric: "256-bit 加密",
  },
  {
    icon: "🌍",
    title: "環保永續",
    desc: "100% 可回收材料，碳中和製造",
    metric: "ISO 14001",
  },
];

// 初始化數字跳動動畫
onMounted(() => {
  gsap.to(stats, {
    duration: 2,
    latency: 0.01,
    efficiency: 100,
    ease: "power2.out",
  });
});

const handleExplore = (event: MouseEvent) => {
  cartCount.value++;
  const el = event.currentTarget as HTMLElement;
  // GSAP 點擊回饋動畫
  gsap.to(el, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 });
};
</script>

<style scoped>
.index-page {
  position: relative;
  padding-top: 120px;
  overflow: hidden;
  background: var(--bg-main);
  color: var(--text-primary);
}

.text-gradient {
  background: var(--grad-blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80vh;
  gap: 60px;
}

.hero-content {
  flex: 1;
}

.badge {
  display: inline-block;
  background: var(--accent-soft);
  color: var(--accent);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
  border: 1px solid var(--border);
}

.hero-sub {
  font-size: 18px;
  color: var(--text-secondary);
  margin: 20px 0;
  line-height: 1.6;
}

.hero-btns {
  display: flex;
  gap: 16px;
  margin-top: 30px;
}

.btn-primary {
  background: var(--accent);
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 102, 204, 0.3);
}

.btn-primary:active {
  transform: scale(0.98);
}

.btn-text {
  background: transparent;
  color: var(--accent);
  border: 1px solid var(--border);
  padding: 14px 32px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-text:hover {
  background: var(--accent-soft);
  border-color: var(--accent);
  transform: translateY(-2px);
}

.hero-data {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
}

.data-card {
  padding: 30px;
  border-radius: 24px;
  text-align: center;
  min-width: 180px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
}

.data-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.val {
  display: block;
  font-size: 32px;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 8px;
}

.lab {
  display: block;
  font-size: 14px;
  color: var(--text-secondary);
  font-weight: 500;
}

/* 核心優勢區段 */
.advantages {
  padding: 100px 0;
  background: var(--bg-main);
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.label {
  display: inline-block;
  background: var(--accent-soft);
  color: var(--accent);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
  border: 1px solid var(--border);
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.advantage-card {
  padding: 40px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  text-align: center;
}

.advantage-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent);
}

.icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.advantage-card h3 {
  margin-bottom: 12px;
  color: var(--text-primary);
}

.advantage-card p {
  color: var(--text-secondary);
  margin-bottom: 16px;
  font-size: 14px;
}

.metric {
  display: inline-block;
  background: var(--accent-soft);
  color: var(--accent);
  padding: 8px 16px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 600;
  border: 1px solid rgba(0, 102, 204, 0.2);
}

/* 購物車狀態 */
.cart-status {
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 20px 30px;
  border-radius: 40px;
  background: var(--bg-main);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: var(--shadow-lg);
  z-index: 100;
  border: 1px solid var(--border);
  color: var(--text-primary);
}

.checkout-btn {
  background: var(--accent);
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  transition: all var(--transition-normal);
}

.checkout-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
}

/* 裝飾背景 */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  z-index: -1;
  opacity: 0.15;
}

.blob-1 {
  width: 500px;
  height: 500px;
  background: var(--accent);
  top: -100px;
  right: -100px;
}

.blob-2 {
  width: 600px;
  height: 600px;
  background: var(--accent);
  bottom: 10%;
  left: -200px;
}

.dark .blob-1,
.dark .blob-2 {
  opacity: 0.08;
}

/* 深色模式 */
.dark .data-card {
  background: rgba(30, 41, 59, 0.7);
  border-color: rgba(255, 255, 255, 0.1);
}

.dark .advantage-card {
  background: rgba(30, 41, 59, 0.7);
  border-color: rgba(255, 255, 255, 0.1);
}

.dark .advantage-card:hover {
  border-color: var(--accent);
}

.dark .metric {
  background: rgba(56, 189, 248, 0.1);
  color: var(--accent);
  border-color: rgba(56, 189, 248, 0.2);
}

.dark .checkout-btn:hover {
  box-shadow: 0 4px 12px rgba(56, 189, 248, 0.3);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }

  h1 {
    font-size: 48px;
  }

  .hero-btns {
    flex-direction: column;
    width: 100%;
  }

  .btn-primary,
  .btn-text {
    width: 100%;
  }

  .advantages-grid {
    grid-template-columns: 1fr;
  }

  .cart-status {
    bottom: 20px;
    right: 20px;
    left: 20px;
    flex-direction: column;
  }
}
</style>
