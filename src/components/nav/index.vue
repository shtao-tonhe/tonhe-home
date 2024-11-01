<template>
  <div class="top-nav" :style="navStyle">
    <notice-msg />
    <div class="nav-main">
      <!-- <div class="s-logo" :style="logoStyle">
        <img class="icon" src="@/assets/img/200.png" alt="">
      </div> -->
      <div class="nav-list">
        <a class="nav-item nav-tip" v-for="(link, index) in links" :key="index" :class="`nav-${link.route.path}`"
          @click="toPage(link.route.path)" @mouseover="handleMouseOver(index)" @mouseleave="handleMouseleave($event)">
          {{link.title}}
          <span class="beta-bg beta-tip" v-if="link.isBeta">Beta</span>
          <div class="nav-i-l nav-tip navMenu" ref="navMenu" style="display: block;"
            v-if="currentNavIndex !== null && currentNavIndex === index">
            <!-- <div class="nav-i-l" style="display: block;"> -->
            <div class="n-i-i" v-for="(menu, mindex) in links[currentNavIndex].menu">
              <div class="title">{{menu.title}}</div>
              <div class="desc">{{menu.desc}}</div>
            </div>
          </div>
        </a>
      </div>

      <div class="login-btn">Login In</div>
    </div>
  </div>
</template>

<script setup>
  import noticeMsg from '../../components/nav/noticeMsg.vue'
  import { ref, reactive, toRefs, computed, watch, onMounted, onBeforeUnmount } from 'vue'
  import { useRouter } from "vue-router";
  const router = useRouter()
  const links = [
    { title: 'Code', isBeta: false, route: { path: 'code' }, menu: [{ title: 'Created', desc: 'Learn web developerment' }, { title: 'HTML', desc: 'This is a desc content' },], },
    { title: 'Moment', isBeta: false, route: { path: 'moment' }, menu: [{ title: 'Trading', desc: 'css content desc' }, { title: 'HTML', desc: 'This is a desc content' },], },
    { title: 'Present', isBeta: true, route: { path: 'present' }, menu: [{ title: 'DataV', desc: 'Push-and-pull experience' }, { title: 'Case', desc: 'This is a desc content' }, { title: 'Components', desc: 'This is a desc content' },], },
  ]

  var lastScrollTop = ref(0)
  var currentNavIndex = ref(null)
  var navStyle = ref({ transform: 'translateY(0)', opacity: 1 })
  var logoStyle = ref({ width: `40px`, height: `40px`, opacity: 1 })
  const navMenu = ref(null);

  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (scrollTop > lastScrollTop) {// 向下滚动
      const navHeight = document.getElementsByClassName('top-nav')[0].offsetHeight
      navStyle.value = { transform: `translateY(-${navHeight}px)`, opacity: 0 }
      logoStyle.value = { width: `0px`, height: `0px`, opacity: 0 }
    } else { // 向上滚动
      navStyle.value = { transform: `translateY(0)`, opacity: 1 }
      logoStyle.value = { width: "40px", height: "40px", opacity: 1 }
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
  }

  function handleMouseOver(navIndex) {
    // 显示出nav的扩展菜单
    currentNavIndex.value = navIndex

    const menuDom = document.getElementsByClassName('navMenu')
    if (menuDom.length > 0) {
      // const navMenu = menuDom[0]
      console.log('高度1', menuDom.length, menuDom[0].offsetHeight);
      console.log('高度2', navMenu.value);
      menuDom[0].style.color = '#ff0000'
      //   const height = menuDom[0].offsetHeight
      //   navMenu.value[0].style.height = '0px';
      navMenu[0].style.transition = '1s';
      navMenu[0].style.height = '500px';
    }
  }

  function handleMouseleave(event) {
    const target = event.target
    if (!target.classList.contains('nav-i-l')) {
      currentNavIndex.value = null
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    return { currentNavIndex }
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<style lang="scss" scoped>
  .top-nav {
    /* background: rgba(255, 255, 255, .15); */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 60px;
    transition: 1s;
  }

  .nav-main {
    margin-right: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .s-logo {
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: linear-gradient(-30deg, #D2F685, #73c324);
    border-radius: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    transition: 1s;

    .icon {
      width: 23px;
      object-fit: cover;
    }

    .title {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 1px;
      margin-left: 3px;
      color: #FFFFFF;
    }
  }

  .nav-list {
    position: relative;
    flex: 1;
    padding-right: 120px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    font-size: 20px;
    letter-spacing: 1px;

    .nav-item {
      cursor: pointer;
      margin-left: 40px;
      /* color: #9A9A9A; */
      /* color: #C1C1C1; */
      color: #fff;
      font-size: 15px;
      font-weight: 600;
      position: relative;
      /* background: orange; */
    }

    .nav-item:focus-within .nav-tip {
      display: block;
    }

    .nav-tip::before {
      content: "";
      display: block;
      height: 20px;
      left: 0;
      position: absolute;
      top: -20px;
      width: 100%;
    }

    .nav-item::before {
      position: absolute;
      top: 0;
      width: 0%;
      inset: 0;
      /* color: #9AEF7A; */
      /* background: linear-gradient(-45deg, #628b07 30%, #8cc511 40%, #a2c850 80%); */
      background: linear-gradient(to left, #73c324 40%, #73c324 70%);
      /*设置渐变的方向从左到右 颜色从ff0000到ffff00*/
      background-clip: text;
      -webkit-background-clip: text;
      /*将设置的背景颜色限制在文字中*/
      -webkit-text-fill-color: transparent;
      /*给文字设置成透明*/
      overflow: hidden;
      transition: 0.3s ease-out;
    }

    .nav-code::before {
      content: "Code";
    }

    .nav-moment::before {
      content: "Moment";
    }

    .nav-present::before {
      content: "Present";
    }

    .nav-code:hover::before,
    .nav-moment:hover::before,
    .nav-present:hover::before {
      width: 100%;
    }

    .beta-tip {
      font-family: 'mont-Medium';
      /* font-family: 'mont-Medium-b'; */
      position: absolute;
      top: -11px;
      right: -13px;
      font-size: 11px;
      letter-spacing: 1px;
    }

    .beta-bg {
      padding: 0px 3px;
      /* background: linear-gradient(to top, #D2F685, #a2e461 ); */
      /* 蓝紫色 linear-gradient(to right, #8f41e9, #578aef) */
      /* border-image: linear-gradient(to top, #D2F685, #a2e461 ) 1; */
      color: #000000;
      /* color: #ffffff; */
      background: linear-gradient(to top, #D2F685, #a2e461);
      /* background: linear-gradient(to right, #8f41e9, #578aef); */
      border-radius: 4px;
      font-weight: 500;
    }
  }

  .nav-i-l {
    position: absolute;
    top: 33px;
    background: #252525;
    min-width: 280px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: 0 0 3px 1px rgba(255, 255, 255, .34);
    color: #ffffff;

    .n-i-i {
      width: auto;
      height: 100%;
      letter-spacing: 1px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: baseline;
      justify-content: space-between;
      padding: 10px 10px 15px 15px;
      border-radius: 4px;

      .title {
        font-size: 15px;
        margin-bottom: 8px;
        font-family: 'mont-Medium-b';
      }

      .desc {
        font-size: 13px;
        margin-left: 8px;
        font-family: 'mont-light';
      }
    }

    .n-i-i:hover {
      background: rgba(255, 255, 255, .34);
    }

    .n-login {

      .title,
      .desc {
        color: rgba(255, 255, 255, .45);
      }
    }

    .n-i-i::after {
      position: absolute;
      content: "";
      top: 28%;
      left: 8px;
      height: 40%;
      width: 3px;
      border-radius: 4px;
      background: linear-gradient(to top, #ffffff, #f0f0f0);
    }

    .n-i-i:nth-child(1)::after {
      background: linear-gradient(to top, #275BB7, #2351a3);
    }

    .n-i-i:nth-child(2)::after {
      background: linear-gradient(to top, #E86E30, #e85c15);
    }

    .n-i-i:nth-child(5)::after {
      background: linear-gradient(to top, #e242b3, #e212a5);
    }
  }

  .login-btn {
    width: 130px;
    height: 40px;
    border-radius: 10px;
    background: #680b4c;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>