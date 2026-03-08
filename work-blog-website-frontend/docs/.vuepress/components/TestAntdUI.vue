<template>
  <div class="test-antd-ui">
    <a-space wrap>
      <a-button type="primary">Primary Button</a-button>
      <a-button>Default Button</a-button>
      <a-button type="dashed">Dashed Button</a-button>
      <a-button type="text">Text Button</a-button>
      <a-button type="link">Link Button</a-button>
    </a-space>
    <!-- 表格单独放，避免和按钮挤在一起 -->
    <div style="margin-top: 20px">
      <a-table :data-source="dataSource" :columns="columns" />
    </div>
  </div>
</template>

<script setup>
// 1. 正确导入需要的组件
import { Button as AButton, Space as ASpace, Table as ATable } from 'ant-design-vue';

// 2. 在 script setup 中直接定义变量，无需 export default
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];
</script>

<style scoped>
.test-antd-ui {
  padding: 20px;
}
</style>