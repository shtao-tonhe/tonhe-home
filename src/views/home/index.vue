<template>
  <div class="page">
    <Nav />
    <!-- <NotPage /> -->
    <!-- <WaitLoad /> -->
    <div class="page-main">
      <div class="header mont-light"
        style="color: #ffffff;height: 1500px;background: linear-gradient(to bottom, orange, blue);">
        Move your mouse around
      </div>
    </div>
    <PageBtm />
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import Nav from '../../components/nav/index.vue'
  import WaitLoad from '../../components/waitLoad/circle/index.vue'
  import NotPage from '../../components/common/notPage.vue'
  import Logo from '../../components/logoTemplate.vue'
  import PageBtm from '../../components/pageBtm/index.vue'

  const canvas = ref(null);

  onMounted(() => {
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