<template>
  <div id="header">
    <div class="logo">
      <van-nav-bar
        title="校内服务"
        right-text="注销"
        left-text="返回"
        left-arrow
        @click-right="onClickRight"
        @click-left="onClickLeft"
        fixed
      />
    </div>
    <!--轮播图-->
    <div class="slide_mig">
        <van-swipe :autoplay="2000" indicator-color="white">
          <van-swipe-item><img src="../../../public/img/header/lunbo_1.jpg"></van-swipe-item>
          <van-swipe-item><img src="../../../public/img/header/lunbo_2.jpg"></van-swipe-item>
          <van-swipe-item><img src="../../../public/img/header/lunbo_3.jpg"></van-swipe-item>
        </van-swipe>
    </div>
</div>

</template>
<script>
import Vue from "vue";
import {NavBar,Swipe,SwipeItem}from "vant"
Vue.use(NavBar)
Vue.use(Swipe).use(SwipeItem)
  export default {
    data()
    {
      return {};
    },
    methods:{
     onChange(index)
      {

      },
      onClickRight()
      {
        window.localStorage.removeItem("studentFlag");
        window.localStorage.removeItem("studentUser");
        this.$router.push("/login/student")
      },
      onClickLeft()
      {
        window.localStorage.removeItem("studentFlag")
        window.localStorage.removeItem("studentUser");
        this.$router.push("/login/student")
      }
    }
  }
</script>
<style lang="less" scoped>
#header{
  width:100%;
  height:210px;
  .logo{
    width:100%;
    height:50px;
    overflow:hidden;
    .van-nav-bar{
      height:50px;
    }
  }
  .slide_mig{
    width:100%;
    height:160px;
    clear:both;
    .van-swipe{
      width:100%;
      height:161px;
    }
  }
}
.van-swipe-item img{
  width:100%;
  height:100%;
}
.van-swipe .van-swipe_track .van-swipe-item img:hover {
  cursor:pointer;
}
</style>
