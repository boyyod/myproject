import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/login/login'
import  Content from '@/views/content'
import Parm from '@/views/parm'
import Products from '@/views/products/products'
import Layout from '@/views/layout'
// import { component } from 'vue/types/umd'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
   {
     path:'/',
     component:Layout,
     children:[
      {path:'/',redirect:'/content'},
      {
        path: 'content',
        name: 'Content',
        component: Content
      },
      {
        path: 'parm',
        name: 'Parm',
        component: Parm
      },
      {
        path: 'products',
        name: 'Products',
        component: Products
      },
     ]
   }
  ]
})
