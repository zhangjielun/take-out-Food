<template>
  <div class="shopCart">
    <div class="head">
      <div class="icon" @click="goBack"><van-icon name="arrow-left" /></div>
      <div class="title">购物车</div>
    </div>
    <div class="content">
      <div class="item" v-for="item in shops" >
        <div class="shopName"><van-checkbox v-model="item.shopSelect" @click="selectAll(item)"></van-checkbox><div class="name" @click="toShopInfo(item.shopId)">{{ item.name }}</div> <van-icon name="arrow" /></div>
        <div class="food">
          <div class="foods" v-for="foods in item.foods">
            <van-checkbox v-model="foods.isSelected" @click="selectAll(foods,item)"></van-checkbox>
            <img :src="foods.img"/>
            <div class="cent">
              <div class="foodName">{{ foods.name }}</div>
              <div class="num">x{{ foods.num }}</div>
            </div>
            <div class="price">
              <div class="original">¥{{ foods.original }}</div>
              <div class="current">¥{{ foods.current }}</div>
            </div>
          </div>
        </div>
        <div class="buy">
          <div class="btn" @click="buySingle(item)">立即购买</div>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="chooseAll"><van-checkbox v-model="all" @click="selectAll(shops)">全选</van-checkbox></div>
      <div class="totalPrice">
        <div class="price">¥{{ this.total }}</div>
        <div class="goPay" @click="buyAll">立即结算</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon , Checkbox , CheckboxGroup} from 'vant'
export default {
  name: 'shopCart',
  components: {
    [Icon.name]: Icon,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
  },
  data(){
    return {
      all:false,
      total:0,
      shops:[
        {
          shopId:1,
          name:'阿香婆',
          shopSelect:false,
          totalPrice:10,
          foods:[
            {
              foodId:1,
              name:'炸鸡炸鸡炸鸡炸鸡炸鸡炸鸡炸鸡',
              num:10,
              original:17,
              current:10,
              isSelected:false,
              img:'../assets/images/food1.jpeg'
            },
            {
              foodId:2,
              name:'烧烤',
              num:1,
              original:50,
              current:20,
              isSelected:false,
              img:'../assets/images/food2.jpeg'
            }
          ]
        },
        {
          shopId:2,
          name:'德克士',
          shopSelect: false,
          totalPrice:20,
          foods:[
            {
              foodId:3,
              name:'面',
              num:10,
              original:17,
              current:10,
              isSelected:false,
              img: '../assets/images/food1.jpeg'
            },
          ]
        }
      ],
    }
  },
  created() {
    console.log('1')
  },
  methods:{
    goBack(){
      this.$router.push({
        path:'/person'
      })
    },
    selectAll(data,fd){
      if(data instanceof Array){
        for(let i of data){
          i.shopSelect = this.all
          for(let j of i.foods){
            j.isSelected = this.all
          }
        }
      }else {
         if(fd){
           if(fd.foods.find(item => !item.isSelected)){
             fd.shopSelect = false
           }else {
             fd.shopSelect = true
           }
           this.chooseAll()
         }else {
           for ( let i of data.foods ){
             i.isSelected = data.shopSelect
             if(!data.shopSelect && this.all){
               this.all = false
             }
           }
          this.chooseAll()
         }
      }
      this.totalPrice()
    },
    chooseAll(){
      if(this.shops.find(item => !item.shopSelect)){
        this.all = false
      }else {
        this.all = true
      }
    },
    buyAll(){
      let data = []
      for ( let i of this.shops){
        for ( let j of i.foods ){
          if(j.isSelected){
            data.push({shopId:i.shopId,foods:j})
          }
        }
      }
      if(data.length > 0){

      }else {
        this.$notify({
          message: '还没有选择商品哦～',
          color: '#fff',
          background: '#f29b73',
          duration:1000
        });
      }
    },
    totalPrice(){
      let price = 0
      for(let i of this.shops){
        for ( let j of i.foods ){
          if(j.isSelected){
            price += j.current * j.num
          }
        }
      }
      this.total = price
    },
    buySingle(item){
      let data = {
        shopId:item.shopId,
        foods:[]
      }
      for ( let i of item.foods){
        if(i.isSelected){
          data.foods.push(i)
        }
      }
      if(data.foods.length > 0 ){

      }else {
        this.$notify({
          message: '还没有选择商品哦～',
          color: '#fff',
          background: '#f29b73',
          duration:1000
        });
      }
    },
    toShopInfo(id){
      this.$router.push({
        name:'shopInfo',
        params:{shopId:id}
      })
    }
  }
}
</script>

<style scoped lang="scss">
.shopCart {
  background: #f8f9f9;
  .head{
    position: relative;
    height: 50px;
    display: flex;
    background: #fff;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0px -1px 0px #F0F0F0;
    .icon {
      position: absolute;
      left: 15px;
    }
  }
  .content {
    padding-bottom: 55px;
    .item {
      width: 360px;
      margin: 10px auto;
      background: #fff;
      border-radius: 5px;
      text-align: left;
      overflow: hidden;
      .shopName {
        margin: 10px 0 0 15px;
        display: flex;
        align-items: center;
        .name {
          margin: 0 2px 0 10px;
        }
      }
      .food {
        margin: 10px 0 0 20px;
        .foods {
          display: flex;
          margin-top: 5px;
          position: relative;
          img {
            width: 60px;
            height: 60px;
            margin-left: 10px;
            margin-right: 10px;
          }
          .cent {
            .foodName{
              max-width: 160px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow:ellipsis
            }
            .num {

            }
          }
          .price {
            position: absolute;
            right: 5px;
            display: flex;
            .original{
              text-decoration: line-through;
              margin-right: 5px;
              font-size: 12px;
              padding-top: 5px;
              box-sizing: border-box;
            }
            .current{
              color: red;
              font-size: 16px;
            }
          }
        }
      }
      .buy {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-bottom: 10px;
        .totalPrice {
          margin-right: 10px;
          font-size: 14px;
        }
       .btn {
         background: orange;
         margin-right: 10px;
         width: 80px;
         height: 30px;
         color: #fff;
         text-align: center;
         line-height: 30px;
         border-radius: 5px;
       }
      }
    }
  }
  .foot {
    width: 100%;
    height: 50px;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    .chooseAll{
      margin-left: 10px;
    }
    .totalPrice {
      display: flex;
      margin-right: 10px;
      .price {
        margin-right: 10px;
        height: 30px;
        line-height: 30px;
        font-weight: bolder ;
        font-size: 20px;
      }
      .cantBuy {
        background: rgba(255, 165, 0, 0.6) !important;
      }
      .goPay {
        width: 80px;
        height: 30px;
        line-height: 30px;
        background: orange;
        border-radius: 5px;
        color: #fff;
      }
    }
  }
}
</style>