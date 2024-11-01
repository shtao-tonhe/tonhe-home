<template>
  <canvas ref="canvas" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%;"></canvas>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const canvas = ref(null);

onMounted(() => {
  const ctx = canvas.value.getContext('2d');
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.value.width = width;
  canvas.value.height = height;

  // 设置背景颜色
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, width, height);

  // 设置线条颜色和宽度
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';

  // 绘制横线
  for (let y = 0; y < height; y += 50) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  // 绘制竖线
  for (let x = 0; x < width; x += 50) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
});
</script>

<style lang="scss" scoped>
.box {
  width: 30px;
  height: 30px;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.box2 {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(255, 255, 255, .4);
}
</style>
