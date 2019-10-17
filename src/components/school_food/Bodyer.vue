<template>
    <div id="food_bodyer">
        <van-tabs v-model="active" sticky>
            <van-tab title="菜单">
                <caipin></caipin>
            </van-tab>
            <van-tab title="我的订单">
                <Ordergoods></Ordergoods>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import Caipin from "./Cai_name.vue"
import Ordergoods from "./order_goods.vue"
import Vue from "vue";
import {Tab,Tabs} from "vant";
Vue.use(Tab).use(Tabs);
export default {
    data()
    {
        return {
           active:0,
        }
    },
    components:{
        Caipin,
        Ordergoods,
    },
}
</script>

<style lang="less" scoped>
#food_bodyer{
    width:100%;
    height:auto;
}
</style>