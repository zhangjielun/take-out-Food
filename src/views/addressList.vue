<template>
  <div class="addressList">
    <div class="head">
      <div class="icon" @click="goBack"><van-icon name="arrow-left" /></div>
      <div class="title">选择地址</div>
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant'
export default {
  name: 'addressList',
  components: {
    [Icon.name]: Icon,
  },
  data(){
    return {

    }
  },
  methods:{
    goBack(){
      this.$router.push({
        path:'/'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.addressList {
  .head{
    position: relative;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0px -1px 0px #F0F0F0;
    .icon {
      position: absolute;
      left: 15px;
    }
    .title {

    }
  }
}
</style>