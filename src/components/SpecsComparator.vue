<template>
  <div class="specs-comparator">
    <div class="comparator-header">
      <h3>產品規格對比</h3>
      <div class="toggle-buttons">
        <button 
          v-for="model in models" 
          :key="model"
          :class="['toggle-btn', { active: selectedModels.includes(model) }]"
          @click="toggleModel(model)"
        >
          {{ model }}
        </button>
      </div>
    </div>
    
    <div class="comparison-table glass">
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>規格項目</th>
              <th v-for="model in selectedModels" :key="model">{{ model }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(spec, index) in specs" :key="index">
              <td class="spec-name">{{ spec.name }}</td>
              <td v-for="model in selectedModels" :key="model" class="spec-value">
                {{ spec.values[model] }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const models = [
  "Nexus Standard", "Nexus Pro", "Nexus Ultra", "Nexus Air", 
  "Nexus Studio", "Nexus Mini", "Nexus Enterprise", "Nexus Edge", 
  "Nexus Quantum", "Nexus Go"
];

const selectedModels = ref(["Nexus Standard", "Nexus Pro", "Nexus Ultra"]);

const specs = [
  {
    name: "處理器",
    values: {
      "Nexus Standard": "Photon S3 (8 Core)",
      "Nexus Pro": "Photon S3 Pro (12 Core)",
      "Nexus Ultra": "Photon S3 Pro (16 Core)",
      "Nexus Air": "Photon S3 Lite (6 Core)",
      "Nexus Studio": "Photon S3 Max (32 Core)",
      "Nexus Mini": "Photon S3 Nano (4 Core)",
      "Nexus Enterprise": "Photon S3 Server (64 Core)",
      "Nexus Edge": "Photon S3 IoT (2 Core)",
      "Nexus Quantum": "Photon Q1 (Quantum Hybrid)",
      "Nexus Go": "Photon S3 Mobile (4 Core)"
    }
  },
  {
    name: "連接技術",
    values: {
      "Nexus Standard": "6G / Quantum Link",
      "Nexus Pro": "6G / Quantum Link + Multi-Band",
      "Nexus Ultra": "6G / Quantum Link + Multi-Band Pro",
      "Nexus Air": "6G / WiFi 7",
      "Nexus Studio": "100G Fiber / 6G",
      "Nexus Mini": "5G / WiFi 6E",
      "Nexus Enterprise": "Dual 100G / Satellite Link",
      "Nexus Edge": "Zigbee / LoRa / 5G",
      "Nexus Quantum": "Entanglement Link / 6G",
      "Nexus Go": "5G / 6G / Satellite"
    }
  },
  {
    name: "感測網格",
    values: {
      "Nexus Standard": "Standard Mesh",
      "Nexus Pro": "Pro High-Density Grid",
      "Nexus Ultra": "Ultra Premium Grid",
      "Nexus Air": "Lightweight Mesh",
      "Nexus Studio": "Precision Studio Grid",
      "Nexus Mini": "Compact Mesh",
      "Nexus Enterprise": "Industrial Grade Grid",
      "Nexus Edge": "Distributed Sensor Link",
      "Nexus Quantum": "Quantum State Observer",
      "Nexus Go": "Mobile Optimized Grid"
    }
  },
  {
    name: "防水等級",
    values: {
      "Nexus Standard": "IP68 (50m)",
      "Nexus Pro": "IP68 (75m)",
      "Nexus Ultra": "IP69K (100m)",
      "Nexus Air": "IP67",
      "Nexus Studio": "N/A (Indoor)",
      "Nexus Mini": "IP65",
      "Nexus Enterprise": "IP68 (Industrial)",
      "Nexus Edge": "IP69K (Rugged)",
      "Nexus Quantum": "IP68",
      "Nexus Go": "IP68 (20m)"
    }
  },
  {
    name: "電池續航",
    values: {
      "Nexus Standard": "240 小時",
      "Nexus Pro": "420 小時",
      "Nexus Ultra": "600 小時",
      "Nexus Air": "180 小時",
      "Nexus Studio": "AC Power Only",
      "Nexus Mini": "120 小時",
      "Nexus Enterprise": "UPS Redundant",
      "Nexus Edge": "Solar / 1000 小時",
      "Nexus Quantum": "48 小時",
      "Nexus Go": "72 小時"
    }
  },
  {
    name: "保修期限",
    values: {
      "Nexus Standard": "2 年",
      "Nexus Pro": "3 年",
      "Nexus Ultra": "5 年",
      "Nexus Air": "2 年",
      "Nexus Studio": "3 年",
      "Nexus Mini": "1 年",
      "Nexus Enterprise": "10 年",
      "Nexus Edge": "5 年",
      "Nexus Quantum": "1 年 (Beta)",
      "Nexus Go": "2 年"
    }
  }
];

const toggleModel = (model: string) => {
  const index = selectedModels.value.indexOf(model);
  if (index > -1) {
    if (selectedModels.value.length > 1) {
      selectedModels.value.splice(index, 1);
    }
  } else {
    if (selectedModels.value.length < 4) {
      selectedModels.value.push(model);
    }
  }
};
</script>

<style scoped>
.specs-comparator {
  padding: 60px 0;
}

.comparator-header {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.comparator-header h3 {
  font-size: 28px;
  font-weight: 700;
}

.toggle-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.toggle-btn {
  padding: 8px 16px;
  border: 2px solid var(--border);
  background: transparent;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: 0.3s;
  color: var(--text-secondary);
}

.toggle-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.toggle-btn.active {
  background: var(--accent);
  color: var(--bg-main);
  border-color: var(--accent);
}

.comparison-table {
  border-radius: 30px;
  overflow: hidden;
}

.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
}

th,
td {
  padding: 20px;
  text-align: left;
  border-bottom: 1px solid var(--border);
}

th {
  background: rgba(0, 0, 0, 0.02);
  font-weight: 700;
  color: var(--text-secondary);
  font-size: 12px;
  text-transform: uppercase;
}

.spec-name {
  font-weight: 700;
  color: var(--text-primary);
  width: 200px;
  position: sticky;
  left: 0;
  background: var(--bg-main);
  z-index: 1;
}

.spec-value {
  color: var(--text-secondary);
  font-size: 14px;
}

tr:hover {
  background: var(--accent-soft);
}

@media (max-width: 768px) {
  .comparator-header h3 {
    font-size: 24px;
  }
  
  th,
  td {
    padding: 12px;
    font-size: 12px;
  }
}
</style>
