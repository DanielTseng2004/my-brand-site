<template>
  <div class="env">
    <!-- Hero Section -->
    <section class="env-hero">
      <div class="container">
        <h1 class="text-gradient">
          環保承諾<br />
          永續未來
        </h1>
        <p class="hero-sub">
          LUMINA 致力於成為科技行業的環保領導者。我們的目標是在 2030 年前實現完全碳中和。
        </p>
      </div>
    </section>
    
    <!-- Environmental Impact -->
    <section class="env-content container">
      <div class="split">
        <div class="side-text">
          <h2 class="text-gradient-blue">
            減少碳足跡<br />
            保護地球
          </h2>
          <p>
            LUMINA 在產品設計、製造、運輸和回收的每個環節都考慮環境影響。我們已經成功將碳排放量減少了 60%，並計劃在 2030 年前達到完全碳中和。
          </p>
          <div class="env-stats">
            <div class="stat">
              <div class="stat-value">60%</div>
              <div class="stat-label">碳排放減少</div>
            </div>
            <div class="stat">
              <div class="stat-value">100%</div>
              <div class="stat-label">可再生能源</div>
            </div>
            <div class="stat">
              <div class="stat-value">95%</div>
              <div class="stat-label">回收率</div>
            </div>
          </div>
        </div>
        
        <div class="stats-visual">
          <div class="stat-circle">
            <svg viewBox="0 0 100 100">
              <circle class="bg" cx="50" cy="50" r="45"></circle>
              <circle class="bar" cx="50" cy="50" r="45"></circle>
            </svg>
            <div class="number">98%</div>
            <div class="label">環保認證</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Sustainability Initiatives -->
    <section class="sustainability-initiatives">
      <div class="container">
        <h2>永續發展計畫</h2>
        <div class="initiatives-grid">
          <div class="initiative-card glass">
            <div class="icon">🌱</div>
            <h3>綠色製造</h3>
            <p>
              所有生產設施均採用 100% 可再生能源。我們投資於先進的污水處理系統，確保零污染排放。
            </p>
            <div class="initiative-stats">
              <span>100% 可再生能源</span>
              <span>零污染排放</span>
            </div>
          </div>
          
          <div class="initiative-card glass">
            <div class="icon">♻️</div>
            <h3>循環經濟</h3>
            <p>
              設計可拆卸的產品結構，方便回收和升級。已建立全球回收網絡，確保 95% 的材料被回收利用。
            </p>
            <div class="initiative-stats">
              <span>95% 回收率</span>
              <span>全球回收網絡</span>
            </div>
          </div>
          
          <div class="initiative-card glass">
            <div class="icon">🌍</div>
            <h3>碳抵消計畫</h3>
            <p>
              每售出一件產品，LUMINA 投資於全球植樹計畫。已種植超過 100 萬棵樹，相當於抵消 50 萬噸 CO2。
            </p>
            <div class="initiative-stats">
              <span>100 萬棵樹</span>
              <span>50 萬噸 CO2 抵消</span>
            </div>
          </div>
          
          <div class="initiative-card glass">
            <div class="icon">💧</div>
            <h3>水資源保護</h3>
            <p>
              採用先進的水循環利用技術，生產用水減少 80%。支持全球水資源保護項目。
            </p>
            <div class="initiative-stats">
              <span>80% 用水減少</span>
              <span>水資源保護基金</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Environmental Certifications -->
    <section class="certifications">
      <div class="container">
        <h2>環保認證</h2>
        <p class="section-desc">LUMINA 獲得了全球最嚴格的環保認證，證明我們對永續發展的承諾。</p>
        
        <div class="certifications-grid">
          <div class="cert-item glass">
            <div class="cert-icon">🏅</div>
            <h3>ISO 14001</h3>
            <p>環境管理體系認證</p>
            <p class="cert-year">2020 年獲得</p>
          </div>
          
          <div class="cert-item glass">
            <div class="cert-icon">🌿</div>
            <h3>B Corp 認證</h3>
            <p>社會和環境績效認證</p>
            <p class="cert-year">2021 年獲得</p>
          </div>
          
          <div class="cert-item glass">
            <div class="cert-icon">🔋</div>
            <h3>碳中和認證</h3>
            <p>產品生命週期碳中和</p>
            <p class="cert-year">2022 年獲得</p>
          </div>
          
          <div class="cert-item glass">
            <div class="cert-icon">♻️</div>
            <h3>搖籃到搖籃</h3>
            <p>完全可回收設計認證</p>
            <p class="cert-year">2023 年獲得</p>
          </div>
          
          <div class="cert-item glass">
            <div class="cert-icon">🌍</div>
            <h3>UN SDG 認可</h3>
            <p>聯合國永續發展目標</p>
            <p class="cert-year">2023 年獲得</p>
          </div>
          
          <div class="cert-item glass">
            <div class="cert-icon">⭐</div>
            <h3>EarthCheck Gold</h3>
            <p>全球最高環保評級</p>
            <p class="cert-year">2024 年獲得</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Supply Chain Transparency -->
    <section class="supply-chain">
      <div class="container">
        <h2>供應鏈透明度</h2>
        <p class="section-desc">
          我們相信透明度是建立信任的基礎。所有供應商都必須符合我們的環保和道德標準。
        </p>
        
        <div class="supply-chain-info">
          <div class="info-card glass">
            <h3>供應商審計</h3>
            <p>每年對所有供應商進行環保和勞動條件審計，確保符合國際標準。</p>
            <div class="metric">100% 審計覆蓋率</div>
          </div>
          
          <div class="info-card glass">
            <h3>道德採購</h3>
            <p>確保所有原材料來自道德和合法的來源，支持公平貿易實踐。</p>
            <div class="metric">100% 道德認證</div>
          </div>
          
          <div class="info-card glass">
            <h3>本地採購</h3>
            <p>優先採購本地供應商，減少運輸距離和碳足跡，支持當地經濟。</p>
            <div class="metric">60% 本地採購</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Environmental Goals -->
    <section class="environmental-goals">
      <div class="container">
        <h2>2030 年環保目標</h2>
        <div class="goals-timeline">
          <div class="goal-item">
            <div class="goal-year">2025</div>
            <div class="goal-content glass">
              <h3>達成 80% 碳減排</h3>
              <p>相比 2020 年基準，實現 80% 的碳排放減少</p>
            </div>
          </div>
          
          <div class="goal-item">
            <div class="goal-year">2026</div>
            <div class="goal-content glass">
              <h3>100% 可再生能源</h3>
              <p>所有設施完全使用可再生能源</p>
            </div>
          </div>
          
          <div class="goal-item">
            <div class="goal-year">2027</div>
            <div class="goal-content glass">
              <h3>零廢棄物製造</h3>
              <p>實現生產過程中的零廢棄物目標</p>
            </div>
          </div>
          
          <div class="goal-item">
            <div class="goal-year">2028</div>
            <div class="goal-content glass">
              <h3>完全循環經濟</h3>
              <p>100% 的產品設計為可回收或可生物降解</p>
            </div>
          </div>
          
          <div class="goal-item">
            <div class="goal-year">2029</div>
            <div class="goal-content glass">
              <h3>供應鏈碳中和</h3>
              <p>整個供應鏈實現碳中和</p>
            </div>
          </div>
          
          <div class="goal-item">
            <div class="goal-year">2030</div>
            <div class="goal-content glass">
              <h3>完全碳中和</h3>
              <p>LUMINA 成為完全碳中和的科技公司</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Call to Action -->
    <section class="env-cta">
      <div class="container">
        <h2>加入我們的綠色革命</h2>
        <p>選擇 LUMINA，就是選擇為地球的未來投資。</p>
        <button class="btn-primary btn-large">了解更多環保計畫</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.env {
  background: #fff;
}

/* Hero Section */
.env-hero {
  padding: 150px 0;
  background: linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%);
  text-align: center;
}

.env-hero h1 {
  font-size: 64px;
  margin-bottom: 30px;
  font-weight: 800;
}

.hero-sub {
  font-size: 22px;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
}

/* Environment Content */
.env-content {
  padding: 100px 0;
}

.split {
  display: flex;
  align-items: center;
  gap: 100px;
}

.side-text {
  flex: 1;
}

.side-text h2 {
  font-size: 56px;
  margin-bottom: 30px;
  font-weight: 800;
}

.side-text p {
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 40px;
}

.env-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.stat {
  text-align: center;
}

.stat-value {
  font-size: 36px;
  font-weight: 800;
  color: var(--accent);
  margin-bottom: 10px;
}

.stat-label {
  font-size: 14px;
  color: var(--text-secondary);
  font-weight: 600;
}

.stats-visual {
  flex: 1;
  position: relative;
  width: 300px;
  height: 300px;
}

.stat-circle {
  position: relative;
  width: 100%;
  height: 100%;
}

svg {
  transform: rotate(-90deg);
}

.bg {
  fill: none;
  stroke: #f1f5f9;
  stroke-width: 8;
}

.bar {
  fill: none;
  stroke: #00d4ff;
  stroke-width: 8;
  stroke-dasharray: 283;
  stroke-dashoffset: 20;
  stroke-linecap: round;
}

.number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  font-weight: 800;
}

.label {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--text-secondary);
  font-weight: 600;
}

/* Sustainability Initiatives */
.sustainability-initiatives {
  padding: 100px 0;
  background: linear-gradient(135deg, rgba(0, 102, 204, 0.05) 0%, rgba(0, 212, 255, 0.05) 100%);
}

.sustainability-initiatives h2 {
  font-size: 48px;
  margin-bottom: 60px;
  text-align: center;
  font-weight: 800;
}

.initiatives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.initiative-card {
  padding: 40px;
  border-radius: 30px;
  transition: 0.3s;
  text-align: center;
}

.initiative-card:hover {
  transform: translateY(-10px);
}

.icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.initiative-card h3 {
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: 700;
}

.initiative-card p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 20px;
  font-size: 15px;
}

.initiative-stats {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.initiative-stats span {
  font-size: 13px;
  font-weight: 700;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Certifications */
.certifications {
  padding: 100px 0;
}

.certifications h2 {
  font-size: 48px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 800;
}

.section-desc {
  text-align: center;
  color: var(--text-secondary);
  font-size: 18px;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.cert-item {
  padding: 40px;
  border-radius: 30px;
  text-align: center;
  transition: 0.3s;
}

.cert-item:hover {
  transform: translateY(-5px);
}

.cert-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.cert-item h3 {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 700;
}

.cert-item p {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.cert-year {
  font-size: 12px;
  color: var(--accent);
  font-weight: 700;
  text-transform: uppercase;
}

/* Supply Chain */
.supply-chain {
  padding: 100px 0;
  background: linear-gradient(135deg, rgba(0, 102, 204, 0.03) 0%, rgba(0, 212, 255, 0.03) 100%);
}

.supply-chain h2 {
  font-size: 48px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 800;
}

.supply-chain-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.info-card {
  padding: 40px;
  border-radius: 30px;
  transition: 0.3s;
}

.info-card:hover {
  transform: translateY(-5px);
}

.info-card h3 {
  font-size: 22px;
  margin-bottom: 15px;
  font-weight: 700;
}

.info-card p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 20px;
  font-size: 15px;
}

.metric {
  font-weight: 700;
  color: var(--accent);
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Environmental Goals */
.environmental-goals {
  padding: 100px 0;
}

.environmental-goals h2 {
  font-size: 48px;
  margin-bottom: 80px;
  text-align: center;
  font-weight: 800;
}

.goals-timeline {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.goal-item {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.goal-year {
  font-size: 32px;
  font-weight: 800;
  color: var(--accent);
}

.goal-content {
  padding: 30px;
  border-radius: 20px;
  transition: 0.3s;
}

.goal-content:hover {
  transform: translateY(-5px);
}

.goal-content h3 {
  font-size: 20px;
  margin-bottom: 12px;
  font-weight: 700;
}

.goal-content p {
  font-size: 14px;
  color: var(--text-secondary);
}

/* CTA Section */
.env-cta {
  padding: 100px 0;
  background: linear-gradient(135deg, #0066cc 0%, #00d4ff 100%);
  text-align: center;
  color: #fff;
}

.env-cta h2 {
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: 800;
}

.env-cta p {
  font-size: 20px;
  margin-bottom: 40px;
  opacity: 0.95;
}

.btn-large {
  padding: 16px 48px;
  font-size: 16px;
}

.env-cta .btn-primary {
  background: #fff;
  color: var(--accent);
}

.env-cta .btn-primary:hover {
  background: rgba(255, 255, 255, 0.9);
}

@media (max-width: 768px) {
  .env-hero h1 {
    font-size: 36px;
  }
  
  .split {
    flex-direction: column;
    gap: 60px;
  }
  
  .side-text h2 {
    font-size: 36px;
  }
  
  .env-stats {
    grid-template-columns: 1fr;
  }
  
  .sustainability-initiatives h2,
  .certifications h2,
  .supply-chain h2,
  .environmental-goals h2,
  .env-cta h2 {
    font-size: 32px;
  }
  
  .goals-timeline {
    grid-template-columns: 1fr;
  }
}
</style>
