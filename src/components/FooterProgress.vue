<template>
  <div class="pro-main">
    <!-- <div class="pro-v-main" :style="{'width': {{currentV}}%}"></div> -->
    <div class="pro-v-main" :style="{ width: currentV + '%', opacity: currentOpacity }"></div>
  </div>
</template>
<script setup>
  import { ref, onMounted } from 'vue'
  const currentOpacity = ref(1)
  const currentV = ref(0)

  onMounted(() => {
    //300ms之内只触发一次
    let timer = null;
    window.addEventListener('scroll', () => {
      if (timer) { return; }
      timer = setTimeout(() => {
        timer = null;
        // 获取页面总高度
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

        // 获取class为footer的高度
        const footerHeight = document.querySelector('.footer').offsetHeight;

        //页面去除footer的高度
        const bodyHeight = scrollHeight - footerHeight;

        // 当前视口高度
        const clientHeight = document.documentElement.clientHeight;

        // 当前距离顶部高度
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        // 已经查看的内容 = 当前距离顶部高度 + 当前视口高度
        const showHeight = scrollTop + clientHeight

        if (bodyHeight - showHeight <= -100) {
          currentV.value = 100;
          currentOpacity.value = 0
        } else if (scrollTop <= 30) {
          currentV.value = 0;
          currentOpacity.value = 0
        } else {
          currentV.value = Number((showHeight / bodyHeight).toFixed(2)) * 100;
          currentOpacity.value = 1
        }
        return { currentOpacity, currentV };
      }, 300)
    })
  });
</script>
<style lang="scss" scoped>
  .pro-main {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: rgba(255, 255, 255, .2);
    transition: .3s;
  }

  .pro-v-main {
    height: 100%;
    background: #CEF151;
    transition: .3s;
  }
</style>