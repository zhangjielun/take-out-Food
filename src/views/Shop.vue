<template>
  <div class="shop">
    <div class="swiper">
      <div class="address" @click="toAddressList"><van-icon name="location-o" />{{ address }}</div>
    </div>
    <div class="content">
      <div class="search"><van-field v-model="input" placeholder="请输入用户名" /><div class="searchBtn"><van-icon name="search" /></div></div>
    </div>
  </div>
</template>

<script>
import { Icon, Field, } from 'vant'
export default {
  name: 'Shop',
  components: {
    [Field.name]: Field,
    [Icon.name]: Icon,

  },
  data(){
    return {
      address:'四川大学锦江学院',
      input:''
    }
  },
  methods:{
    toAddressList(){
      this.$router.push({
        path:'/addressList'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.shop{
  height: 100%;
  .swiper {
    width: 100%;
    height: 100px;
    position: relative;

    .address {
      position: absolute;
      top: 20px;
      right: 10px;
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
  .content {
    background: #f8f9f9;
    border-radius: 25px;
    width: 100%;
    height: calc(100% - 80px);
    position: relative;
    box-sizing: border-box;
    top: -20px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    padding-bottom: 50px;
    & >.search {
      width: 70%;
      display: flex;
      align-items: center;
      margin: 10px auto;
      position: relative;
      & > .el-input {
        input {
          padding-right: 30px;
        }
      }
      .searchBtn {
        width: 40px;
        height: 40px;
        line-height: 40px;
        position: absolute;
        right: 0px;
      }
    }
    .shops {
      height: 100px;
    }
  }
}
</style>