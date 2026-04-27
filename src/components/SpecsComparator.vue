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
</template>

<script setup lang="ts">
import { ref } from "vue";

const models = ["Nexus Standard", "Nexus Pro", "Nexus Ultra"];
const selectedModels = ref(["Nexus Standard", "Nexus Ultra"]);

const specs = [
  {
    name: "處理器",
    values: {
      "Nexus Standard": "Photon S3 (8 Core)",
      "Nexus Pro": "Photon S3 Pro (12 Core)",
      "Nexus Ultra": "Photon S3 Pro (16 Core)"
    }
  },
  {
    name: "連接技術",
    values: {
      "Nexus Standard": "6G / Quantum Link",
      "Nexus Pro": "6G / Quantum Link + Multi-Band",
      "Nexus Ultra": "6G / Quantum Link + Multi-Band Pro"
    }
  },
  {
    name: "感測網格",
    values: {
      "Nexus Standard": "Standard Mesh",
      "Nexus Pro": "Pro High-Density Grid",
      "Nexus Ultra": "Ultra Premium Grid"
    }
  },
  {
    name: "防水等級",
    values: {
      "Nexus Standard": "IP68 (50m)",
      "Nexus Pro": "IP68 (75m)",
      "Nexus Ultra": "IP69K (100m)"
    }
  },
  {
    name: "電池續航",
    values: {
      "Nexus Standard": "240 小時 (待機)",
      "Nexus Pro": "420 小時 (待機)",
      "Nexus Ultra": "600 小時 (待機)"
    }
  },
  {
    name: "保修期限",
    values: {
      "Nexus Standard": "2 年",
      "Nexus Pro": "3 年",
      "Nexus Ultra": "5 年"
    }
  }
];

const toggleModel = (model: string) => {
  const index = selectedModels.value.indexOf(model);
  if (index > -1) {
    selectedModels.value.splice(index, 1);
  } else {
    selectedModels.value.push(model);
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
  justify-content: space-between;
  align-items: center;
}

.comparator-header h3 {
  font-size: 28px;
  font-weight: 700;
}

.toggle-buttons {
  display: flex;
  gap: 10px;
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
}

.toggle-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.toggle-btn.active {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}

.comparison-table {
  border-radius: 30px;
  overflow: hidden;
}

table {
  width: 100%;
  border-collapse: collapse;
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
  color: #000;
  width: 25%;
}

.spec-value {
  color: var(--text-secondary);
  font-size: 14px;
}

tr:hover {
  background: rgba(255, 255, 255, 0.8);
}

@media (max-width: 768px) {
  .comparator-header {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
  
  .toggle-buttons {
    flex-wrap: wrap;
  }
  
  th,
  td {
    padding: 12px;
    font-size: 12px;
  }
}
</style>
