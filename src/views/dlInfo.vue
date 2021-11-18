<template>
<div class="dlInfo">
  <div class="header">
    <img src="../assets/logo.png" />
    <div class="name">zjl</div>
    <div class="setting" @click="toSet"><van-icon size="20px" name="setting-o" /></div>
  </div>
  <div class="evaluate">
    <div>已配送：100单</div>
    <div>好评率：90%</div>
  </div>
  <div class="toUser">
   <van-icon name="friends" /><div>用户页</div>
  </div>
</div>
</template>

<script>
import { Button, Icon } from 'vant'

export default {
  name: 'dlInfo',
  components:{
    [Button.name]: Button,
    [Icon.name]: Icon,
  },
  methods:{
    toSet(){
      this.$router.push({
        path:'/userSetting'
      })
    },
    toUser(){
      this.$router.push({
        path:'/person'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.dlInfo{
  background: #f8f9f9;
  height: 100%;
  overflow: hidden;
  .header {
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px;
    background: #fff;
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
  .evaluate {
    margin-top: 10px;
    background: #fff;
    text-align: left;
    padding-left: 20px;
  }
  .toUser{
    background: #fff;
    margin-top: 10px;
    display: flex;
    align-items: center;
    padding: 10px 0 10px 10px;
    box-sizing: border-box;
    &>div {
      margin-left: 10px;
    }
  }
}
</style>