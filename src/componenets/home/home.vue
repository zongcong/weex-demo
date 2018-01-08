<template>
    <div class="home">
        <list class="list">
            <!--<cell class="cell" v-for="(item,index) in lists" :key='item.id'>-->
            <!--<a class="a" :href="item.adapt_url">-->
            <!--<div class="left">-->
            <!--<text class="title">{{item.title}}</text>-->
            <!--<text class="desc">{{item.price_range}}</text>-->
            <!--</div>-->
            <!--<div class="img">-->
            <!--<image resize="contain" :src="item.image ? item.image : logoUrl" class="logo"></image>-->
            <!--</div>-->
            <!--</a>-->
            <!--</cell>-->
            <cell class="cell" v-for="(item,index) in lists" :key='item.id'>
                <a class="a" :href="item.target.uri">
                    <div class="left">
                        <text class="title">{{item.title}}</text>
                        <text class="desc">{{item.target.desc.substr(0, 55)}}</text>
                    </div>
                    <div class="img">
                        <image resize="contain" :src="item.target.cover_url ? item.target.cover_url : logoUrl"
                               class="logo"></image>
                    </div>
                </a>
            </cell>
            <loading class="loading" @loading="onloading" :display="showLoading">
                <text class="icon-loading" :style="{fontFamily: 'iconfont'}">&#xe62d;</text>
            </loading>
        </list>
        <m-loading v-if="this.lists.length === 0"></m-loading>
    </div>
</template>

<style scoped>
    .icon-loading {
        font-size: 36px;
        color: #0088fb;
        text-align: center;
    }

    .a {
        flex-direction: row;
        align-items: center;
        margin-bottom: 40px;
        padding-left: 14px;
    }

    .left {
        flex: 3;
    }

    .img {
        flex: 1;
        align-items: center;
        padding-left: 20px;
    }

    .title {
        font-size: 36px;
        color: #494949;
    }

    .logo {
        width: 180px;
        height: 220px;
    }

    .desc {
        padding-top: 20px;
        color: #888;
        font-size: 28px;
    }

    .loading {
        justify-content: center;
    }
</style>

<script>
  import mLoading from '../loading/loading.vue'

  const stream = weex.requireModule('stream')
  const domModule = weex.requireModule('dom')
  const modal = weex.requireModule('modal')


  export default {
    data() {
      return {
        lists: [],
        logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
        target: 'World',
        address: '',
        start: '',
        showLoading: 'hide',
      }
    },
    created() {
//      this.getData('loc=108288&start=0&count=' + this.start + '&callback=superagentCallback1510279995771633', res => {
//        this.lists = res.data.events
////        console.log(res.data.events)
//      })

      this.getData('alt=json&next_date=&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1', res => {
        this.lists = res.data.recommend_feeds
        this.start = res.data.date
//        console.log(this.start)
//        console.log(res.data.date);
      })

      domModule.addRule('fontFace', {
        'fontFamily': 'iconfont',
        'src': 'url(\'https://at.alicdn.com/t/font_474326_o9qipvl84pr2j4i.ttf\')'
      })
    },
    components: {
      mLoading
    },
    methods: {
      getData(repo, callback) {
//        return stream.fetch({
//          method: 'GET',
//          type: 'jsonp',
//          url: 'https://api.douban.com/v2/event/list?' + repo
//        }, callback)
        return stream.fetch({
          method: 'GET',
          type: 'json',
          url: 'https://m.douban.com/rexxar/api/v2/recommend_feed?' + repo
        }, callback)

//        function (res) {
////          that.logoUrl = res.data.events[0].image
////          that.target = res.data.events[0].title
////          that.address = res.data.events[0].address
//          that.list = res.data.events
//          console.log(res.data.events)
//        }
      },
      setDate(timer) {
        let date = new Date(timer.replace(/-/g, '/')).valueOf()
        let time = date - (24 * 60 * 60 * 1000)
        let newDate = new Date(time)
        let year = newDate.getFullYear()
        let month = newDate.getMonth() + 1
        let day = newDate.getDate()
        if (month < 10) {
          month = '0' + month
        }
        if (day < 10) {
          day = '0' + day
        }
        this.start = year + '-' + month + '-' + day
        return year + '-' + month + '-' + day
      },
//      fetch (event) {
//        modal.toast({message: this.start += 3, duration: 1})
//
//        this.getData('loc=108288&start=' + (this.start += 3) + '&count=3&callback=superagentCallback1510109198439275', res => {
//          let len = res.data.events.length
//          for (let i = 0; i < len; i++) {
//            this.lists.push(res.data.events[i])
//          }
//        })
//      },
      onloading (event) {
        this.showLoading = 'show'
        this.getData('alt=json&next_date=' + this.setDate(this.start) + '&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1', res => {

          setTimeout(() => {
            let len = res.data.recommend_feeds.length
            for (let i = 0; i < len; i++) {
              this.lists.push(res.data.recommend_feeds[i])
            }
            this.showLoading = 'hide'
          }, 100)
        })
        modal.toast({message: this.start, duration: 1})
      }
    }
  }
</script>