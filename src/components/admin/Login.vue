<template>
    <div id="login_admin">
       <mt-field label="账号:" placeholder="请输入账号" v-model="username"></mt-field>
       <mt-field label="密码:" placeholder="请输入密码" type="password" v-model="password"></mt-field>
       <mt-button type="primary"  size="large" @click.native="handleLogin">登录</mt-button>
       <div class="login_message">
           <div><span class="left" @click="handleForget"><b>忘记密码</b></span> <span class="shuxian"></span> <span class="right" @click="handleRegist"><b>申请账号</b></span></div>
           <p @click="handleService"><span>登录即代表阅读并同意</span><b>服务协议</b></p>
       </div>
    </div>
</template>

<script>
import domain from "../../domain.js"
import Vue from "vue";
import {Toast} from "vant"
Vue.use(Toast)
export default {
    data()
    {
        return {
            username:"",
            password:""
        }
    },
      created()
    {
        window.localStorage.removeItem("adminFlag");
        window.localStorage.removeItem("adminUser");
    },
    methods:{
        handleLogin()
        {
            let data={"user":this.username,"password":this.password};
            let password=this.password;
            let username=this.username;
            var context=this;
           if(password==""||username=="")
           {
               Toast.fail({duration:1500,message:"账号或密码不能为空"})
           }
           else{
                    this.$http.post(`${domain}:8081/api/admin/login`,data,{headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"}}).then(function(res){
                    if(res.data==="login_success")
                    {
                        Toast.success({duration:300,message:"登录成功"})
                        context.$store.dispatch("adminLogin",true);
                        window.localStorage.setItem("adminFlag", "isLogin");
                        window.localStorage.setItem("adminUser",context.username);
                        context.$router.push({path:"/admin/home"})
                        
                    }
                    else
                    if(res.data==="unagree")
                    {
                        Toast.fail({duration:300,message:"管理员账号申请中,等待同意"});
                    }
                    else
                    if(res.data=="password_error")
                    {
                      Toast.fail({message:"密码错误 忘记请联系站长QQ:1844023095",duration:1500});
                    }
                    else
                    if(res.data=="no_regist")
                    {
                       Toast.fail({message:"账号未注册",duration:1500});
                    }
                })
           }
        },
        handleForget()
        {
            Toast.fail({duration:1000,message:"功能暂未开放"});
        },
        handleRegist()
        {
            this.$router.push("/register/admin");
        },
        handleService()
        {
            this.$router.push("/service")
        }
    },
    
}
</script>

<style lang="less"scoped>
#login_admin{
    margin-left:8%;
    button{
        width:80%;
        border-radius:1rem;
        margin-top:8%;
        margin-left:7%;
    }
}
.login_message{
        width:100%;
        height:40px;
        margin:0 auto;
        margin-top:10%;
        font-size:0.8rem;
        div{
            width:76%;
            height:48%;
            position: relative;
            box-sizing:border-box;
            margin-left:10%;
            .left{
                position:absolute;
                left:0;
            }
            .right{
                position:absolute;
                right:0;
            }
             .shuxian{
                width:3px;
                height:18px;
                display:inline-block;
                background:gray;
                margin-left:45%;
                opacity:0.2;
            }
        }
        p{
            box-sizing:border-box;
            margin:0;
            padding:0;
            width:100%;
            height:50%;
            margin-top:3%;
           
            span{
                color:gray;
                
            }
            padding-left:14%;
        }
    }
</style>