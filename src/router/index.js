import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import ArticleList from '@/components/ArticleList'
import CateMana from '@/components/CateMana'
import DataCharts from '@/components/DataCharts'
import PostArticle from '@/components/PostArticle'
import UserMana from '@/components/UserMana'
import TestMana from '@/components/TestMana'
import BlogDetail from '@/components/BlogDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      hidden: true,
      component: Login
    }, {
      path: '/home',
      name: '',
      component: Home,
      hidden: true
    }, {
      path: '/home',
      component: Home,
      name: '变更管理',
      iconCls: 'fa fa-file-text-o',
      children: [
        {
          path: '/postArticle',
          name: '新建变更',
          component: PostArticle,
          meta: {
            keepAlive: true
          }
        }, {
          path: '/articleBoard',
          name: '变更看板',
          component: ArticleList,
          meta: {
            keepAlive: false
          }
        }
      ]
    }, {
      path: '/home',
      component: Home,
      name: '数据统计',
      iconCls: 'fa fa-bar-chart',
      children: [
        {
          path: '/charts',
          iconCls: 'fa fa-bar-chart',
          name: '数据统计',
          component: DataCharts
        }
      ]
    }
  ]
})
