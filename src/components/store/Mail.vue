<template>
    <div id="store_mail">
          <van-tabs v-model="active">
            <van-tab title="代取单">
                <van-panel v-for="(item,index) in datarender" :key="index" title="快递状态"   :status="item.flag=='unorder'? '未下单': item.flag=='order'? '交易进行中': '交易完成'">
                    <div class="maillist">
                        <p class="single"><span class="title">名称:</span> <span class="content">{{item.mailname}}</span></p>
                        <div class="double"><span class="title">委托人:</span> <span class="content"></span>  <span class="title">手机:</span> <span class="content">{{item.phone}}</span></div>
                        <div class="double"><span class="title">提货码:</span> <span class="content"></span> <span class="title">地址:</span> <span class="content">{{item.address}}</span></div>
                         <div class="double"><span class="title">受托人:</span> <span class="content">{{item.mailuser}}</span>  <span class="title">手机:</span> <span class="content">{{item.mailphone}}</span></div>
                    </div>
                    <div slot="footer">
                        <van-button size="small" type='info' :disabled="item.flag=='order'? true: false " @click="handleOrder(item._id)" >抢单</van-button>
                    </div>
                 </van-panel>
            </van-tab>
            <van-tab title="已抢单"> <van-panel v-for="(item,index) in storeMailList" :key="index" title="快递状态"   :status="item.flag=='unorder'? '未下单': item.flag=='order'? '交易进行中': '交易完成'">
                    <div class="maillist">
                        <p class="single"><span class="title">名称:</span> <span class="content">{{item.mailname}}</span></p>
                        <div class="double"><span class="title">委托人:</span> <span class="content">{{item.username}}</span>  <span class="title">手机:</span> <span class="content">{{item.phone}}</span></div>
                        <div class="double"><span class="title">提货码:</span> <span class="content">{{item.sms}}</span> <span class="title">地址:</span> <span class="content">{{item.address}}</span></div>
                         <div class="double"><span class="title">受托人:</span> <span class="content">{{item.mailuser}}</span>  <span class="title">手机:</span> <span class="content">{{item.mailphone}}</span></div>
                    </div>
                    <div slot="footer" class="double_button">
                        <van-button size="small" type='info' :disabled="item.flag=='order'? false: true " @click="orderSuccess(item._id)" >代取完成</van-button>
                        <van-button size="small" type='danger' :disabled="item.flag=='ordered'? false: true " @click="deleteOrder(item._id)" >删除订单</van-button>
                    </div>
                 </van-panel></van-tab>
        </van-tabs>
    </div>
</template>

<script>
import domain from "../../domain.js"
import Vue from "vue";
import {Tab,Tabs,Button,Toast,Panel}from "vant";
Vue.use(Tab).use(Tabs);
Vue.use(Button)
Vue.use(Toast)
Vue.use(Panel)
export default {
    data()
    {
        return {
            timer:null,
            active:0,
            datarender:[],
            storeMailList:[],
        };
    },
    created()
    {
        let context=this;
        this.timer=setInterval(()=>{
            context.getData();
            context.storeGetOrder();
        },2000)
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
            this.$http.get(`${domain}:8081/api/store/mail/get?flag=unorder`).then(function(res){
                if (res.data==="unPost")
                {
                    //Toast.fail({duration:1000,message:"还没有人代取快递呢！"});
                    context.datarender=[];
                }
                else{
                   context.datarender=res.data;
                }
            })
        },
        handleOrder(id)
        {
            let context=this;
            let user=window.localStorage.getItem("storeUser");
            let data={"_id":id,"mailuser":user};
            this.$http.post(`${domain}:8081/api/store/mail`,data,{headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"}}).then(function(res){
                if(res.data==="order_success")
                {
                    Toast.success({duration:300,message:'抢单成功'});
                }else
                if(res.data==="store_order_fail"){
                    Toast.fail({duration:300,message:"抢单失败"})
                }
            })
        },
        storeGetOrder()
        {
            let context=this;
            let mailuser=window.localStorage.getItem("storeUser");
            let dataObj={"mailuser":mailuser};
            this.$http.post(`${domain}:8081/api/store/mail/getorder`,dataObj,{headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"}}).then(function(res){
                if(res.data==="noOrder")
                {
                    Toast.fail({duration:300,message:"您还没有抢单呢"});
                }
                else{
                    context.storeMailList=res.data;
                }
            })
        },
        //商家完成订单
        orderSuccess(id)
        {
            let context=this;
            let dataObj={"_id":id};
            this.$http.post(`${domain}:8081/api/store/mail/ordered`,dataObj,{headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"}}).then(function(res){
                if(res.data==="ordered_success")
                {
                    Toast.success({duration:300,message:"代取完成,您可以删除"})
                }
                else{
                    Toast.fail({duration:300,message:"操作失败,稍后重试"})
                }
            })
        },
        //商家删除订单
        deleteOrder(id)
        {
            let context=this;
            let dataObj={"_id":id};
            this.$http.post(`${domain}:8081/api/store/mail/delete`,dataObj,{headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"}}).then(function(res){
                if(res.data==="delete_success")
                {
                    Toast.success({duration:300,message:"删除成功"});
                }
                else{
                    Toast.fail({duration:300,message:"删除失败"})
                }
            })
        }
    }
}
</script>

<style scoped lang="less">

.van-panel__footer .van-button{
    width:70%;
    margin-left:15%;
    border-radius: 10px;
}

.maillist .single{
    width:100%;
    margin-top:1%;
    span{
        display:inline-block;
    }
    .title{
        width:25%;
        color:chocolate;
        text-align:left;
        margin-left:4%;
    }
    .content{
        width:40%;
        font-size:1rem;

        text-align:center;
        color:gray;
       
    }
}
.maillist .double{
    width:100%;
    margin-top:1%;
    padding-left:4%;
    span{
        display:inline-block;
    }
    .title{
        width:18%;  
        text-align:center;
        color:chocolate;    
        text-align:left;
    }
    .content{
        width:30%;
        color:gray;
        text-align:left;
    }
}
.double_button{
    width:100%;
   .van-button{
        
        display:inline-block;
        width:30%;
    }
}
</style>