<template>
    <div id="news_header">
       <van-nav-bar
            title="校内新闻"
            left-text="返回"
            left-arrow
            fixed
            @click-left="onClickLeft"
        />
    </div>
</template>

<script>
import Vue from "vue";
import {NavBar}from "vant"
Vue.use(NavBar)
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
#news_header{
    width:100%;
    height:50px;
    overflow:hidden;
    .van-nav-bar{
        height:50px;
        
    }
}
</style>