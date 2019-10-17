<template>
    <div id="header">
        <van-nav-bar
            title="校内美食"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
    </div>
</template>

<script>
import Vue from "vue"
import {NavBar}from "vant";
Vue.use(NavBar);
export default {
    data()
    {
        return {};
    },
    methods:{
        onClickLeft()
        {
            this.$router.push("/student/home")
        }
    }
   
}
</script>

<style scoped lang="less">
#header{
    width:100%;
    height:50px;
    .van-nav-bar{
        height:50px;
    }
}
</style>