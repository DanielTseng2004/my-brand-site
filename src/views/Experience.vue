<template>
  <div class="experience-view">
    <section class="hero container">
      <div class="hero-content">
        <span class="label">互動體驗</span>
        <h1 class="decode-title">{{ decodedTitle }}</h1>
        <p class="decode-text">{{ decodedHeroText }}</p>
      </div>
    </section>

    <!-- NEW: 3D Draggable Card Section -->
    <section class="draggable-section container">
      <div class="section-header">
        <h2>3D 觸感體驗</h2>
        <p>按住並拖動下方的卡片，從不同角度探索光子結構</p>
      </div>
      <div
        class="drag-container"
        @mousedown="startDrag"
        @touchstart="startDrag"
        @mousemove="onDrag"
        @touchmove="onDrag"
        @mouseup="stopDrag"
        @mouseleave="stopDrag"
        @touchend="stopDrag"
      >
        <div
          class="card-3d"
          :style="cardStyle"
        >
          <div class="card-face front">
            <div class="card-logo">LUMINA</div>
            <div class="card-chip"></div>
            <div class="card-number">NEXUS S3 PRO</div>
          </div>
          <div class="card-face back">
            <div class="back-content">
              <p>QUANTUM ENCRYPTION ENABLED</p>
              <div class="qr-code"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3D Exploded View Simulator -->
    <section class="exploded-view container">
      <div class="view-card glass">
        <div class="view-header">
          <h2>核心架構拆解</h2>
          <p>拖動滑桿以查看 LUMINA Nexus 的內部構造</p>
        </div>
        <div class="view-stage">
          <div
            class="component shell"
            :style="getExplodedStyle(0)"
          >
            <div class="comp-label">航空級鋁合金外殼</div>
          </div>
          <div
            class="component sensors"
            :style="getExplodedStyle(1)"
          >
            <div class="comp-label">Omni-Sense 感測陣列</div>
          </div>
          <div
            class="component core"
            :style="getExplodedStyle(2)"
          >
            <div class="comp-label">Photon-S3 處理器</div>
          </div>
          <div
            class="component battery"
            :style="getExplodedStyle(3)"
          >
            <div class="comp-label">固態能量單元</div>
          </div>
        </div>
        <div class="view-controls">
          <div class="range-labels">
            <span class="label">整合狀態</span>
            <input
              type="range"
              v-model="explosionFactor"
              min="0"
              max="100"
              step="1"
            />
            <span class="label">完全拆解</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Performance Simulator -->
    <section class="simulator container">
      <div class="simulator-card glass">
        <div class="sim-header">
          <h2>效能模擬器</h2>
          <p>調整參數以觀察光子處理器的實時效能變化</p>
        </div>
        <div class="sim-body">
          <div class="controls">
            <div class="control-group">
              <label>光子頻率 (THz)</label>
              <input
                type="range"
                v-model="frequency"
                min="1"
                max="100"
                step="1"
              />
              <span class="value">{{ frequency }} THz</span>
            </div>
            <div class="control-group">
              <label>核心負載 (%)</label>
              <input
                type="range"
                v-model="load"
                min="0"
                max="100"
                step="1"
              />
              <span class="value">{{ load }}%</span>
            </div>
          </div>
          <div class="display">
            <div class="stat-box">
              <span class="label">預計運算速度</span>
              <span class="number">{{ calculatedSpeed }} LOPS</span>
            </div>
            <div class="stat-box">
              <span class="label">能源效率比</span>
              <span class="number">{{ calculatedEfficiency }}%</span>
            </div>
            <div
              class="visual-feedback"
              :style="visualStyle"
            ></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

// --- Decode Text Logic ---
const titleText = "探索光子維度";
const heroText =
  "透過精確的模擬器，親自操控 LUMINA 的核心技術，感受光子計算帶來的即時反饋。";
const decodedTitle = ref("");
const decodedHeroText = ref("");
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";

const startDecoding = (target: string, refVar: any, speed = 30) => {
  let iteration = 0;
  const interval = setInterval(() => {
    refVar.value = target
      .split("")
      .map((char, index) => {
        if (index < iteration) return target[index];
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");
    if (iteration >= target.length) clearInterval(interval);
    iteration += 1 / 3;
  }, speed);
};

// --- 3D Draggable Card Logic ---
const isDragging = ref(false);
const rotationX = ref(0);
const rotationY = ref(0);
let startX = 0;
let startY = 0;

const startDrag = (e: MouseEvent | TouchEvent) => {
  isDragging.value = true;
  const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
  const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
  startX = clientX;
  startY = clientY;
};

const onDrag = (e: MouseEvent | TouchEvent) => {
  if (!isDragging.value) return;
  const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
  const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
  const deltaX = clientX - startX;
  const deltaY = clientY - startY;
  rotationY.value += deltaX * 0.5;
  rotationX.value -= deltaY * 0.5;
  startX = clientX;
  startY = clientY;
};

const stopDrag = () => {
  isDragging.value = false;
};

const cardStyle = computed(() => ({
  transform: `rotateX(${rotationX.value}deg) rotateY(${rotationY.value}deg)`,
  transition: isDragging.value ? "none" : "transform 0.5s ease-out",
}));

// --- Exploded View Logic ---
const explosionFactor = ref(0);
const getExplodedStyle = (index: number) => {
  const offset = (index - 1.5) * explosionFactor.value * 2.5;
  return {
    transform: `translateY(${offset}px) rotateX(${explosionFactor.value * 0.2}deg)`,
    opacity: 1 - explosionFactor.value / 150,
    zIndex: 10 - index,
    transition: "transform 0.1s ease-out",
  };
};

// --- Simulator Logic ---
const frequency = ref(50);
const load = ref(30);
const calculatedSpeed = computed(() =>
  (frequency.value * (load.value / 100) * 8.5).toFixed(2),
);
const calculatedEfficiency = computed(() =>
  (100 - load.value * 0.2).toFixed(1),
);
const visualStyle = computed(() => ({
  background: `radial-gradient(circle, var(--accent) 0%, transparent 70%)`,
  opacity: load.value / 100,
  transform: `scale(${1 + frequency.value / 100})`,
  filter: `blur(${20 - frequency.value / 5}px)`,
  transition: "all 0.3s ease",
}));

onMounted(() => {
  startDecoding(titleText, decodedTitle, 50);
  startDecoding(heroText, decodedHeroText, 20);
});
</script>

<script lang="ts">
export default {
  name: "Experience",
};
</script>

<style scoped>
.experience-view {
  padding: 150px 0;
  background: var(--bg-main);
  min-height: 100vh;
  position: relative;
}

.hero {
  text-align: center;
  margin-bottom: 80px;
}
.decode-title {
  font-size: 64px;
  font-weight: 800;
  color: var(--text-primary);
  min-height: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: -0.02em;
}
.decode-text {
  font-family: "Courier New", monospace;
  font-size: 18px;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
  min-height: 4.8em; /* 增加高度以容納多行文字，防止跳動 */
  line-height: 1.6;
  display: block;
  word-break: break-all;
}
.label {
  background: var(--accent-soft);
  color: var(--accent);
  padding: 6px 14px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
}

/* 3D Draggable Card */
.draggable-section {
  margin-bottom: 100px;
  text-align: center;
}
.drag-container {
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  cursor: grab;
  user-select: none;
}
.drag-container:active {
  cursor: grabbing;
}
.card-3d {
  width: 320px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
}
.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden; /* 防止內容溢出 */
}
.front {
  background: linear-gradient(135deg, var(--accent) 0%, #00d4ff 100%);
  color: white;
}
.back {
  background: #1e293b;
  color: var(--accent);
  transform: rotateY(180deg);
}
.card-logo {
  font-weight: 900;
  font-size: 24px;
  letter-spacing: 2px;
}
.card-chip {
  width: 50px;
  height: 40px;
  background: linear-gradient(135deg, #ffd700 0%, #b8860b 100%);
  border-radius: 8px;
}
.card-number {
  font-family: "Courier New", monospace;
  font-size: 18px;
  letter-spacing: 1px;
}
.qr-code {
  width: 60px;
  height: 60px;
  background: white;
  margin: 0 auto;
  border-radius: 5px;
  opacity: 0.8;
}

/* Exploded View */
.exploded-view {
  margin-bottom: 100px;
}
.view-card {
  padding: 60px;
  border-radius: 40px;
  text-align: center;
}
.view-stage {
  height: 450px;
  position: relative;
  perspective: 1200px;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: visible;
}
.component {
  width: 320px;
  height: 60px;
  background: var(--accent-soft);
  border: 2px solid var(--accent);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  box-shadow: var(--shadow-md);
  padding: 0 20px;
  box-sizing: border-box;
}
.comp-label {
  font-size: 13px;
  font-weight: 700;
  color: var(--accent);
  white-space: nowrap;
  pointer-events: none;
  text-align: center;
  width: 100%;
}
.shell {
  height: 80px;
  width: 320px;
}

.core {
  background: var(--accent);
  color: white;
  height: 40px;
  width: 200px;
}
.core .comp-label {
  color: white;
}
.view-controls {
  max-width: 400px;
  margin: 0 auto;
}
.range-labels {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 10px;
}

/* Simulator */
.simulator {
  margin-bottom: 100px;
}
.simulator-card {
  padding: 50px;
  border-radius: 40px;
}
.sim-body {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  align-items: center;
}
.controls {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.display {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  position: relative;
  padding: 40px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  overflow: hidden;
  min-height: 180px;
  align-items: center;
}
.dark .display {
  background: rgba(255, 255, 255, 0.05);
}
.stat-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 1;
  text-align: left;
}
.stat-box .label {
  font-size: 13px;
  color: var(--text-secondary);
  font-weight: 600;
}
.stat-box .number {
  font-size: 32px;
  font-weight: 800;
  color: var(--accent);
  font-family: "Courier New", monospace;
  line-height: 1;
}
.visual-feedback {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

@media (max-width: 768px) {
  .sim-body {
    grid-template-columns: 1fr;
  }
  .decode-title {
    font-size: 40px;
  }
}
</style>
