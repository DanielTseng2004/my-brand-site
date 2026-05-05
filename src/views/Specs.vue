<template>
  <div class="specs container">
    <!-- Header -->
    <div class="specs-header">
      <h1 class="text-gradient">LUMINA 全系列產品規格</h1>
      <p>
        從個人終端到企業級伺服器，比較我們的十款旗艦產品，找到最適合您的解決方案。
      </p>
    </div>

    <!-- Specs Comparator Component -->
    <SpecsComparator />

    <!-- Detailed Specifications -->
    <section class="detailed-specs">
      <h2>詳細規格說明</h2>

      <div class="specs-category">
        <h3>處理器與性能</h3>
        <div class="specs-details">
          <div class="spec-row">
            <div class="spec-label">CPU 架構</div>
            <div class="spec-value">Photon-S3 光子計算架構 / Q1 量子混合架構</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">核心數量</div>
            <div class="spec-value">2-64 核心（根據型號）</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">時鐘速度</div>
            <div class="spec-value">3.0-12.0 GHz</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">處理延遲</div>
            <div class="spec-value">0.001ms - 0.01ms</div>
          </div>
        </div>
      </div>

      <div class="specs-category">
        <h3>連接與通信</h3>
        <div class="specs-details">
          <div class="spec-row">
            <div class="spec-label">無線標準</div>
            <div class="spec-value">6G / 5G / WiFi 7 / 量子糾纏連結</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">最高速率</div>
            <div class="spec-value">1000 Gbps (Enterprise 型號)</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">衛星通訊</div>
            <div class="spec-value">支援全球低軌衛星直接連線</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Download Specs -->
    <section class="download-specs">
      <h2>下載詳細規格表</h2>
      <p>獲取完整的技術文檔和白皮書</p>
      <div class="download-buttons">
        <button class="btn-download">
          <FileText :size="18" />
          下載 PDF 規格表
        </button>
        <button class="btn-download">
          <BarChart :size="18" />
          下載 Excel 對比表
        </button>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <h2>常見問題</h2>
      <div class="faq-items">
        <div class="faq-item glass">
          <h3>如何選擇適合我的 Nexus 產品？</h3>
          <p>
            如果您是日常辦公，Nexus Standard 或 Air
            是最佳選擇；專業創作者建議選擇 Pro 或 Studio；企業用戶則應考慮
            Enterprise 系列。
          </p>
        </div>

        <div class="faq-item glass">
          <h3>Nexus Quantum 適合一般用戶嗎？</h3>
          <p>
            Nexus Quantum 目前處於 Beta
            階段，主要針對科研人員與技術愛好者，提供實驗性的量子糾纏通信功能。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SpecsComparator from "../components/SpecsComparator.vue";
import { FileText, BarChart } from "lucide-vue-next";
</script>

<style scoped>
.specs {
  padding: 150px 0;
  background: var(--bg-main);
  color: var(--text-primary);
}

.specs-header {
  text-align: center;
  margin-bottom: 80px;
}

.specs-header h1 {
  font-size: 64px;
  font-weight: 800;
  margin-bottom: 20px;
}

.specs-header p {
  font-size: 20px;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
}

/* Detailed Specifications */
.detailed-specs {
  margin: 100px 0;
}

.detailed-specs h2 {
  font-size: 48px;
  margin-bottom: 60px;
  text-align: center;
  font-weight: 800;
}

.specs-category {
  margin-bottom: 60px;
}

.specs-category h3 {
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: 700;
  color: var(--accent);
  padding-bottom: 15px;
  border-bottom: 2px solid var(--border);
}

.specs-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 0;
}

.spec-row {
  display: flex;
  padding: 20px;
  border-bottom: 1px solid var(--border);
  background: var(--accent-soft);
}

.spec-row:nth-child(even) {
  background: rgba(0, 102, 204, 0.02);
}

.spec-label {
  flex: 0 0 40%;
  font-weight: 700;
  color: var(--text-primary);
}

.spec-value {
  flex: 1;
  color: var(--text-secondary);
  font-size: 15px;
}

/* Download Specs */
.download-specs {
  padding: 80px 0;
  background: linear-gradient(
    135deg,
    rgba(0, 102, 204, 0.1) 0%,
    rgba(0, 212, 255, 0.1) 100%
  );
  border-radius: 40px;
  text-align: center;
  margin: 100px 0;
  border: 1px solid var(--border);
}

.download-specs h2 {
  font-size: 48px;
  margin-bottom: 15px;
  font-weight: 800;
}

.download-specs p {
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 40px;
}

.download-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-download {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--bg-main);
  color: var(--accent);
  border: 2px solid var(--accent);
  padding: 14px 28px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
  font-size: 15px;
}

.btn-download:hover {
  background: var(--accent);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
}

/* FAQ Section */
.faq-section {
  margin: 100px 0;
}

.faq-section h2 {
  font-size: 48px;
  margin-bottom: 60px;
  text-align: center;
  font-weight: 800;
}

.faq-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
}

.faq-item {
  padding: 40px;
  border-radius: 30px;
  background: var(--glass);
  border: 1px solid var(--border);
  transition: all var(--transition-normal);
}

.faq-item:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
  box-shadow: var(--shadow-md);
}

.faq-item h3 {
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 700;
  color: var(--text-primary);
}

.faq-item p {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.7;
}

/* 深色模式優化 */
.dark .spec-row {
  background: rgba(30, 41, 59, 0.5);
}

.dark .spec-row:nth-child(even) {
  background: rgba(30, 41, 59, 0.3);
}

.dark .faq-item {
  background: rgba(30, 41, 59, 0.7);
}

@media (max-width: 768px) {
  .specs-header h1 {
    font-size: 36px;
  }

  .detailed-specs h2,
  .download-specs h2,
  .faq-section h2 {
    font-size: 32px;
  }

  .specs-details {
    grid-template-columns: 1fr;
  }

  .faq-items {
    grid-template-columns: 1fr;
  }
}
</style>
