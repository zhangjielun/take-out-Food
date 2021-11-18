<template>
  <div class="login">
    <div v-if="user">
      <transition mode="out-in">
        <div class="loginBox" v-show="type == 0">
          <van-form @submit="onSubmit('lg')">
            <van-field
                v-model="lgUsername"
                name="用户名"
                label="账号"
                placeholder="邮箱或手机号"
            />
            <van-field
                v-model="lgPassword"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
            />
            <div style="margin: 16px;">
              <van-button round block type="info" native-type="submit">登陆</van-button>
            </div>
          </van-form>
        </div>
      </transition>
      <transition mode="out-in">
        <div class="registerBox" v-show="type == 1">
          <van-form @submit="onSubmit('rg')">
            <van-field
                v-model="rgUsername"
                name="用户名"
                label="用户名"
                placeholder="用户名"
            />
            <van-field
                v-model="rgPassword"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
            />
            <div style="margin: 16px;">
              <van-button round block type="info" native-type="submit">注册</van-button>
            </div>
          </van-form>
        </div>
      </transition>
      <div class="type">
        <van-button type="default" size="mini" v-show="type == 0" @click="change(1)">去注册</van-button>
        <van-button type="default" size="mini" v-show="type == 1" @click="change(0)">去登录</van-button>
      </div>
      <div class="deliver" @click="toDeliver">配送员登录 ></div>
    </div>
    <div v-else>
      <div class="goBack" @click="toUser"><van-icon name="arrow-left" /></div>
      <div class="dlLoginBox">
        <div class="title">配送员登录</div>
        <van-form @submit="onSubmit('dl')">
          <van-field
              v-model="dlUsername"
              name="用户名"
              label="账号"
              placeholder="邮箱或手机号"
          />
          <van-field
              v-model="dlPassword"
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">登陆</van-button>
          </div>
        </van-form>
      </div>
    </div>
    <div class="lod" v-if="loading">
      <van-loading type="spinner" color="#1989fa" />
    </div>
  </div>


</template>

<script>
import { Button, Field, Form ,Tag, Icon ,Loading} from 'vant'

export default {
  name: 'Login',
  components:{
    [Field.name]: Field,
    [Form.name]: Form,
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Tag.name]: Tag,
    [Loading.name]: Loading,
  },
  data(){
    return{
      type:0,
      user:true,
      lgUsername: '',
      lgPassword: '',
      rgUsername: '',
      rgPassword: '',
      dlUsername:'',
      dlPassword:'',
      loading:false
    }
  },
  methods:{
    onSubmit(values) {
      if(values == 'lg'){
        this.loading = true
        setTimeout(()=>{
          this.$router.push({
            path:'/shop'
          })
          this.loading = false
        },1500)

      }else if(values == 'eg'){

      }else if(values == 'dl'){
        this.loading = true
        setTimeout(()=>{
          this.$router.push({
            path:'/deliver'
          })
          this.loading = false
        },1500)
      }
    },
    toUser(){
      this.user = true
    },
    change(type){
      this.type = type
    },
    toDeliver(){
      this.user = false
    }
  }
}
</script>

<style scoped lang="scss">
.v-enter,.v-leave{
  opacity: 0;
  transform: translateX(50px);
}
.v-enter-active,.v-leave-active{
  transition: all 2s ease;
}
.login {
  height: 100%;
  position: relative;
  overflow: hidden;

  .loginBox,.registerBox {
    width: 320px;
    height: 180px;
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    .title {
      text-align: left;
      margin-bottom: 10px;
    }
  }
  .type {
    width: 90%;
    margin: 10px auto;
    text-align: right;
  }
  .deliver {
    position: absolute;
    top: 320px;
    right: 10px;
  }
  .goBack {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .dlLoginBox {
    width: 320px;
    height: 180px;
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    .title {
      margin-bottom: 20px;
    }
  }
  .lod {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(238, 238, 238, 0.8);
    top: 0;

  }
}
</style>
<style lang="scss">
.lod {
  .van-loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
  }
}
</style>