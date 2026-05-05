<template>
  <div class="eco-container">
    <!-- 頂部標語 -->
    <section
      class="eco-hero"
      v-motion-fade
    >
      <h1>配件與擴充</h1>
      <p>每一件配件都是為了強化您的 Nexus 體驗而生[cite: 6]。</p>
    </section>

    <!-- 產品矩陣 -->
    <div class="products-grid">
      <div
        v-for="item in accessories"
        :key="item.id"
        class="item-card glass"
        v-motion-slide-visible-bottom
      >
        <div class="image-area">
          <div
            class="badge"
            v-if="item.isNew"
          >
            NEW
          </div>
          <div
            class="placeholder-img"
            :style="{ background: item.color }"
          ></div>
        </div>

        <div class="content-area">
          <div class="type-tag">{{ item.type }}</div>
          <h3>{{ item.name }}</h3>
          <p class="desc">{{ item.desc }}</p>

          <div class="footer">
            <span class="price">{{ item.price }}</span>
            <button
              class="cart-btn"
              @click="addToCart($event, item)"
            >
              <span v-if="item.loading">處理中...</span>
              <span v-else>加入購物車</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 浮動購物車狀態 -->
    <div
      class="cart-status glass"
      v-if="cartCount > 0"
      v-motion-slide-right
    >
      🛒 已加入 {{ cartCount }} 件商品
      <button class="checkout-btn">結帳</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { gsap } from "gsap";

const cartCount = ref(0);

const accessories = ref([
  {
    id: 1,
    name: "Omni-Dock Station",
    type: "連接介面",
    isNew: true,
    desc: "支持 100Gbps 超高速傳輸與 6G 通訊[cite: 7]",
    price: "NT$ 12,800",
    color: "#eef2f6",
    loading: false,
  },
  {
    id: 2,
    name: "Nexus Travel Case",
    type: "保護配件",
    isNew: false,
    desc: "100% 永續生物材料製作[cite: 1, 2]",
    price: "NT$ 2,500",
    color: "#fdfcf0",
    loading: false,
  },
  {
    id: 3,
    name: "Quantum Key S1",
    type: "安全模組",
    isNew: true,
    desc: "實體量子加密備援密鑰[cite: 5]",
    price: "NT$ 4,900",
    color: "#f8f0ff",
    loading: false,
  },
]);

const addToCart = (event: MouseEvent, item: any) => {
  item.loading = true;

  // 模擬加入購物車的按鈕動畫
  const el = event.currentTarget as HTMLElement;
  gsap.to(el, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 });

  setTimeout(() => {
    item.loading = false;
    cartCount.value++;

    // 簡單的物理掉落動畫效果
    const ball = document.createElement("div");
    ball.className = "cart-ball";
    ball.style.left = `${event.clientX}px`;
    ball.style.top = `${event.clientY}px`;
    document.body.appendChild(ball);

    gsap.to(ball, {
      x: window.innerWidth - 100,
      y: window.innerHeight - 50,
      opacity: 0,
      duration: 0.8,
      onComplete: () => ball.remove(),
    });
  }, 600);
};
</script>

<style scoped>
.eco-container {
  padding: 120px 5% 60px;
  background: #fbfbfd;
  min-height: 100vh;
}
.eco-hero {
  text-align: center;
  margin-bottom: 60px;
}
.eco-hero h1 {
  font-size: 3.5rem;
  letter-spacing: -2px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}
.item-card {
  border-radius: 32px;
  padding: 20px;
  transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.item-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  border-color: #0066cc;
}

.image-area {
  height: 240px;
  border-radius: 20px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
}
.placeholder-img {
  width: 100%;
  height: 100%;
}
.badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background: #0066cc;
  color: white;
  padding: 4px 12px;
  border-radius: 10px;
  font-size: 0.8rem;
}

.type-tag {
  color: #86868b;
  font-size: 0.9rem;
  margin-bottom: 8px;
}
.price {
  font-size: 1.4rem;
  font-weight: 600;
}

.cart-btn {
  background: #f5f5f7;
  border: none;
  padding: 12px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.3s;
}
.cart-btn:hover {
  background: #e8e8ed;
}

.cart-status {
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 20px 30px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
.checkout-btn {
  background: #000;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
}

:deep(.cart-ball) {
  position: fixed;
  width: 20px;
  height: 20px;
  background: #0066cc;
  border-radius: 50%;
  z-index: 9999;
  pointer-events: none;
}
</style>
