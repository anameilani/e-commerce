import Vue from 'vue'
import Router from 'vue-router'
import Landing from './views/Landing.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Home from './views/Home.vue'
import myItem from './views/MyItem.vue'
import addItem from './views/addItem.vue'
import myCart from './views/MyCart.vue'
import myHistory from './views/History.vue'


Vue.use(Router)

 const router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/myitem',
      name: 'myitem',
      component: myItem,
    },
    {
      path:'/add',
      name:'addItem',
      component: addItem
    },
    {
      path:'/mycart',
      name:'mycart',
      component: myCart

    },
    {
      path:'/myhistory',
      name: 'myhistory',
      component: myHistory
    }


  ]
})

router.beforeEach((to, from, next) => {
  if(to.fullPath == '/'){
    if(localStorage.token == undefined){
      next()
    }
  }else if(to.fullPath == '/login'){
    if(localStorage.token == undefined){
      next()
    }
  }else if(to.fullPath == '/register'){
    if(localStorage.token == undefined){
      next()
    }
  }
  else if(localStorage.token == undefined) {
    next({ path: '/login', });
  } else {
    next();
  }
})

export default router