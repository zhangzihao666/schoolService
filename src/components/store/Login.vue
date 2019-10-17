<template>
    <div id="login_store">
       <mt-field label="账号:" placeholder="请输入账号" v-model="username"></mt-field>
       <mt-field label="密码:" placeholder="请输入密码" type="password" v-model="password"></mt-field>
       <div class="login_icon" @click="handleLogin"><img src="../../../public/img/student/arrow.png"></div>
       <div class="login_message">
           <div><span class="left" @click="handleForget"><b>忘记密码</b></span> <span class="shuxian"></span> <span class="right" @click="handleRegist"><b>用户注册</b></span></div>
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
        return{
            username:"",
            password:""
        }
    },
     created()
    {
        window.localStorage.removeItem("storeFlag");
        window.localStorage.removeItem("storeUser");
    },
    methods:{
       handleLogin()
        {
            let data={"user":this.username,"password":this.password};
            let password=this.password;
            let username=this.username;
            var context=this;
        
           if(password===""||username==="")
           {
               
                Toast.fail({duration:1000,message:"账号或密码不能为空"});
           }
           else{
                    this.$http.post(`${domain}:8081/api/store/login`,data,{headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"}}).then(function(res){
                    if(res.data==="login_success")
                    {
                       
                        Toast.success({duration:500,message:"登录成功 欢迎回来"});
                        context.$store.dispatch("storeLogin",true);
                        window.localStorage.setItem("storeFlag", "isLogin");
                        window.localStorage.setItem("storeUser",context.username)
                        context.$router.push({path:"/store/home"})
                    }
                    else
                    if(res.data==="password_error")
                    {
                        
                        Toast.fail({duration:1000,message:"密码错误 忘记请联系站长QQ:2324258547"});
                    }
                    else
                    if(res.data==="no_regist")
                    {
                        
                         Toast.fail({duration:1000,message:"未注册"});
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
            this.$router.push("/register/store")
        },
        handleService()
        {
            this.$router.push("/service")
        }
    }
}
</script>

<style lang="less" scoped>
#login_store{
    margin-left:8%;
     .login_icon{
        width:20%;
        height:50px;
        margin-left:35%;
        margin-top:5%;
        border:1px solid lightgray;
        background: -moz-radial-gradient(lightskyblue, blue); /* Firefox 3.6 - 15 */
        background: -webkit-radial-gradient(lightskyblue, blue);
        border-radius:50%;
        animation:dong 6s infinite linear;
        img{
            display:block;
            width:60%;
            height:60%;
            opacity:0.9;
            margin-top:18%;
            margin-left:20%;

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
}
@keyframes dong{
    0%,15%{
        opacity:0.8;
        
    }
    20%,35%
    {
        opacity:0.6;
    }
    40%,55%{
        opacity:0.4;
    }
    60%,75%{
        opacity:0.6;
    }
    80%,100%{
        opacity:0.8;
    }
}
</style>