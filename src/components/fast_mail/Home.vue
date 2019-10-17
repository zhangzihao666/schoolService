<template>
    <div id="fast_mail">
        <div class="header">
            <van-nav-bar
                title="快递代取"
                left-text="返回"
                left-arrow
                fixed
                @click-left="onClickLeft"
            />
        </div>
        <van-tabs v-model="active" sticky>
            <van-tab title="发布代取">
                <br>
                <van-cell-group>
                    <van-field
                        v-model="dataObj.mailname"
                        required
                        clearable
                        label="快递名称"
                        right-icon="question-o"
                        placeholder="请输入快递名称"
                       
                    />

                    <van-field
                        v-model="dataObj.username"
                       
                        label="委托人"
                        placeholder="请输入委托人"
                        required
                    />
                    <van-field
                        v-model="dataObj.phone"
                       
                        label="手机号"
                        placeholder="请输入手机号"
                        type="tel"
                        required
                    />
                    <van-field
                        v-model="dataObj.sms"
                       
                        label="提货码"
                        placeholder="请输入提货码"
                        required
                    />
                    <van-field
                        v-model="dataObj.address"
                       
                        label="委托人地址"
                        placeholder="请输入地址"
                        required
                    />
                   
                </van-cell-group>
                 <van-button type="info" size="large" @click="onClick">提交</van-button>
            </van-tab>

            <van-tab title="快递列表">
                  <van-panel v-for="(item,index) in datarender" :key="index" title="快递状态"   :status="item.flag=='unorder'? '未下单': item.flag=='order'? '交易进行中': '交易完成'">
                    <div class="maillist">
                        <p class="single"><span class="title">名称:</span> <span class="content">{{item.mailname}}</span></p>
                        <div class="double"><span class="title">委托人:</span> <span class="content">{{item.username}}</span>  <span class="title">手机:</span> <span class="content">{{item.phone}}</span></div>
                        <div class="double"><span class="title">提货码:</span> <span class="content">{{item.sms}}</span> <span class="title">地址:</span> <span class="content">{{item.address}}</span></div>
                         <div class="double"><span class="title">受托人:</span> <span class="content">{{item.mailuser}}</span>  <span class="title">手机:</span> <span class="content">{{item.mailphone}}</span></div>
                    </div>
                    <div slot="footer">
                        <van-button size="small" type='info' :disabled="item.flag=='order'? false: true " @click="handleComplete(item._id)" >完成代取</van-button>
                        <van-button size="small" type="danger" :disabled="item.flag=='order'? true : false" @click="handleDelete(item._id)">删除代取</van-button>
                    </div>
                 </van-panel>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
//import maillist from "./mailList.vue"
import domain from "../../domain.js"
import Vue from "vue";
import {Tab,Tabs,NavBar,Field,Button,Toast,Cell,CellGroup,Panel}from "vant";
Vue.use(Tab).use(Tabs);
Vue.use(NavBar)
Vue.use(Field)
Vue.use(Button)
Vue.use(Toast)
Vue.use(Panel)
Vue.use(Cell).use(CellGroup)
export default {
    data()
    {
        return {
            active:1,
            timer:null,
            dataObj:{
                mailname:"",
                username:"",
                phone:"",
                sms:"",
                address:"",
                user:"",
                time:"",
                flag:"unorder",//unorder,order,ordered
                mailuser:"",
                mailphone:""
            },
            datarender:[],
        };
    },
    created()
    {
        let context=this;
        this.timer=setInterval(()=>{
            context.getData();
        },1500)
    },
    beforeDestroy()
    {
        clearInterval(this.timer);
        this.timer=null;
    },
    methods:{
        onClickLeft()
        {
            this.$router.push("/student/home")

        },
        onClick()
        {
            let context=this;
             if(this.dataObj.mailname=="")
             {
                 Toast.fail({duration:1500,message:'快递名称不能为空'});

             }
             else
             if(this.dataObj.username=="")
             {
                 Toast.fail({duration:1500,message:'委托人不能为空'});
             }
             else
             if(this.dataObj.phone=="")
             {
                 Toast.fail({duration:1500,message:'手机号不能为空'});
             }
             else
             if(this.dataObj.sms=="")
             {
                 Toast.fail({duration:1500,message:'提货码不能为空'});
             }
             else
             if(this.dataObj.address=="")
             {
                 Toast.fail({duration:1500,message:'地址不能为空'});
             }
             else{
                  let data=this.dataObj;
                  data.user=window.localStorage.getItem("studentUser");
                  context.dataObj.flag="unorder";
                  this.$http.post(`${domain}:8081/api/student/mail`,data,{headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"}}).then(function(res){
                      if(res.data==="mailPost_success")
                      {
                          Toast.success({duration:300,message:"成功提交"});
                          for(let i in context.dataObj)
                          {
                              context.dataObj[i]="";
                          }
                      }else
                      if(res.data==="mailPost_fail"){
                          Toast.fail({duration:300,message:"提交失败"})
                      }
                  })  
             } 
        },
        getData()
        {
            const context=this;
            let user=window.localStorage.getItem("studentUser");
            this.$http.get(`${domain}:8081/api/student/mail?user=${user}`).then(function(res){
                if (res.data==="unpost")
                {
                   // Toast.fail({duration:300,message:"你还没有提交过呢！"});
                    context.datarender=[];
                }
                else{
                   context.datarender=res.data;
                }
            })
        },
        handleComplete(id)
        {
            let context=this;
            let data={"_id":id};
            this.$http.post(`${domain}:8081/api/student/mail/complete`,data,{headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"}}).then(function(res){
                if(res.data==="ordered_success")
                {
                    
                    Toast.success({duration:300,message:"交易完成"});
                    context.getData();
                }else
                if(res.data==="mail_ordered_fail"){
                    Toast.fail({duration:300,message:"操作失败"})
                }
            })
        },
        handleDelete(id)
        {
            let context=this;
            let data={"_id":id};
            this.$http.post(`${domain}:8081/api/student/mail/delete`,data,{headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"}}).then(function(res){
                if(res.data==="delete_success")
                {
                    
                    Toast.success({duration:300,message:"删除成功"});
                    context.getData();
                }
                else
                if(res.data==="mail_delete_fail")
                {
                    Toast.fail({duration:300,message:"删除失败"})
                }
            })
        }
    },
    components:{
       
    }
}
</script>

<style lang="less" scoped>
#fast_mail{
    width:100%;
    .header{
        width:100%;
        height:50px;
        .van-nav-bar{
            height:50px;
        }
    }
}

.van-tab__pane .van-button{
    width:90%;
    border-radius:1rem;
    margin:0 5%;
    margin-top:5%;
}
.van-panel__footer .van-button{
    width:40%;
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

.van-tabs__content{
    position:fixed;
    left:0;
    top:90px;
}
</style>