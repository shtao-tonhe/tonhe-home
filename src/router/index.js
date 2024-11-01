
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home/index.vue'

const pages = import.meta.glob('../views/**/*.vue');
const routes = Object.keys(pages).map((path) => {

  if ( path.substr( path.length-9, path.length ) == 'index.vue' ) {
    const pathLabel = path.split('/')
    var name = `${pathLabel[pathLabel.length-2]}`
    var routePath = `/${pathLabel[pathLabel.length-2]}`
  }else{
    var name = path.split('/').pop().replace(/\.\w+$/, ''); // 获取文件名作为路由名
    var routePath = path.replace(/..\/views/, '').replace(/\.\w+$/, '');
  }
  return {
    path: routePath,
    component: pages[path], // pages[path] 是一个函数，需要在路由解析时调用
    name
  };
});

console.log('@route-----@', routes);

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    ...routes,
  ],
})

// router.beforeEach((to, from, next) => {
//   console.log('next---', to);
//   // 在这里添加你的路由守卫逻辑，比如权限检查、路由拦截等
//   // 这里的逻辑可以是之前提到的任何用例
//   next();
// });

export default router
