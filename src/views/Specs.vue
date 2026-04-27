<template>
  <div class="specs container">
    <!-- Header -->
    <div class="specs-header">
      <h1>LUMINA Nexus 產品規格</h1>
      <p>比較我們的三款旗艦產品，找到最適合您的解決方案。</p>
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
            <div class="spec-value">Photon-S3 光子計算架構</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">核心數量</div>
            <div class="spec-value">8-16 核心（根據型號）</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">時鐘速度</div>
            <div class="spec-value">5.0-8.0 GHz</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">處理延遲</div>
            <div class="spec-value">0.01ms（超低延遲）</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">功耗</div>
            <div class="spec-value">0.5-2.0W</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">熱設計功耗 (TDP)</div>
            <div class="spec-value">1.5-3.0W</div>
          </div>
        </div>
      </div>
      
      <div class="specs-category">
        <h3>連接與通信</h3>
        <div class="specs-details">
          <div class="spec-row">
            <div class="spec-label">無線標準</div>
            <div class="spec-value">6G / 5G / WiFi 7</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">6G 速率</div>
            <div class="spec-value">100 Gbps</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">量子連結</div>
            <div class="spec-value">支援量子密鑰分發</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">多頻段支援</div>
            <div class="spec-value">Sub-6GHz / mmWave / THz</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">有線連接</div>
            <div class="spec-value">USB-C 3.2 Gen 2x2</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">藍牙</div>
            <div class="spec-value">Bluetooth 5.3 + LE Audio</div>
          </div>
        </div>
      </div>
      
      <div class="specs-category">
        <h3>感測系統</h3>
        <div class="specs-details">
          <div class="spec-row">
            <div class="spec-label">感測點數</div>
            <div class="spec-value">10,000+</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">感測精度</div>
            <div class="spec-value">±0.1mm</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">感測類型</div>
            <div class="spec-value">LiDAR / 紅外線 / 超聲波 / 多光譜</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">視場角 (FOV)</div>
            <div class="spec-value">360°</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">最大感測距離</div>
            <div class="spec-value">500 公尺</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">刷新率</div>
            <div class="spec-value">120 Hz</div>
          </div>
        </div>
      </div>
      
      <div class="specs-category">
        <h3>安全與加密</h3>
        <div class="specs-details">
          <div class="spec-row">
            <div class="spec-label">加密標準</div>
            <div class="spec-value">量子級別 / 256-bit AES</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">密鑰交換</div>
            <div class="spec-value">量子密鑰分發 (QKD)</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">安全芯片</div>
            <div class="spec-value">TPM 2.0 + 專有安全處理器</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">生物識別</div>
            <div class="spec-value">指紋 / 面部識別 / 虹膜掃描</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">威脅檢測</div>
            <div class="spec-value">實時 AI 驅動的異常檢測</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">安全認證</div>
            <div class="spec-value">CC EAL 5+ / FIPS 140-3</div>
          </div>
        </div>
      </div>
      
      <div class="specs-category">
        <h3>電源與續航</h3>
        <div class="specs-details">
          <div class="spec-row">
            <div class="spec-label">電池容量</div>
            <div class="spec-value">5,000-10,000 mAh</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">待機時間</div>
            <div class="spec-value">240-600 小時</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">工作時間</div>
            <div class="spec-value">48-120 小時</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">快速充電</div>
            <div class="spec-value">0-100% 在 30 分鐘內</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">無線充電</div>
            <div class="spec-value">支援 15W 無線充電</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">電池循環次數</div>
            <div class="spec-value">1,000+ 次循環</div>
          </div>
        </div>
      </div>
      
      <div class="specs-category">
        <h3>物理特性</h3>
        <div class="specs-details">
          <div class="spec-row">
            <div class="spec-label">尺寸</div>
            <div class="spec-value">145 × 72 × 8.5 mm</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">重量</div>
            <div class="spec-value">185-210 克</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">材質</div>
            <div class="spec-value">航空級鋁合金 / 石墨烯複合 / 藍寶石玻璃</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">防水等級</div>
            <div class="spec-value">IP68 / IP69K</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">防塵等級</div>
            <div class="spec-value">IP6X</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">工作溫度</div>
            <div class="spec-value">-20°C 至 60°C</div>
          </div>
        </div>
      </div>
      
      <div class="specs-category">
        <h3>可靠性與保修</h3>
        <div class="specs-details">
          <div class="spec-row">
            <div class="spec-label">可靠性評級</div>
            <div class="spec-value">99.999% (5 個 9)</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">平均故障間隔時間</div>
            <div class="spec-value">100,000+ 小時</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">標準保修</div>
            <div class="spec-value">2-5 年（根據型號）</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">意外損傷保護</div>
            <div class="spec-value">可選購買</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">軟體更新</div>
            <div class="spec-value">終身免費更新</div>
          </div>
          <div class="spec-row">
            <div class="spec-label">技術支援</div>
            <div class="spec-value">24/7 全球支援</div>
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
          <span class="icon">📄</span>
          下載 PDF 規格表
        </button>
        <button class="btn-download">
          <span class="icon">📊</span>
          下載 Excel 對比表
        </button>
        <button class="btn-download">
          <span class="icon">📋</span>
          下載技術白皮書
        </button>
      </div>
    </section>
    
    <!-- FAQ -->
    <section class="faq-section">
      <h2>常見問題</h2>
      <div class="faq-items">
        <div class="faq-item glass">
          <h3>Nexus Standard 和 Nexus Pro 的主要區別是什麼？</h3>
          <p>
            主要區別在於處理核心數量（8 vs 12）、感測精度、電池容量和保修期限。Nexus Pro 提供更高的性能和更長的保修期。
          </p>
        </div>
        
        <div class="faq-item glass">
          <h3>產品是否支援國際保修？</h3>
          <p>
            是的，所有 LUMINA 產品都享受全球保修服務。我們在 150+ 個國家擁有授權服務中心。
          </p>
        </div>
        
        <div class="faq-item glass">
          <h3>電池是否可以更換？</h3>
          <p>
            是的，電池可以由授權服務中心更換。我們建議每 2-3 年更換一次電池以保持最佳性能。
          </p>
        </div>
        
        <div class="faq-item glass">
          <h3>產品是否相容於舊版軟體？</h3>
          <p>
            LUMINA 產品向下相容於過去 5 個版本的軟體。我們提供免費的軟體升級和技術支援。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SpecsComparator from "../components/SpecsComparator.vue";
</script>

<style scoped>
.specs {
  padding: 150px 0;
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
  max-width: 600px;
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
  background: linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%);
  border-radius: 40px;
  text-align: center;
  margin: 100px 0;
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
  transition: 0.3s;
  font-size: 15px;
}

.btn-download:hover {
  background: var(--accent);
  color: #fff;
  transform: translateY(-2px);
}

.btn-download .icon {
  font-size: 20px;
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
  transition: 0.3s;
}

.faq-item:hover {
  transform: translateY(-5px);
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
  
  .download-buttons {
    flex-direction: column;
  }
  
  .btn-download {
    width: 100%;
    justify-content: center;
  }
  
  .faq-items {
    grid-template-columns: 1fr;
  }
}
</style>
