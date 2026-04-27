<template>
  <footer class="footer">
    <div class="footer-content container">
      <div class="footer-section">
        <h3>LUMINA</h3>
        <p>次世代光子技術領導者，致力於創新與永續發展。</p>
        <div class="social-links">
          <a href="#" class="social-icon">LinkedIn</a>
          <a href="#" class="social-icon">Twitter</a>
          <a href="#" class="social-icon">GitHub</a>
        </div>
      </div>
      
      <div class="footer-section">
        <h4>產品</h4>
        <ul>
          <li><a href="/specs">Nexus Pro</a></li>
          <li><a href="/specs">Nexus Ultra</a></li>
          <li><a href="/innovation">技術規格</a></li>
          <li><a href="#faq">常見問題</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>公司</h4>
        <ul>
          <li><a href="#about">關於我們</a></li>
          <li><a href="#careers">職業機會</a></li>
          <li><a href="#press">新聞中心</a></li>
          <li><a href="#contact">聯絡我們</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>法律</h4>
        <ul>
          <li><a href="#privacy">隱私政策</a></li>
          <li><a href="#terms">服務條款</a></li>
          <li><a href="#cookies">Cookie 設定</a></li>
          <li><a href="#compliance">合規聲明</a></li>
        </ul>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="container">
        <p>&copy; 2026 LUMINA Technologies. All rights reserved.</p>
        <div class="certifications">
          <span class="cert-badge">ISO 9001</span>
          <span class="cert-badge">ISO 14001</span>
          <span class="cert-badge">CE Certified</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
  background: #0f172a;
  color: #e2e8f0;
  padding: 80px 0 0;
  margin-top: 120px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 60px;
  padding: 60px 0;
}

.footer-section h3 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
}

.footer-section h4 {
  font-size: 16px;
  margin-bottom: 20px;
  color: #fff;
  font-weight: 600;
}

.footer-section p {
  font-size: 15px;
  line-height: 1.6;
  color: #94a3b8;
  margin-bottom: 20px;
}

.footer-section ul {
  list-style: none;
}

.footer-section li {
  margin-bottom: 12px;
}

.footer-section a {
  color: #94a3b8;
  text-decoration: none;
  transition: 0.3s;
  font-size: 14px;
}

.footer-section a:hover {
  color: #00d4ff;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  transition: 0.3s;
}

.social-icon:hover {
  background: rgba(0, 212, 255, 0.2);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 30px 0;
}

.footer-bottom .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom p {
  font-size: 14px;
  color: #64748b;
}

.certifications {
  display: flex;
  gap: 15px;
}

.cert-badge {
  font-size: 12px;
  padding: 6px 12px;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 20px;
  color: #00d4ff;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .footer-bottom .container {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
}
</style>
