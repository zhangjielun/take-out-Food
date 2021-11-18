<template>
  <div class="person">
    <div class="header">
      <img src="../assets/logo.png" />
      <div class="name">zjl</div>
      <div class="setting" @click="toSet"><van-icon size="20px" name="setting-o" /></div>
    </div>
    <div class="myBox">
      <div class="item" @click="goAdr">
        <div class="icon"><van-icon size="20px" name="map-marked" /></div>
        <div class="name">我的地址</div>
      </div>
      <div class="item" @click="goCart">
        <div class="icon"><van-icon size="20px" name="cart" /></div>
        <div class="name">我的购物车</div>
      </div>
      <div class="item" @click="goCollection">
        <div class="icon"><van-icon size="20px" name="star" /></div>
        <div class="name">我的收藏</div>
      </div>
      <div class="item" @click="feedBack">
        <div class="icon"><van-icon size="20px" name="question" /></div>
        <div class="name">问题反馈</div>
      </div>
    </div>
    <div class="myBox">
      <div class="deliver" v-if="isDeliver" @click="goDeliver"><van-icon name="gift-card" size="20px" /><div>我的配送主页</div></div>
      <div class="deliver" v-else @click="toBeDel"><van-icon name="gift-card" size="20px" /><div>成为骑手</div></div>
    </div>
  </div>
</template>

<script>
import { Button , Icon } from 'vant';
export default {
  name: 'Person',
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon,
  },
  data(){
    return{
      isDeliver:true
    }
  },
  methods:{
    goCart(){
      this.$router.push({
        path:'/shopCart'
      })
    },
    goAdr(){
      this.$router.push({
        path:'/'
      })
    },
    goCollection(){

    },
    feedBack(){

    },
    goDeliver(){
      this.$router.push({
        path:'/deliver'
      })
    },
    toBeDel(){

    },
    toSet(){
      this.$router.push({
        path:'/userSetting'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.person {
  background: #f8f9f9;
  height: 100%;
  overflow: hidden;
  .header {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 10px;
    img {
      width: 60px;
      height: 60px;
      border-radius: 30px;
      margin-left: 15px;
    }
    .name {
      margin-left: 15px;
    }
    .setting {
      position: absolute;
      right: 20px;
    }
  }
  .myBox {
    width: 360px;
    margin: 30px auto;
    background: #fff;
    border-radius: 5px;
    display: flex;
    .item {
      width: 90px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .deliver {
      display: flex;
      align-items: center;
      padding: 10px 0 10px 10px;
      box-sizing: border-box;
      &>div {
        margin-left: 10px;
      }
    }
  }
}
</style>