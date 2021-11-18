<template>
  <div class="home">
      <router-view />
    <div class="nav">
      <div :class="{active:cur==0}" @click="changePage(0)"><van-icon size="25px" :name="this.cur == 0 ? 'shop' : 'shop-o' " /></div>
      <div :class="{active:cur==2}" @click="changePage(2)"><van-icon size="25px" :name="this.cur == 2 ? 'todo-list' : 'todo-list-o' " /></div>
      <div :class="{active:cur==1}" @click="changePage(1)"><van-icon size="25px" :name="this.cur == 1 ? 'manager' : 'manager-o' " /></div>
    </div>
  </div>
</template>

<script>

import {Icon } from 'vant'

export default {
  name: 'Home',
  components: {
    [Icon.name]: Icon,
  },
  data(){
    return {
      cur:0,
    }
  },
  created() {
    this.cur = window.sessionStorage.getItem('path')
  },
  methods:{
    changePage(page){
      if(page == 0){
        if(this.cur != 0){
          this.$router.push({path:'/shop'})
        }
      }else if ( page == 1 ) {
          if(this.cur != 1){
            this.$router.push({path:'/person'})
          }
      }else if ( page == 2 ) {
        if(this.cur != 2){
          this.$router.push({path:'/orders'})
        }
      }
      this.cur = page
      window.sessionStorage.setItem('path',page)
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  height: 100%;
  .nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #eee;
    display: flex;
    z-index: 100;
    background: #fff;

    div {
      width: 50%;
      height: 100%;
      font-weight: bold;
      color: #2c3e50;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .active {
      color: orange;
    }
  }
}
</style>
