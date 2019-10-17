<template>
    <div id="student_register">
        <div class="title"><h1>学生注册</h1></div>
       <van-cell-group>
            <van-field
                v-model="username"
                clearable
                required
                label="账号"
                right-icon="question-o"
                placeholder="请输入用户名"
                @click-right-icon="$toast('question')"
            />

            <van-field
                v-model="password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
            />
             <van-field
                v-model="passwordSecond"
                type="password"
                label="确认密码"
                placeholder="请再次输入密码"
                required
            />
            <van-field
                v-model="phone"
                type="text"
                label="手机号"
                placeholder="请输入手机号"
                required
            />
            <van-field
                v-model="qqNumber"
                type="text"
                label="QQ号"
                placeholder="请输入QQ号"
                required
            />
        </van-cell-group>
        <van-button type="warning" size="normal" @click.native="handleRegist">注册</van-button>
    </div>
</template>

<script>
import domain from "../../domain.js"
import Vue from 'vue';
import { Field,Button ,Toast} from 'vant';
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast)
export default {
    data()
    {
        return {
            username:"",
            value:"",
            password:"",
            phone:"",
            passwordSecond:"",
            qqNumber:""
        };
    },
    methods:{
        handleRegist()
        {
            let context=this;
            let user=this.username;
            let pass=this.password;
            let passSecond=this.passwordSecond;
            let phone=this.phone;
            let qqNumber=this.qqNumber;
            if(user===""||pass===""||phone===""||qqNumber===""||passSecond==="")
            {
                Toast.fail({duration:1000,message:"字段不能为空"});
            }
            else
            if(pass!==passSecond)
            {
                Toast.fail({duration:1000,message:"两次输入的密码不一致"});
            }
            else
            {
                this.$http.get(`${domain}:8081/api/user?user=${user}`).then((res)=>{
                    if(res.data=="regist")
                    {
                       
                        Toast.fail({duration:1000,message:"学号已注册请登录"});
                    }
                    else
                    if(res.data=="noregist")
                    {
                            //注册学生账号
                            let admin={"user":context.username,"password":context.password,"phone":context.phone,"qqNumber":context.qqNumber};
                          
                            context.$http.post(`${domain}:8081/api/student/regist`,admin,{headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"}}).then(function(resp){
                                if(resp.data=="regist_success")
                                {
                                    Toast.success({duration:1000,message:"注册成功请登录"});
                                    context.$router.push("/login/student")
                                }
                                else
                                if(resp.data==="student_regist_fail"){
                                    Toast.fail({duration:1000,message:"注册失败"})
                                }
                            })
                    }
                   
                })
            }
        }
    }
}
</script>

<style scoped lang="less">
#student_register{
    width:80%;
    height:auto;
    margin:0 auto;
    margin-top:35%;
    .title{
        width:70%;
        height:20px;
        padding-left:38%;
        margin-bottom:10%;
        color:chocolate;
    }
    button{
        width:80%;
        height:40px;
        border-radius:15px;
        margin:0 auto;
        margin-left:10%;
        margin-top:10%;
    }
}

</style>