<template>
  <div
    class="lab-wrapper"
    ref="scrollContainer"
  >
    <!-- 1. 沉浸式進入區塊 -->
    <section class="intro-hero">
      <div
        class="title-group"
        v-motion-fade
      >
        <span class="serial">LAB-01 // MATERIAL SCIENCE</span>
        <h1>工藝的微觀層次</h1>
        <p>深入探索 Nexus 系列如何將光子技術封裝於 0.1mm 的精度之中，透過先進的材料科學與精密工程的完美融合。</p>
        <div class="intro-stats">
          <div class="stat-item">
            <span class="stat-value">0.1mm</span>
            <span class="stat-label">精度等級</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">3層</span>
            <span class="stat-label">複合結構</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">60%</span>
            <span class="stat-label">碳減排</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. 核心拆解舞台 (釘選區塊) -->
    <section
      class="explosion-stage"
      ref="pinSection"
    >
      <div class="stage-header">
        <h2>核心結構拆解</h2>
        <p>向下滾動以探索 Nexus 系列的三層複合結構</p>
      </div>

      <div class="visual-center">
        <!-- 模擬零件層疊 -->
        <div
          class="model-layer shell-outer"
          ref="layer1"
        >
          <div class="material-tag">航空級鋁合金</div>
          <div class="layer-indicator">外殼層</div>
        </div>
        <div
          class="model-layer photon-grid"
          ref="layer2"
        >
          <div class="material-tag">Photon-S3 光子陣列</div>
          <div class="layer-indicator">感測層</div>
        </div>
        <div
          class="model-layer sensor-array"
          ref="layer3"
        >
          <div class="material-tag">Omni-Sense 感測器</div>
          <div class="layer-indicator">核心層</div>
        </div>
      </div>

      <!-- 側邊動態說明文字 -->
      <aside class="side-descriptions">
        <div class="desc-item d1">
          <div class="desc-icon">⚙️</div>
          <h3>原子級表面處理</h3>
          <p>採用先進的噴砂氧化工藝，在原子層面進行精密控制。每個表面單位都經過 1000+ 次檢驗，確保完美的光學特性與耐久性。達成業界領先的 60% 碳排放減少承諾。</p>
          <div class="detail-specs">
            <span>表面粗糙度：Ra 0.8μm</span>
            <span>硬度等級：HV 180</span>
          </div>
        </div>
        <div class="desc-item d2">
          <div class="desc-icon">💡</div>
          <h3>光子路徑優化</h3>
          <p>0.01ms 的超快數據流轉速度，在透明晶體結構中清晰可見。光子信號在多層介質中的傳播經過精心設計，實現 99.8% 的信號保真度。</p>
          <div class="detail-specs">
            <span>信號延遲：&lt;10μs</span>
            <span>保真度：99.8%</span>
          </div>
        </div>
      </aside>
    </section>

    <!-- 3. 互動對比實驗室 -->
    <section class="comparison-lab">
      <div class="lab-intro">
        <h2>性能實驗室</h2>
        <p>與我們的互動模擬系統進行實時測試，親身體驗 Nexus 系列的卓越性能</p>
      </div>

      <div class="lab-grid">
        <!-- 散熱效能卡片 -->
        <div class="lab-card glass">
          <div class="lab-header">
            <span class="status active">實驗進行中</span>
            <h3>散熱效能模擬</h3>
          </div>
          <div
            class="thermal-viz"
            @mouseenter="startSimulation"
            @mouseleave="stopSimulation"
          >
            <div
              class="heat-ripple"
              v-for="n in 3"
              :key="`heat-${n}`"
              :class="`r${n}`"
            ></div>
            <div class="thermal-info">
              <p class="thermal-hint">觸碰以觀察熱能擴散</p>
              <p class="thermal-spec">0.5W 低功耗 | 最高溫升 15°C</p>
            </div>
          </div>
          <div class="lab-stats">
            <div class="stat-box">
              <span class="stat-num">0.5W</span>
              <span class="stat-desc">功耗</span>
            </div>
            <div class="stat-box">
              <span class="stat-num">15°C</span>
              <span class="stat-desc">溫升</span>
            </div>
            <div class="stat-box">
              <span class="stat-num">98%</span>
              <span class="stat-desc">效率</span>
            </div>
          </div>
          <button
            class="btn-action"
            @click="downloadReport"
          >
            下載技術白皮書
          </button>
        </div>

        <!-- 耐久性測試卡片 -->
        <div class="lab-card glass">
          <div class="lab-header">
            <span class="status">測試完成</span>
            <h3>耐久性測試</h3>
          </div>
          <div class="durability-viz">
            <div class="test-result">
              <div class="result-item">
                <span class="result-label">跌落測試</span>
                <div class="result-bar">
                  <div class="result-fill" style="width: 95%;"></div>
                </div>
                <span class="result-value">95% 通過</span>
              </div>
              <div class="result-item">
                <span class="result-label">溫度循環</span>
                <div class="result-bar">
                  <div class="result-fill" style="width: 98%;"></div>
                </div>
                <span class="result-value">98% 通過</span>
              </div>
              <div class="result-item">
                <span class="result-label">防水測試</span>
                <div class="result-bar">
                  <div class="result-fill" style="width: 100%;"></div>
                </div>
                <span class="result-value">100% 通過</span>
              </div>
            </div>
          </div>
          <button
            class="btn-secondary"
            @click="viewDetails"
          >
            查看詳細報告
          </button>
        </div>

        <!-- 光學性能卡片 -->
        <div class="lab-card glass">
          <div class="lab-header">
            <span class="status">實時監測</span>
            <h3>光學性能</h3>
          </div>
          <div class="optical-viz">
            <div class="spectrum-bar">
              <div
                v-for="i in 12"
                :key="`spectrum-${i}`"
                class="spectrum-band"
                :style="{ height: `${30 + Math.random() * 50}%` }"
              ></div>
            </div>
            <div class="optical-stats">
              <div class="optical-item">
                <span class="optical-label">色溫</span>
                <span class="optical-value">6500K</span>
              </div>
              <div class="optical-item">
                <span class="optical-label">色準</span>
                <span class="optical-value">ΔE &lt; 2</span>
              </div>
              <div class="optical-item">
                <span class="optical-label">亮度</span>
                <span class="optical-value">500 nits</span>
              </div>
            </div>
          </div>
          <button
            class="btn-secondary"
            @click="viewDetails"
          >
            查看光譜分析
          </button>
        </div>
      </div>
    </section>

    <!-- 4. 技術規格總結 -->
    <section class="specs-summary">
      <h2>核心技術規格</h2>
      <div class="specs-grid">
        <div class="spec-card">
          <h4>材料科學</h4>
          <ul>
            <li>航空級 6061-T6 鋁合金</li>
            <li>納米級表面處理</li>
            <li>抗氧化塗層</li>
          </ul>
        </div>
        <div class="spec-card">
          <h4>光子技術</h4>
          <ul>
            <li>Photon-S3 陣列</li>
            <li>多光譜感測</li>
            <li>實時信號處理</li>
          </ul>
        </div>
        <div class="spec-card">
          <h4>環保承諾</h4>
          <ul>
            <li>60% 碳排放減少</li>
            <li>100% 可回收材料</li>
            <li>無有害物質</li>
          </ul>
        </div>
        <div class="spec-card">
          <h4>性能指標</h4>
          <ul>
            <li>功耗：0.5W</li>
            <li>溫升：15°C</li>
            <li>精度：0.1mm</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scrollContainer = ref(null);
const pinSection = ref(null);
const layer1 = ref(null);
const layer2 = ref(null);
const layer3 = ref(null);

onMounted(() => {
  // GSAP 滾動驅動拆解動畫
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: pinSection.value,
      start: "top top",
      end: "+=2000",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    },
  });

  tl.to(layer1.value, { y: -300, opacity: 0.2, scale: 1.1, duration: 2 })
    .to(layer3.value, { y: 300, opacity: 0.2, duration: 2 }, "-=2")
    .from(".d1", { x: -100, opacity: 0, duration: 1 }, "-=1")
    .from(".d2", { x: 100, opacity: 0, duration: 1 }, "-=0.5")
    .to(layer2.value, { rotateY: 180, scale: 1.5, duration: 2 });
});

const startSimulation = () => {
  gsap.to(".heat-ripple", {
    scale: 2,
    opacity: 0,
    stagger: 0.3,
    repeat: -1,
    duration: 1.5,
  });
};

const stopSimulation = () => {
  gsap.killTweensOf(".heat-ripple");
  gsap.to(".heat-ripple", { scale: 1, opacity: 0.5 });
};

const downloadReport = () => {
  alert("正在生成 Nexus Ultra 技術結構報告 (PDF)...");
};

const viewDetails = () => {
  alert("詳細報告將在新視窗開啟...");
};
</script>

<style scoped>
.lab-wrapper {
  background: var(--bg-main);
  color: var(--text-primary);
}

/* ========== 進入區塊 ========== */
.intro-hero {
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
}

.title-group h1 {
  font-size: 3.5rem;
  margin: 20px 0;
  background: var(--grad-blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-group p {
  font-size: 1.2rem;
  margin: 20px 0 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.serial {
  font-family: "Courier New", monospace;
  color: var(--accent);
  font-weight: bold;
  font-size: 0.9rem;
  letter-spacing: 2px;
}

.intro-stats {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent);
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-top: 8px;
}

/* ========== 拆解舞台 ========== */
.explosion-stage {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  min-height: 100vh;
}

.stage-header {
  text-align: center;
  margin-bottom: 60px;
  z-index: 10;
}

.stage-header h2 {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.stage-header p {
  font-size: 1.1rem;
  color: var(--text-secondary);
}

.visual-center {
  position: relative;
  width: 400px;
  height: 300px;
  transform-style: preserve-3d;
  margin-bottom: 60px;
}

.model-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 20px;
  transition: all 0.3s ease;
}

.dark .model-layer {
  background: rgba(30, 41, 59, 0.7);
  border-color: rgba(255, 255, 255, 0.1);
}

.material-tag {
  font-size: 0.7rem;
  letter-spacing: 1px;
  color: var(--text-secondary);
  text-transform: uppercase;
  font-weight: 600;
}

.layer-indicator {
  font-size: 0.85rem;
  color: var(--accent);
  font-weight: 600;
  margin-top: 8px;
}

.side-descriptions {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  pointer-events: none;
  gap: 40px;
}

.desc-item {
  max-width: 280px;
  pointer-events: auto;
  padding: 24px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.dark .desc-item {
  background: rgba(30, 41, 59, 0.5);
  border-color: rgba(255, 255, 255, 0.1);
}

.desc-item:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.7);
}

.dark .desc-item:hover {
  background: rgba(30, 41, 59, 0.7);
}

.desc-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.desc-item h3 {
  font-size: 1.2rem;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.desc-item p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.detail-specs {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--accent);
  font-weight: 500;
}

/* ========== 實驗室區塊 ========== */
.comparison-lab {
  padding: 100px 10%;
  background: var(--bg-main);
}

.lab-intro {
  text-align: center;
  margin-bottom: 60px;
}

.lab-intro h2 {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.lab-intro p {
  font-size: 1.1rem;
  color: var(--text-secondary);
}

.lab-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.lab-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 40px;
  border-radius: 32px;
  transition: all 0.3s ease;
}

.dark .lab-card {
  background: rgba(30, 41, 59, 0.7);
  border-color: rgba(255, 255, 255, 0.05);
}

.lab-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}

.dark .lab-card:hover {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.lab-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  gap: 16px;
}

.lab-header h3 {
  font-size: 1.5rem;
  margin: 0;
}

.status {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  background: rgba(0, 102, 204, 0.1);
  color: var(--accent);
  white-space: nowrap;
}

.status.active {
  background: rgba(16, 185, 129, 0.1);
  color: var(--success);
}

/* ========== 熱能視覺化 ========== */
.thermal-viz {
  height: 300px;
  background: var(--accent-soft);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin: 30px 0;
  cursor: crosshair;
  gap: 16px;
}

.dark .thermal-viz {
  background: rgba(56, 189, 248, 0.05);
}

.heat-ripple {
  position: absolute;
  width: 100px;
  height: 100px;
  border: 2px solid var(--accent);
  border-radius: 50%;
  opacity: 0.5;
}

.thermal-info {
  position: relative;
  z-index: 10;
  text-align: center;
}

.thermal-hint {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-primary);
  margin: 0;
}

.thermal-spec {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 8px 0 0;
}

.lab-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin: 30px 0;
}

.stat-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background: rgba(0, 102, 204, 0.05);
  border-radius: 12px;
  border: 1px solid var(--border);
}

.stat-num {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent);
}

.stat-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-top: 4px;
}

/* ========== 耐久性視覺化 ========== */
.durability-viz {
  margin: 30px 0;
}

.test-result {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.result-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.result-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
}

.result-bar {
  height: 8px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.dark .result-bar {
  background: rgba(255, 255, 255, 0.1);
}

.result-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--success));
  border-radius: 4px;
  transition: width 0.5s ease;
}

.result-value {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

/* ========== 光學性能視覺化 ========== */
.optical-viz {
  margin: 30px 0;
}

.spectrum-bar {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 6px;
  height: 120px;
  margin-bottom: 24px;
  padding: 0 16px;
}

.spectrum-band {
  flex: 1;
  background: linear-gradient(180deg, var(--accent), rgba(56, 189, 248, 0.3));
  border-radius: 4px 4px 0 0;
  min-width: 8px;
  transition: all 0.3s ease;
}

.spectrum-band:hover {
  opacity: 0.8;
  transform: scaleY(1.1);
}

.optical-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.optical-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  background: rgba(0, 102, 204, 0.05);
  border-radius: 12px;
  border: 1px solid var(--border);
}

.optical-label {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 4px;
}

.optical-value {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--accent);
}

/* ========== 按鈕 ========== */
.btn-action,
.btn-secondary {
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--text-primary);
  background: transparent;
  color: var(--text-primary);
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  font-size: 1rem;
}

.btn-action:hover,
.btn-secondary:hover {
  background: var(--text-primary);
  color: var(--bg-main);
  transform: translateY(-2px);
}

.btn-secondary {
  border-color: var(--accent);
  color: var(--accent);
}

.btn-secondary:hover {
  background: var(--accent);
  color: white;
}

/* ========== 規格總結 ========== */
.specs-summary {
  padding: 100px 10%;
  background: var(--accent-soft);
}

.dark .specs-summary {
  background: rgba(56, 189, 248, 0.05);
}

.specs-summary h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 60px;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.spec-card {
  background: white;
  padding: 30px;
  border-radius: 16px;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.dark .spec-card {
  background: rgba(30, 41, 59, 0.5);
  border-color: rgba(255, 255, 255, 0.1);
}

.spec-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}

.dark .spec-card:hover {
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
}

.spec-card h4 {
  font-size: 1.3rem;
  margin-bottom: 16px;
  color: var(--accent);
}

.spec-card ul {
  list-style: none;
  padding: 0;
}

.spec-card li {
  padding: 8px 0;
  padding-left: 24px;
  position: relative;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.spec-card li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: bold;
}

/* ========== 響應式設計 ========== */
@media (max-width: 1024px) {
  .title-group h1 {
    font-size: 2.5rem;
  }

  .intro-stats {
    gap: 40px;
  }

  .side-descriptions {
    flex-direction: column;
    padding: 0 20px;
  }

  .desc-item {
    max-width: 100%;
  }

  .lab-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .intro-hero {
    height: auto;
    padding: 40px 20px;
  }

  .title-group h1 {
    font-size: 2rem;
  }

  .intro-stats {
    flex-direction: column;
    gap: 20px;
  }

  .visual-center {
    width: 300px;
    height: 225px;
  }

  .stage-header {
    margin-bottom: 40px;
  }

  .stage-header h2 {
    font-size: 1.8rem;
  }

  .comparison-lab,
  .specs-summary {
    padding: 60px 5%;
  }

  .lab-stats,
  .optical-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .specs-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .title-group h1 {
    font-size: 1.5rem;
  }

  .title-group p {
    font-size: 1rem;
  }

  .serial {
    font-size: 0.8rem;
  }

  .stat-value {
    font-size: 1.5rem;
  }

  .visual-center {
    width: 250px;
    height: 200px;
  }

  .lab-card {
    padding: 24px;
  }

  .lab-stats,
  .optical-stats {
    grid-template-columns: 1fr;
  }

  .thermal-viz {
    height: 200px;
  }
}

.glass {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 40px;
  border-radius: 32px;
}
</style>
