<template>

    <div id="footer">
      <van-divider dashed :style="{borderColor:'white'}">版权所有&copy;华北理工大学轻工学院</van-divider>
      <van-divider dashed :style="{borderColor:'white'}">如有问题 联系站长 QQ2324258547</van-divider>
    </div>

</template>

<script>
import Vue from "vue";
import {Divider}from "vant";
Vue.use(Divider)
export default {
    data(){
        return{};
    }
}
</script>

<style lang="less" scoped>

#footer{
    width:100%;
    height:60px;
    box-sizing:border-box;
    position:relative;
    display:block;
    .van-divider{
        color:gray;
        height:25px;
        margin:2px 0;
        font-weight: bolder;
    }
}
#footer::after{
    content:" ";
    width:100%;
    background-image:url("../../../public/img/header/lunbo_2.jpg");
    background-size:contain;
    opacity:0.4;
    top:0;
    left:0;
    position:absolute;
    z-index:-1;
    bottom:0;
}
</style>