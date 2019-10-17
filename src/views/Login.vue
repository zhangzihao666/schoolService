<template>
    <div id="login">
        <div class="logo"> 
            <img src="../../public/img/login/logo_01.gif">
        </div>
        <div class="title">学院综合服务平台</div>
        <div class="login_select">
            <span>身份选择</span>
            <div> 
                <router-link to="/login/student">学生</router-link>
                <router-link to="/login/store">商家</router-link> 
                <router-link to="/login/admin">管理员</router-link>
            </div>
        </div>
        <transition mode="out-in"><router-view></router-view></transition>
        
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
#login{
    width:80%;  
    height:100%;
    margin:0 auto;
    margin-top:10%;
    box-sizing:padding-box;
    padding:5%;
    overflow: hidden;
    .logo{
        width:100%;
        height:10%;
        img{
                width:30%;
                height:30%;
                display:inline-block;
                margin:0 35%;
            }
    } 
    .title{
        width:100%;
        height:5%;
        text-align:center;
        margin-top:2%;
        font-size:1.2rem;
    }
    .login_select{
        width:100%;
        height:100%;
        padding-bottom:10%;
        padding-top:5%;
        margin-top:3%;
        padding-left:3%;
        span{
            width:25%;
            height:100%;
            display:inline-block;
            margin-left:5%;
            font-size:1rem;
        }
        div{
            display:inline-block;
            width:60%;
            height:100%;
             a{
                width:30%;
                height:100%;
                text-decoration: none;
                color:#333;
                margin-left:10%;
                border-radius:50%;
                font-size:1rem;
             }
            .router-link-active{
                color:gray;
                font-weight: bolder;
            }
        }
       
    }
}
.v-enter,.v-leave-to{
    transform:translateX(100px);
    opacity:0;
}
 .v-enter-active,.v-leave-active{
     opacity:0.7;
     transition:all 0.3s ease ;
 }

</style>