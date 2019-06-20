import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/layout/Root'
import Home from '@/components/Home'
import Login from '@/components/user/Login'
import Register from '@/components/user/Register'
import Profile from '@/components/user/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root,
      redirect: 'home',
      children: [
        {name: 'Home', path: 'home', component: Home},
        {name: 'Login', path: 'login', component: Login},
        {name: 'Register', path: 'register', component: Register},
        {name: 'Profile', path: 'profile', component: Profile}
      ]
    }
  ]
})
