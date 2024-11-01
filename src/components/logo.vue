<template>
  <div class="cylinder">
    <div class="text" id="textContainer">
    </div>
  </div>
  <div class="cylinder cylinder1">
    <div class="text text1" id="textContainer1">
    </div>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue'
  defineProps({
    msg: {
      type: String,
      required: true
    }
  })

  onMounted(() => {
    function createCylinderText(text) {
      const container = document.getElementById('textContainer');
      const allTextArr = text
      const radius = 100; // 文字到圆心的距离
      const angleStep = 360 / allTextArr.length; // 每个字符的角度间隔
      for (let i = 0; i < allTextArr.length; i++) {
        const charSpan = document.createElement('span');
        charSpan.classList.add('char');
        const angle = angleStep * i;
        charSpan.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
        charSpan.textContent = allTextArr[i];
        container.appendChild(charSpan);
      }
    }
    // 调用函数并传入要显示的文本
    createCylinderText('TonHePWF >>> TonHePWF >>> TonHePWF >>>');

    function createCylinderText1(text) {
      const container = document.getElementById('textContainer1');
      const allTextArr = text
      const radius = 50; // 文字到圆心的距离
      const angleStep = 300 / allTextArr.length; // 每个字符的角度间隔
      for (let i = 0; i < allTextArr.length; i++) {
        const charSpan = document.createElement('span');
        charSpan.classList.add('char');
        const angle = angleStep * i;
        charSpan.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
        charSpan.textContent = allTextArr[i];
        container.appendChild(charSpan);
      }
    }

    // 调用函数并传入要显示的文本
    createCylinderText1('TonHePWF < TonHePWF < ');
  })

</script>

<style lang="scss" scoped>
  .cylinder {
    position: relative;
    width: 200px;
    height: 200px;
    perspective: 1000px;
    transform-style: preserve-3d;
    /* animation: wave 10s linear infinite; */
  }

  .cylinder1 {
    /* animation: wave1 10s linear infinite; */
    width: 200px;
    top: -170px;
  }

  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    animation: rotate 10s linear infinite;
    /* background: orange */
  }

  .text1 {
    animation: rotate1 10s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotateY(0deg);
    }

    to {
      transform: rotateY(360deg);
    }
  }

  @keyframes rotate1 {
    from {
      transform: rotateY(0deg);
    }

    to {
      transform: rotateY(-360deg);
    }
  }

  @keyframes wave {

    0%,
    100% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(5deg);
    }

    50% {
      transform: rotate(10deg);
    }

    75% {
      transform: rotate(-5deg);
    }
  }

  @keyframes wave1 {

    0%,
    100% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(-5deg);
    }

    50% {
      transform: rotate(10deg);
    }

    75% {
      transform: rotate(5deg);
    }
  }
</style>