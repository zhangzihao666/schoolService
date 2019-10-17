<template>
    <div id="order">
        <van-panel v-for="(item,index) in foodList" :key="index" title="订单详情"   :status=" falseValue===item.isCharge? '订单进行中':'订单完成'">
            <div class="food_content">
                <div class="double">
                    <span class="title">店名: </span> <span class="title_child">{{item.store_name}}</span>
                    <span class="title">菜名:</span>  <span class="title_child">{{item.food_name}}</span>
                </div>
                <div class="double">
                    <span class="title">单价:</span> <span class="title_child">{{item.food_price}}元</span>
                    <span class="title">数量:</span> <span class="title_child">{{item.food_num}}份</span>
                </div>
                <div class="single">
                    <span class="single_1">总价:</span> <span class="single_2">{{item.food_price*item.food_num}}元</span>
                </div>
                <div class="single">
                    <span class="single_1">下单时间:</span> <span class="single_2" :time="timeObj=new Date(parseInt(item.time))">{{timeObj.getMonth()+1+'月'+timeObj.getDate()+'日' +timeObj.toLocaleTimeString()}}</span>
                </div>
            </div>
            <div slot="footer">
                <van-button size="small" type="info" :disabled="item.isCharge==='false' ? false : true" @click="handleFood(item._id)">完成订单</van-button>
                <van-button size="small" type="danger" :disabled="item.isCharge==='false'? true : false" @click="deleteFood(item._id)">删除订单</van-button>
            </div>
        </van-panel>
    </div>
</template>

<script>
import domain from "../../domain.js"
import Vue from 'vue';
import { Panel,Toast } from 'vant';
Vue.use(Panel);
Vue.use(Toast)
export default {
    data()
    {
        return {
            timer:null,
            foodList:[],
            falseValue:"false",
            timeObj:"",
        };

    },
    created()
    {
        let context=this;
        this.timer=setInterval(() => {
            context.getData()
        }, 1500);
    },
    beforeDestroy()
    {
        clearInterval(this.timer);
        this.timer=null;
    },
    methods:{
         getData()
        {
            
            const context=this;
            let user=window.localStorage.getItem("studentUser");
            this.$http.get(`${domain}:8081/api/student/food?user=${user}`).then(function(res){
                if(res.data==="noOrder")
                {
                   // Toast.fail({duration:500,message:"您还没有预定呢"});
                    context.foodList=[];
                }
                else{
                        context.foodList=[];
                        context.foodList=res.data;
                        let data=res.data;
                        for(let i=0;i<context.foodList.length;i++)
                        {
                            context.foodList[i].store_name=data[i].store_name;
                            context.foodList[i].food_name=data[i].food_name;
                            context.foodList[i].food_price=data[i].food_price;
                            context.foodList[i].food_num=data[i].food_num;
                            context.foodList[i].time=data[i].time;
                            context.foodList[i].price_sum=context.foodList[i].food_num*context.foodList[i].food_price;
                        }
                }
            })
        },
        handleFood(id)
        {
            let context=this;
            let dataObj={"_id":id};
            this.$http.post(`${domain}:8081/api/student/food/finish`,dataObj,{headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"}}).then(function(res){
                if(res.data==="finish_success")
                {
                    Toast.success({duration:300,message:"订单已完成"});
                }
                else
                if(res.data==="student_finish_fail"){
                    Toast.fail({duration:300,message:"操作失败" })
                }
            })
           
        },
        deleteFood(id)
        {
            let context=this;
            let dataObj={"_id":id};
            this.$http.post(`${domain}:8081/api/student/food/delete`,dataObj,{headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"}}).then(function(res){
              if(res.data==="delete_success")
              {
                  Toast.success({duration:300,message:"订单已删除"});
                  
              }else
              if(res.data==="student_delete_fail"){
                  Toast.fail({duration:300,message:"删除失败"})
              }
           })
        }
    }
}
</script>

<style lang="less"scoped>
#order{
    width:100%;
    height:auto;
}
.food_content{
    .double{
        width:100%;
        height:30px;
        margin:0;
        padding:0;
        overflow:hidden;
        .title{
            width:15%;
            height:100%;
            display:inline-block;
            color:chocolate;
            margin-left:4%;
        }
        .title_child{
            display:inline-block;
           width:30%;
           height:70%;
           font-size:0.9rem;
           text-align:center;
           color:gray;
        }
        
    }
    .single{
        width:100%;
        height:30px;
        overflow:hidden;
        .single_1{
            width:25%;
            height:100%;
            display:inline-block;
            color:chocolate;
            margin-left:4%;
        }
        .single_2{
            width:70%;
            height:100%;
            display:inline-block;
            text-align:center;
            font-size:0.9rem;
            color:gray;
        }
    }
}
button{
    width:50%;
    cursor:pointer;
}
</style>