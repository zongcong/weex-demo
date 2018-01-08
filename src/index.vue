<template>
    <div class="wrapper">
        <tool-bar></tool-bar>
        <div class="views">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <!--<home></home>-->
    </div>
</template>

<style scoped>
</style>

<script>
  //  import Home from './componenets/home/home.vue'
  import toolBar from './componenets/toolbar/toolbar.vue'

  export default {
    data: {
      logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
      target: 'World'
    },
    components: {
//      Home,
      toolBar
    },
    methods: {}
  }
</script>