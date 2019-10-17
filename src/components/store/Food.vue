<template>
    <div id="store_food">
        <van-tabs v-model="active">
            <van-tab title="店内菜单">
                <Foodlist></Foodlist>
            </van-tab>
            <van-tab title="外卖订单">
               <Orderlist></Orderlist>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import Vue from "vue";
import Orderlist from "./Orderlist.vue"//商家获取自家订单模块
import Foodlist from "./Foodlist.vue"//商家获取自家菜单模块
import Bus from "../../Bus.js"
import {Tab,Tabs,Panel,Toast}from "vant";
Vue.use(Tab).use(Tabs);
Vue.use(Panel);
Vue.use(Toast)
import domain from "../../domain.js"
export default {
    data()
    {
        return {
            active:0,
            
        };
    },
    components:{
        Orderlist,
        Foodlist,
    },
    methods:{
        handleFood(id)
        {


        },
        deleteFood(id)
        {

        },
        
       
    }
}
</script>

<style scoped lang="less">

</style>