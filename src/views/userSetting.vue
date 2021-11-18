<template>
  <div class="userSetting">
    <div class="arrow" @click="goBack"><van-icon name="arrow-left" /></div>
    <div class="title">设置</div>
    <div class="btn">
      <van-button type="warning">退出登录</van-button>
    </div>
  </div>
</template>

<script>
import { Button, Icon } from 'vant'

export default {
  name: 'userSetting',
  components:{
    [Button.name]: Button,
    [Icon.name]: Icon,
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
.userSetting {
  position: relative;
  .arrow {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .title {
    height: 40px;
    line-height: 40px;
  }
  .btn {
    margin-top: 100px;
  }
}
</style>