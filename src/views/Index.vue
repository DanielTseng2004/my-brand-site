<template>
  <div class="index-page">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    
    <!-- Hero Section -->
    <section class="hero container">
      <div class="hero-content">
        <div class="badge">次世代光子技術</div>
        <h1>
          智能光子<br />
          <span class="text-gradient">無限可能</span>
        </h1>
        <p class="hero-sub">
          LUMINA Nexus 是革命性的光子處理平台，結合先進的量子感測與 6G 連接技術，為您的未來賦能。
        </p>
        <div class="hero-btns">
          <button class="btn-primary">探索 Nexus Pro</button>
          <button class="btn-text">觀看演示 <span>→</span></button>
        </div>
      </div>
      <div class="hero-data">
        <div class="data-card glass">
          <span class="val">0.01ms</span>
          <span class="lab">超低延遲</span>
        </div>
        <div class="data-card glass">
          <span class="val">100%</span>
          <span class="lab">能源效率</span>
        </div>
      </div>
    </section>
    
    <!-- Core Advantages -->
    <section class="advantages">
      <div class="container">
        <div class="section-header">
          <span class="label">核心優勢</span>
          <h2>為什麼選擇 LUMINA</h2>
        </div>
        <div class="advantages-grid">
          <div class="advantage-card glass">
            <div class="icon">⚡</div>
            <h3>極速性能</h3>
            <p>業界領先的處理速度，0.01ms 超低延遲，實現即時響應。</p>
            <div class="metric">800% 更快</div>
          </div>
          <div class="advantage-card glass">
            <div class="icon">🔋</div>
            <h3>能源高效</h3>
            <p>革命性的能源管理系統，降低功耗 95%，延長使用壽命。</p>
            <div class="metric">0.5W 功耗</div>
          </div>
          <div class="advantage-card glass">
            <div class="icon">🛡️</div>
            <h3>量子安全</h3>
            <p>採用量子加密技術，提供軍事級別的數據保護。</p>
            <div class="metric">256-bit 加密</div>
          </div>
          <div class="advantage-card glass">
            <div class="icon">🌍</div>
            <h3>環保永續</h3>
            <p>100% 可回收材料，碳中和製造，致力於綠色未來。</p>
            <div class="metric">ISO 14001</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Scenarios Section -->
    <section class="scenarios bg-white">
      <div class="container split">
        <div class="side-text">
          <span class="label">應用場景</span>
          <h2>
            無限應用<br />
            無處不在
          </h2>
          <p>
            LUMINA Nexus 的多功能設計適用於各種行業，從智能城市到醫療診斷，從工業自動化到消費電子。
          </p>
          <ul class="feature-list">
            <li>智能城市基礎設施</li>
            <li>醫療影像與診斷</li>
            <li>工業物聯網監控</li>
            <li>自主駕駛系統</li>
            <li>增強現實體驗</li>
          </ul>
        </div>
        <div class="side-visual glass">
          <div class="placeholder-art">
            <div class="visual-element element-1"></div>
            <div class="visual-element element-2"></div>
            <div class="visual-element element-3"></div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="testimonials">
      <div class="container">
        <div class="section-header">
          <span class="label">客戶見證</span>
          <h2>業界領袖的信任</h2>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card glass">
            <div class="stars">★★★★★</div>
            <p class="quote">
              "LUMINA 的技術完全改變了我們的業務流程，效率提升了 3 倍，成本降低了 40%。"
            </p>
            <div class="author">
              <div class="avatar">TK</div>
              <div class="author-info">
                <div class="name">田中健一</div>
                <div class="title">首席技術官 - TechCorp Japan</div>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card glass">
            <div class="stars">★★★★★</div>
            <p class="quote">
              "在醫療診斷領域，LUMINA 的精確度和速度無與倫比。我們已經幫助了數千名患者。"
            </p>
            <div class="author">
              <div class="avatar">SM</div>
              <div class="author-info">
                <div class="name">Sarah Miller</div>
                <div class="title">醫學博士 - Global Health Institute</div>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card glass">
            <div class="stars">★★★★★</div>
            <p class="quote">
              "LUMINA 的環保承諾與卓越性能相結合，正是我們尋找的合作夥伴。"
            </p>
            <div class="author">
              <div class="avatar">LW</div>
              <div class="author-info">
                <div class="name">李偉</div>
                <div class="title">永續發展總監 - GreenTech Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>準備好體驗未來了嗎？</h2>
        <p>加入全球數千家企業，選擇 LUMINA 作為您的創新夥伴。</p>
        <div class="cta-buttons">
          <button class="btn-primary btn-large">立即開始免費試用</button>
          <button class="btn-secondary btn-large">預約產品演示</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.index-page {
  position: relative;
  padding-top: 120px;
  overflow: hidden;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  z-index: -1;
  opacity: 0.4;
}

.blob-1 {
  width: 500px;
  height: 500px;
  background: #00d4ff;
  top: -100px;
  right: -100px;
}

.blob-2 {
  width: 600px;
  height: 600px;
  background: #0066cc;
  bottom: 10%;
  left: -200px;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80vh;
  gap: 60px;
}

.hero-content {
  max-width: 650px;
}

.badge {
  background: var(--accent-soft);
  color: var(--accent);
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 12px;
  display: inline-block;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

h1 {
  font-size: 90px;
  line-height: 1.05;
  font-weight: 800;
  margin-bottom: 24px;
  letter-spacing: -2px;
}

.hero-sub {
  font-size: 22px;
  color: var(--text-secondary);
  margin-bottom: 40px;
  line-height: 1.6;
}

.hero-btns {
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
}

.btn-primary {
  background: var(--accent);
  color: #fff;
  border: none;
  padding: 18px 40px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-primary:hover {
  background: #0052a3;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 102, 204, 0.3);
}

.btn-secondary {
  background: rgba(0, 102, 204, 0.1);
  color: var(--accent);
  border: 2px solid var(--accent);
  padding: 16px 40px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-secondary:hover {
  background: var(--accent);
  color: #fff;
}

.btn-text {
  background: transparent;
  border: none;
  color: var(--accent);
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.btn-text:hover {
  transform: translateX(5px);
}

.btn-text span {
  margin-left: 5px;
}

.btn-large {
  padding: 16px 48px;
  font-size: 16px;
}

.hero-data {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.data-card {
  padding: 30px;
  border-radius: 24px;
  text-align: center;
  min-width: 180px;
  transition: 0.3s;
}

.data-card:hover {
  transform: translateY(-5px);
}

.data-card .val {
  display: block;
  font-size: 32px;
  font-weight: 800;
  color: var(--accent);
  margin-bottom: 8px;
}

.data-card .lab {
  font-size: 14px;
  color: var(--text-secondary);
}

/* Advantages Section */
.advantages {
  padding: 120px 0;
  background: linear-gradient(135deg, rgba(0, 102, 204, 0.05) 0%, rgba(0, 212, 255, 0.05) 100%);
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-header .label {
  display: inline-block;
  background: var(--accent-soft);
  color: var(--accent);
  padding: 6px 14px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 12px;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.section-header h2 {
  font-size: 56px;
  font-weight: 800;
  margin: 0;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.advantage-card {
  padding: 40px;
  border-radius: 30px;
  transition: 0.3s;
}

.advantage-card:hover {
  transform: translateY(-10px);
}

.advantage-card .icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.advantage-card h3 {
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: 700;
}

.advantage-card p {
  color: var(--text-secondary);
  line-height: 1.6;
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

/* Scenarios Section */
.scenarios {
  padding: 120px 0;
  background: #fff;
}

.bg-white {
  background: #fff;
}

.split {
  display: flex;
  gap: 100px;
  align-items: center;
}

.side-text {
  flex: 1;
}

.side-text h2 {
  font-size: 56px;
  margin: 20px 0;
  font-weight: 800;
}

.side-text p {
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 30px;
}

.feature-list {
  list-style: none;
  margin-top: 30px;
}

.feature-list li {
  margin-bottom: 16px;
  font-weight: 600;
  padding-left: 30px;
  position: relative;
  font-size: 16px;
}

.feature-list li::before {
  content: "✓";
  color: var(--accent);
  position: absolute;
  left: 0;
  font-size: 20px;
  font-weight: 800;
}

.side-visual {
  flex: 1;
  height: 500px;
  border-radius: 40px;
  background: linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%);
  position: relative;
  overflow: hidden;
}

.placeholder-art {
  width: 100%;
  height: 100%;
  position: relative;
}

.visual-element {
  position: absolute;
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.element-1 {
  width: 120px;
  height: 120px;
  background: rgba(0, 102, 204, 0.3);
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.element-2 {
  width: 80px;
  height: 80px;
  background: rgba(0, 212, 255, 0.3);
  top: 60%;
  right: 15%;
  animation-delay: 1s;
}

.element-3 {
  width: 100px;
  height: 100px;
  background: rgba(0, 102, 204, 0.2);
  bottom: 10%;
  left: 30%;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Testimonials Section */
.testimonials {
  padding: 120px 0;
  background: linear-gradient(135deg, rgba(0, 102, 204, 0.03) 0%, rgba(0, 212, 255, 0.03) 100%);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.testimonial-card {
  padding: 40px;
  border-radius: 30px;
  transition: 0.3s;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}

.stars {
  color: #fbbf24;
  font-size: 14px;
  margin-bottom: 15px;
  letter-spacing: 2px;
}

.quote {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 25px;
  font-style: italic;
}

.author {
  display: flex;
  align-items: center;
  gap: 15px;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--grad-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
}

.author-info {
  flex: 1;
}

.name {
  font-weight: 700;
  color: #000;
  margin-bottom: 4px;
}

.title {
  font-size: 13px;
  color: var(--text-secondary);
}

/* CTA Section */
.cta-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #0066cc 0%, #00d4ff 100%);
  text-align: center;
  color: #fff;
}

.cta-section h2 {
  font-size: 56px;
  margin-bottom: 20px;
  font-weight: 800;
}

.cta-section p {
  font-size: 20px;
  margin-bottom: 40px;
  opacity: 0.95;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-section .btn-primary {
  background: #fff;
  color: var(--accent);
}

.cta-section .btn-primary:hover {
  background: rgba(255, 255, 255, 0.9);
}

.cta-section .btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  border-color: #fff;
}

.cta-section .btn-secondary:hover {
  background: #fff;
  color: var(--accent);
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    min-height: auto;
    padding: 60px 0;
  }
  
  h1 {
    font-size: 48px;
  }
  
  .split {
    flex-direction: column;
    gap: 60px;
  }
  
  .side-visual {
    height: 300px;
  }
  
  .section-header h2 {
    font-size: 36px;
  }
  
  .cta-section h2 {
    font-size: 36px;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .btn-large {
    width: 100%;
  }
}
</style>
