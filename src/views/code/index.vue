<template>
  <div class="page">
    <Nav />

    <div class="page-main">
      <button @click="toPage('/code/detail', 123)">Detail</button>
    </div>
  </div>
</template>

<script setup>
  import Nav from '../../components/nav/index.vue'
</script>

<style lang="scss" scoped>
  .item {
    .title {
      color: #ffffff;
    }

    .desc {
      color: #9ca3af;
    }
  }
</style>