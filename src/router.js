import Router from 'vue-router'
import Home from './componenets/home/home.vue'
import Hotspot from './componenets/hotspot/hotspot.vue'
import Recommend from './componenets/recommend/recommend.vue'

Vue.use(Router)


// function createStoreView(type) {
//   return {
//     name: `${type}-stories-view`,
//     render(createElement) {
//       return createElement(StoriesView, {props: {tyoe}})
//     }
//   }
// }

export default new Router({
  routes: [
    {path: '/home', component: Home},
    {path: '/hotspot', component: Hotspot},
    {path: '/recommend', component: Recommend},
    {path: '/', redirect: '/home'}
  ]
})
