<template>
    <div id="store_header">
        <van-nav-bar
            title="管理员后台"
            left-text="返回"
            right-text="注销"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            fixed
        />
    </div>
</template>

<script>
import Vue from "vue";
import {NavBar}from "vant";
Vue.use(NavBar)
export default {
    data()
    {
        return {};
    },
    methods:{
        onClickLeft()
        {
            window.localStorage.removeItem("adminFlag");
            window.localStorage.removeItem("adminUser");
            this.$router.push("/login/admin")

        },
        onClickRight()
        {
            window.localStorage.removeItem("adminFlag");
            window.localStorage.removeItem("adminUser");
           // this.$router.push("/login/admin")
        }

    }
}
</script>

<style scoped lang="less">
    #store_header{
        width:100%;
        height:50px;
        .van-nav-bar{
            height:50px;
        }
    }
</style>