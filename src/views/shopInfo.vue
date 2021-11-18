<template>
  <div class="shopInfo">
    <div class="header" >
      <div class="back">
        <van-icon name="arrow-left" @click="goBack" />
      </div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <div class="info">
      <img src="../assets/images/food1.jpeg" />
      <div class="infos">
        <div class="name">阿香婆</div>
        <div class="evaluate"><van-icon name="star" color="red"/>3.5</div>
        <div class="sold">月售：3000</div>
      </div>

    </div>
    <van-tabs v-model="active" @click="onClick">
      <van-tab title="点菜">点菜</van-tab>
      <van-tab title="评价">评价</van-tab>
      <van-tab title="商家信息">
        <div class="item">
          <van-icon name="location" />锦江大道一号
          </div>
        <div class="item">
          <van-icon name="phone" />13666148149
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Icon, Swipe, SwipeItem , Tab, Tabs } from 'vant'

export default {
  name: 'shopInfo',
  components:{
    [Icon.name]: Icon,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
  data(){
    return{
      active:0
    }
  },
  created() {
    console.log('created',this.$route.params.shopId)
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    },
    onClick(name){
      console.log(name)
    }
  }
}
</script>

<style scoped lang="scss">
.shopInfo{
  .header {
    position: relative;
    .back{
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 14px;
      left: 14px;
      z-index: 20;
    }
    .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;
      background-color: #39a9ed;
    }
  }
  .info {
    position: relative;
    display: flex;
    .infos{
      overflow: hidden;
      margin-left: 15px;
      .name {
        font-size: 18px;
        margin-top: 10px;
      }
      .evaluate {
        color: red;
      }
    }
    img {
      width: 60px;
      height: 60px;
      margin-left: 30px;
      margin-top: 10px;
    }
  }

}
</style>
<style lang="scss">
.shopInfo{
  .van-tabs{
    .van-tabs__content{
      .van-tab__pane {
        .item {
          width: 100%;
          background: #ffffff;
          height: 50px;
          line-height: 50px;
          text-align: left;
          padding-left: 20px;
          box-sizing: border-box;
          border-bottom: 1px solid #eee;
          &:first-child {
            margin-top: 10px;
          }
          &:last-child {
            border-bottom: 0;
          }
          .van-icon {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>