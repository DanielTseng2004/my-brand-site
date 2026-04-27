<template>
  <div class="experience-view">
    <section class="hero container">
      <div class="hero-content">
        <span class="label">互動體驗</span>
        <h1>探索光子維度</h1>
        <p>在這裡，您可以親自操控 LUMINA 的核心技術，感受光子計算帶來的即時反饋。</p>
      </div>
    </section>

    <!-- Interactive Simulator -->
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
              <input type="range" v-model="frequency" min="1" max="100" step="1" />
              <span class="value">{{ frequency }} THz</span>
            </div>
            <div class="control-group">
              <label>核心負載 (%)</label>
              <input type="range" v-model="load" min="0" max="100" step="1" />
              <span class="value">{{ load }}%</span>
            </div>
          </div>
          <div class="display">
            <div class="stat-box">
              <span class="label">預計運算速度</span>
              <span class="number">{{ calculatedSpeed }} PFLOPS</span>
            </div>
            <div class="stat-box">
              <span class="label">能源效率比</span>
              <span class="number">{{ calculatedEfficiency }}%</span>
            </div>
            <div class="visual-feedback" :style="visualStyle"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Cards -->
    <section class="interactive-grid container">
      <div class="grid-header">
        <h2>技術模組</h2>
        <p>懸停在模組上以查看詳細資訊</p>
      </div>
      <div class="cards">
        <div class="i-card glass" v-for="i in 3" :key="i">
          <div class="card-inner">
            <div class="card-front">
              <div class="icon">{{ ['⚡', '🛡️', '🌐'][i-1] }}</div>
              <h3>{{ ['光子核心', '量子加密', '6G 連結'][i-1] }}</h3>
            </div>
            <div class="card-back">
              <p>{{ [
                '採用 S3 架構，提供前所未有的運算能力。',
                '基於量子糾纏原理，確保數據絕對安全。',
                '全球覆蓋的超高速無線網路技術。'
              ][i-1] }}</p>
              <button class="btn-mini">了解更多</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const frequency = ref(50);
const load = ref(30);

const calculatedSpeed = computed(() => {
  return (frequency.value * (load.value / 100) * 8.5).toFixed(2);
});

const calculatedEfficiency = computed(() => {
  return (100 - (load.value * 0.2)).toFixed(1);
});

const visualStyle = computed(() => {
  const opacity = load.value / 100;
  const scale = 1 + (frequency.value / 100);
  return {
    background: `radial-gradient(circle, var(--accent) 0%, transparent 70%)`,
    opacity: opacity,
    transform: `scale(${scale})`,
    filter: `blur(${20 - (frequency.value / 5)}px)`
  };
});
</script>

<script lang="ts">
export default {
  name: 'Experience'
}
</script>

<style scoped>
.experience-view {
  padding: 150px 0;
  background: var(--bg-main);
  min-height: 100vh;
}

.hero {
  text-align: center;
  margin-bottom: 80px;
}

.hero h1 {
  font-size: 64px;
  margin: 20px 0;
  font-weight: 800;
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

/* Simulator */
.simulator {
  margin-bottom: 100px;
}

.simulator-card {
  padding: 50px;
  border-radius: 40px;
}

.sim-header {
  text-align: center;
  margin-bottom: 40px;
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

.control-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.control-group label {
  font-weight: 600;
  color: var(--text-primary);
}

input[type="range"] {
  width: 100%;
  accent-color: var(--accent);
}

.display {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  position: relative;
  padding: 40px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  overflow: hidden;
}

.dark .display {
  background: rgba(255, 255, 255, 0.05);
}

.stat-box {
  display: flex;
  flex-direction: column;
  z-index: 1;
}

.stat-box .label {
  font-size: 12px;
  color: var(--text-secondary);
  background: none;
  padding: 0;
}

.stat-box .number {
  font-size: 28px;
  font-weight: 800;
  color: var(--accent);
}

.visual-feedback {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}

/* Interactive Grid */
.grid-header {
  text-align: center;
  margin-bottom: 50px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.i-card {
  height: 250px;
  perspective: 1000px;
  cursor: pointer;
  border: none;
  background: none;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.i-card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-radius: 30px;
  background: var(--accent-soft);
  border: 1px solid var(--border);
}

.card-back {
  transform: rotateY(180deg);
  background: var(--accent);
  color: var(--bg-main);
}

.icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.btn-mini {
  margin-top: 15px;
  padding: 6px 16px;
  border-radius: 15px;
  background: var(--bg-main);
  color: var(--accent);
  font-weight: 600;
  font-size: 12px;
}

@media (max-width: 768px) {
  .sim-body {
    grid-template-columns: 1fr;
  }
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
