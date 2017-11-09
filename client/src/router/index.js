import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import detailQuestion from '@/components/questionDetail'
import addQuestion from '@/components/addQuestion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/:id',
      name: 'detailQuestion',
      component: detailQuestion,
      props: true
    },
    {
      path: '/question/addQuestion',
      name: 'addQuestion',
      component: addQuestion
    }
  ]
})
