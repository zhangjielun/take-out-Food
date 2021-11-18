<template>
  <div class="deliver">
    <router-view />
    <div class="foot">
      <div :class="{active:cur==0}" @click="changePage(0)"><van-icon size="25px" :name="this.cur == 0 ? 'todo-list' : 'todo-list-o' " /></div>
      <div :class="{active:cur==1}" @click="changePage(1)"><van-icon size="25px" :name="this.cur == 1 ? 'manager' : 'manager-o' " /></div>
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant'

export default {
  name: 'deliver',
  components:{
    [Icon.name]: Icon,

  },
  data(){
    return {
      cur:0
    }
  },
  created() {
  },
  methods:{
    changePage(page){
      if(page == 0){
        if(this.cur != 0){
          this.$router.push({path:'/dlList'})
        }
      }else if ( page == 1 ) {
        if(this.cur != 1){
          this.$router.push({path:'/dlInfo'})
        }
      }
      this.cur = page
    }
  }
}
</script>

<style scoped lang="scss">
.deliver{
  .foot {
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