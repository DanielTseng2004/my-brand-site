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
        <p>深入探索 Nexus 系列如何將光子技術封裝於 0.1mm 的精度之中。</p>
      </div>
    </section>

    <!-- 2. 核心拆解舞台 (釘選區塊) -->
    <section
      class="explosion-stage"
      ref="pinSection"
    >
      <div class="visual-center">
        <!-- 模擬零件層疊 -->
        <div
          class="model-layer shell-outer"
          ref="layer1"
        >
          <div class="material-tag">航空級鋁合金[cite: 1]</div>
        </div>
        <div
          class="model-layer photon-grid"
          ref="layer2"
        >
          <div class="material-tag">Photon-S3 光子陣列[cite: 5]</div>
        </div>
        <div
          class="model-layer sensor-array"
          ref="layer3"
        >
          <div class="material-tag">Omni-Sense 感測器[cite: 5]</div>
        </div>
      </div>

      <!-- 側邊動態說明文字 -->
      <aside class="side-descriptions">
        <div class="desc-item d1">
          <h3>原子級表面處理</h3>
          <p>採用噴砂氧化工藝，達成 60% 碳排放減少的永續承諾[cite: 2]。</p>
        </div>
        <div class="desc-item d2">
          <h3>光子路徑優化</h3>
          <p>0.01ms 的數據流轉，在透明晶體結構中清晰可見。</p>
        </div>
      </aside>
    </section>

    <!-- 3. 互動對比實驗室 -->
    <section class="comparison-lab">
      <div class="lab-card glass">
        <div class="lab-header">
          <span class="status">實驗進行中</span>
          <h2>散熱效能模擬</h2>
        </div>
        <div
          class="thermal-viz"
          @mouseenter="startSimulation"
          @mouseleave="stopSimulation"
        >
          <div
            class="heat-ripple"
            v-for="n in 3"
            :key="n"
            :class="`r${n}`"
          ></div>
          <p>觸碰以觀察 0.5W 低功耗下的熱能擴散[cite: 5]</p>
        </div>
        <button
          class="btn-action"
          @click="downloadReport"
        >
          下載技術白皮書
        </button>
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
</script>

<style scoped>
.lab-wrapper {
  background: #fbfbfd;
  color: #1d1d1f;
}

.intro-hero {
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.serial {
  font-family: "Courier New", monospace;
  color: #0066cc;
  font-weight: bold;
}

.explosion-stage {
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-center {
  position: relative;
  width: 400px;
  height: 300px;
  transform-style: preserve-3d;
}
.model-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: flex-end;
  padding: 20px;
}
.material-tag {
  font-size: 0.7rem;
  letter-spacing: 1px;
  color: #86868b;
  text-transform: uppercase;
}

.side-descriptions {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10%;
  pointer-events: none;
}
.desc-item {
  max-width: 250px;
  pointer-events: auto;
}

.comparison-lab {
  padding: 100px 10%;
  background: #ffffff;
}
.thermal-viz {
  height: 300px;
  background: #f5f5f7;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin: 30px 0;
  cursor: crosshair;
}
.heat-ripple {
  position: absolute;
  width: 100px;
  height: 100px;
  border: 2px solid #ff4500;
  border-radius: 50%;
  opacity: 0.5;
}

.btn-action {
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #000;
  background: transparent;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}
.btn-action:hover {
  background: #000;
  color: #fff;
}

.glass {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 40px;
  border-radius: 32px;
}
</style>
