<template>
  <footer class="footer">
    <div class="footer-content container">
      <div class="footer-section">
        <h3>LUMINA</h3>
        <p>次世代光子技術領導者，致力於創新與永續發展。</p>
        <div class="social-links">
          <a
            href="#"
            class="social-icon"
            title="LinkedIn"
          >
            <Linkedin :size="18" />
          </a>
          <a
            href="#"
            class="social-icon"
            title="Twitter"
          >
            <Twitter :size="18" />
          </a>
          <a
            href="#"
            class="social-icon"
            title="GitHub"
          >
            <Github :size="18" />
          </a>
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
import { Linkedin, Twitter, Github } from "lucide-vue-next";
</script>

<style scoped>
.footer {
  background: var(--bg-main);
  color: var(--text-secondary);
  padding: 80px 0 0;
  margin-top: 120px;
  border-top: 1px solid var(--border);
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
  color: var(--text-primary);
}

.footer-section h4 {
  font-size: 16px;
  margin-bottom: 20px;
  color: var(--text-primary);
  font-weight: 600;
}

.footer-section p {
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.footer-section ul {
  list-style: none;
}

.footer-section li {
  margin-bottom: 12px;
}

.footer-section a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: 0.3s;
  font-size: 14px;
}

.footer-section a:hover {
  color: var(--accent);
}

.dark .footer-section a {
  color: var(--text-secondary);
}

.dark .footer-section a:hover {
  color: var(--accent);
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--accent-soft);
  border-radius: 50%;
  color: var(--accent);
  transition: all var(--transition-normal);
  border: 1px solid var(--border);
}

.social-icon:hover {
  background: var(--accent);
  color: white;
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 102, 204, 0.2);
}

.dark .social-icon {
  background: rgba(56, 189, 248, 0.1);
  color: var(--accent);
  border-color: rgba(56, 189, 248, 0.2);
}

.dark .social-icon:hover {
  background: var(--accent);
  color: var(--bg-main);
  box-shadow: 0 8px 16px rgba(56, 189, 248, 0.3);
}

.footer-bottom {
  border-top: 1px solid var(--border);
  padding: 30px 0;
}

.footer-bottom .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom p {
  font-size: 14px;
  color: var(--text-secondary);
}

.certifications {
  display: flex;
  gap: 15px;
}

.cert-badge {
  font-size: 12px;
  padding: 6px 12px;
  background: var(--accent-soft);
  border: 1px solid rgba(0, 102, 204, 0.2);
  border-radius: 20px;
  color: var(--accent);
  transition: all var(--transition-fast);
}

.cert-badge:hover {
  background: var(--accent);
  color: white;
}

.dark .cert-badge {
  background: rgba(56, 189, 248, 0.1);
  border-color: rgba(56, 189, 248, 0.2);
  color: var(--accent);
}

.dark .cert-badge:hover {
  background: var(--accent);
  color: var(--bg-main);
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
