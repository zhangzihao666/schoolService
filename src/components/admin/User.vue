<template>
    <div>
        <van-tabs v-model="active">
            <van-tab title="学生">
                <form action="/">
                    <van-search
                        v-model="value"
                        placeholder="请输入账号"
                        show-action
                        @search="onSearch"
                        @cancel="onCancel"
                    />
                </form>
            </van-tab>
            <van-tab title="商家">商家</van-tab>
            <van-tab title="管理员">
                <div class="list_icon" @click="getAdmin">
                   <img src="../../../public/img/admin/addlist.png"> <span>获取管理员账号列表</span>
                </div>
                <div>
                    <van-panel v-for="(item,index) in adminList" :key="index" title="状态" status="申请中" >
                        <div>账号名:{{item.user}} 电话:{{item.phone}} QQ:{{item.qq}}</div>
                        <div slot="footer">
                            <van-button size="small" type="info" @click.native="agreeApplication(item._id)">同意</van-button>
                            <van-button size="small" type="danger" @click.native="deleteAdmin(item._id)">删除</van-button>
                        </div>
                    </van-panel>

                    <van-panel v-for="(item,index) in userList" :key="index" title="状态" status="管理员" >
                        <div>账号名:{{item.user}} 电话:{{item.phone}} QQ:{{item.qq}}</div>
                        <div slot="footer">
                            <van-button size="small" type="info" @click.native="showChange">修改</van-button>
                            <van-button size="small" type="danger" @click.native="deleteAdmin(item._id)">删除</van-button>
                        </div>
                    </van-panel>
                </div>   
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs ,Search,Toast,Panel} from 'vant';
import domain from "../../domain.js"
Vue.use(Tab).use(Tabs);
Vue.use(Search)
Vue.use(Toast)
Vue.use(Panel)
export default {
    data()
    {
        return {
            active:0,
            value:"",
            adminList:[],//普通管理员申请列表
            userList:[],//管理员列表
        };
    },
    methods:{
        onSearch()
        {
            console.log("sou suo")
        },
        onCancel()
        {
            console.log("qu xiao")
        },
        //获取管理员申请列表
        getAdmin()
        {   
            let context=this;
            let data={"power":"unagree"}
            let  ordinary={"power":"ordinary"}
            if(window.localStorage.getItem("adminUser")==="张子豪")
            {
                 this.$http.post(`${domain}:8081/api/admin/unagree`,data,{headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"}}).then(function(res){
                     if(res.data==="nounagree")
                     {
                         Toast.fail({duration:500,message:"还没人申请管理员账号"})
                     }else
                     {
                         context.adminList=res.data;
                     }
                 })
                 //获取管理员列表
                  this.$http.post(`${domain}:8081/api/admin/ordinary`,ordinary,{headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"}}).then(function(res){
                     if(res.data==="noordinary")
                     {
                         Toast.fail({duration:500,message:"还没有管理员账号"})
                     }else
                     {
                         context.userList=res.data;
                     }
                 })
            }
            else
            {
                Toast.fail({duration:300,message:"您没有权限"})
            }
        },
        agreeApplication(id)
        {
            let context=this;
           let data={"_id":id};
           this.$http.post(`${domain}:8081/api/admin/unagree/complete`,data,{headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"}}).then(function(res){
                if(res.data==="ordinary_success")
                {
                    Toast.fail({duration:500,message:"已同意"})
                    context.getAdmin();
                }else
                if(res.data==="ordinary_fail")
                {
                    Toast.fail({duration:500,message:"操作失败"})
                }
            })
        },
        deleteAdmin(id)
        {
            let context=this;
            let data={"_id":id};
           this.$http.post(`${domain}:8081/api/admin/delete`,data,{headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"}}).then(function(res){
                if(res.data==="delete_success")
                {
                    Toast.fail({duration:500,message:"已删除"})
                    context.getAdmin();
                }else
                if(res.data==="delete_fail")
                {
                    Toast.fail({duration:500,message:"操作失败"})
                }
            })
        },
        showChange()
        {

        },
        changeAdmin(id)
        {

        }
    }
}
</script>

<style scoped lang="less">
.list_icon{
    width:100%;
    height:50px;
    cursor:pointer;
    img{
        display:inline-block;
        width:10%;
        height:50%;
        margin-top:3%;
        margin-left:5%;
    }
    span{
        color:gray;
        display:inline-block;
        width:80%;
        height:60%;
        box-sizing: border-box;
        padding-left:12%;
        padding-top:2%;
        position:relative;
        top:-5%;
    }
}
</style>