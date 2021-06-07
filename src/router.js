import Vue from "vue"
import Router from 'vue-router'

import Home from './pages/home.vue'
import Index from './pages/index.vue'
import Product from './pages/product.vue'
import Detail from './pages/detail.vue'
import Cart from './pages/cart.vue'
import Order from './pages/order.vue'
import OrderConfirm from './pages/orderConfirm.vue'
import OrderList from './pages/orderList.vue'
import OrderPay from './pages/orderPay.vue'

// 2.安装路由功能
Vue.use(Router)

export default new Router({
  mode: "history", // 修改为 history 模式
  routes: [ // 配置路由列表
    {
      path: "/",
      name: "home",
      component: Home, // 每个路由应该映射一个组件
      redirect: "/index",
      children: [ // 子路由
        {
          path: "/index",
          name: "index",
          component: Index,
        },
        {
          path: "/product/:id", // 动态路由
          name: "product",
          component: Product,
        },
        {
          path: "/detail/:id",
          name: "detail",
          component: Detail,
        }
      ]
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/order",
      name: "order",
      component: Order,
      children: [
        {
          path: "/list",
          name: "order-list",
          component: OrderList,
        },
        {
          path: "/confirm",
          name: "order-confirm",
          component: OrderConfirm,
        },
        {
          path: "/pay",
          name: "order-pay",
          component: OrderPay,
        },
      ]
    },
  ]
})