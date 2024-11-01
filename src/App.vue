<template>
  <div id="app">
    <router-view></router-view>
    <FooterProgress />
  </div>
</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import FooterProgress from '/src/components/FooterProgress.vue'
  const cursor = ref(null);

  onMounted(() => {
    function clickEffect() {
      let balls = [];
      let width, height;
      let ctx;
      const colours = ["#F73859", "#14FFEC", "#00E0FF", "#FF99FE", "#FAF15D"];
      const canvas = document.createElement("canvas");
      document.body.appendChild(canvas);
      canvas.setAttribute("style", "width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; position: fixed; pointer-events: none;");

      if (canvas.getContext && window.addEventListener) {
        ctx = canvas.getContext("2d");
        updateSize();
        window.addEventListener('resize', updateSize, false);
        loop();
        window.addEventListener("mousemove", function (e) {
          pushBalls(randBetween(1, 6), e.clientX, e.clientY); // 修改爆炸范围为1到6个小球
        }, false);
      } else {
        console.log("canvas or addEventListener is unsupported!");
      }

      function updateSize() {
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
        ctx.scale(2, 2);
        width = (canvas.width = window.innerWidth);
        height = (canvas.height = window.innerHeight);
      }
      class Ball {
        constructor(x, y) {
          this.x = x;
          this.y = y;
          this.angle = Math.PI * 2 * Math.random();
          this.multiplier = randBetween(2, 3); // 控制爆炸范围
          this.vx = this.multiplier * Math.cos(this.angle);
          this.vy = this.multiplier * Math.sin(this.angle);
          this.r = 3; // 初始化半径设置为4
          this.color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.7)`
        }
        update() {
          this.x += this.vx;
          this.y += this.vy;
          this.r -= 0.2; // 控制小球逐渐变小
          this.vx *= 0.88;
          this.vy *= 0.88;
        }
      }
      function pushBalls(count, x, y) {
        for (let i = 0; i < count; i++) {
          balls.push(new Ball(x, y));
        }
      }
      function randBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      function loop() {
        ctx.fillStyle = "rgba(255, 255, 255, 0)";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < balls.length; i++) {
          let b = balls[i];
          if (b.r < 0) continue;
          ctx.fillStyle = b.color;
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
          ctx.fill();
          b.update();
        }
        removeBall();
        requestAnimationFrame(loop);
      }
      function removeBall() {
        for (let i = 0; i < balls.length; i++) {
          let b = balls[i];
          if (b.x + b.r < 0 || b.x - b.r > width || b.y + b.r < 0 || b.y - b.r > height || b.r < 0) {
            balls.splice(i, 1);
          }
        }
      }
    }

    // clickEffect(); //调用特效函数
  })
</script>