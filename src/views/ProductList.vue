<template>
  <div class="product-list container">
    <div class="header">
      <h1>LUMINA 產品系列</h1>
      <p>探索我們全系列的光子計算設備，從個人終端到企業級伺服器。</p>
    </div>

    <div class="products-grid">
      <div v-for="product in products" :key="product.id" class="product-card glass">
        <div class="product-image">
          <div class="placeholder-img" :style="{ background: product.color }"></div>
        </div>
        <div class="product-info">
          <div class="product-tag">{{ product.category }}</div>
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <div class="product-footer">
            <span class="price">{{ product.price }}</span>
            <router-link to="/specs" class="view-specs">查看規格</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const products = [
  {
    id: 1,
    name: "Nexus Standard",
    category: "個人終端",
    description: "平衡性能與便攜性的入門級光子計算設備。",
    price: "NT$ 29,900",
    color: "linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)"
  },
  {
    id: 2,
    name: "Nexus Pro",
    category: "專業創作",
    description: "為創意專業人士設計，提供卓越的處理能力。",
    price: "NT$ 45,900",
    color: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)"
  },
  {
    id: 3,
    name: "Nexus Ultra",
    category: "旗艦效能",
    description: "極致性能的巔峰，搭載最強大的光子處理器。",
    price: "NT$ 68,900",
    color: "linear-gradient(135deg, #09203f 0%, #537895 100%)"
  },
  {
    id: 4,
    name: "Nexus Air",
    category: "輕薄便攜",
    description: "極致輕薄設計，適合隨時隨地的行動辦公。",
    price: "NT$ 32,900",
    color: "linear-gradient(135deg, #e6e9f0 0%, #eef1f5 100%)"
  },
  {
    id: 5,
    name: "Nexus Studio",
    category: "工作站",
    description: "桌上型強大效能，專為 3D 渲染與 AI 訓練打造。",
    price: "NT$ 89,900",
    color: "linear-gradient(135deg, #434343 0%, #000000 100%)"
  },
  {
    id: 6,
    name: "Nexus Mini",
    category: "精巧終端",
    description: "小巧玲瓏但不失強大，完美的家庭中心。",
    price: "NT$ 19,900",
    color: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
  },
  {
    id: 7,
    name: "Nexus Enterprise",
    category: "企業級",
    description: "具備最高安全等級與冗餘系統的企業解決方案。",
    price: "NT$ 129,900",
    color: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"
  },
  {
    id: 8,
    name: "Nexus Edge",
    category: "邊緣計算",
    description: "專為物聯網與邊緣計算設計的低功耗設備。",
    price: "NT$ 15,900",
    color: "linear-gradient(135deg, #0ba360 0%, #3cba92 100%)"
  },
  {
    id: 9,
    name: "Nexus Quantum",
    category: "實驗性",
    description: "首款搭載量子糾纏通信模組的未來原型機。",
    price: "NT$ 199,900",
    color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    id: 10,
    name: "Nexus Go",
    category: "行動手持",
    description: "將光子計算的力量放進口袋，隨時連接未來。",
    price: "NT$ 24,900",
    color: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)"
  }
];
</script>

<style scoped>
.product-list {
  padding: 150px 0;
}

.header {
  text-align: center;
  margin-bottom: 80px;
}

.header h1 {
  font-size: 64px;
  font-weight: 800;
  margin-bottom: 20px;
}

.header p {
  font-size: 20px;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.product-card {
  border-radius: 30px;
  overflow: hidden;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-10px);
}

.product-image {
  height: 200px;
  padding: 20px;
}

.placeholder-img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

.product-info {
  padding: 30px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.product-tag {
  display: inline-block;
  padding: 4px 12px;
  background: var(--accent-soft);
  color: var(--accent);
  border-radius: 12px;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 15px;
  width: fit-content;
}

.product-info h3 {
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 700;
}

.product-info p {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.price {
  font-size: 18px;
  font-weight: 800;
  color: var(--accent);
}

.view-specs {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: 0.3s;
}

.view-specs:hover {
  color: var(--accent);
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 36px;
  }
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>
