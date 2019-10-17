<template>
    <div id="news_bodyer">
      <van-tabs v-model="active" sticky>
            <van-tab title="时政">
                    <div class="article" v-for="count in 10" :key="count">
                        <h1>猪肉涨价了,明年是否多养猪？</h1>
                        <div class="article_item">
                            <div class="look_count"><span>999</span><span>浏览</span></div>
                            <router-link :to="{path:'/school/news/article',query:{id:count}}">
                                <p>猪肉附件里是建房拉我进来就浪费时间浪费精力积分历史交锋历史交锋联赛积分了</p>
                            </router-link>
                            <div class="dot"><span></span><span></span><span></span></div>
                        </div>
                    </div>

                    
            </van-tab>

            <van-tab title="娱乐">
                <div class="article" v-for="count in 10" :key="count">
                        <h1>论蔡徐坤的个人魅力？</h1>
                        <div class="article_item">
                            <div class="look_count"><span>999</span><span>浏览</span></div>
                            <router-link :to="{path:'/school/news/article',query:{id:count}}">
                                <p>猪肉附件里是建房拉我进来就浪费时间浪费精力积分历史交锋历史交锋联赛积分了</p>
                            </router-link>
                            <div class="dot"><span></span><span></span><span></span></div>
                        </div>
                    </div>
            </van-tab>

            <van-tab title="科技">
               <div class="article" v-for="count in 10" :key="count">
                        <h1>印度月球车二号登陆失败,却成功撞月，角度刁钻？</h1>
                        <div class="article_item">
                            <div class="look_count"><span>999</span><span>浏览</span></div>
                            <router-link :to="{path:'/school/news/article',query:{id:count}}">
                                <p>猪肉附件里是建房拉我进来就浪费时间浪费精力积分历史交锋历史交锋联赛积分了</p>
                            </router-link>
                            <div class="dot"><span></span><span></span><span></span></div>
                        </div>
                    </div>
            </van-tab>
    </van-tabs>

    </div>
</template>

<script>
import Vue from "vue";
import {Tab,Tabs}from "vant";
Vue.use(Tab).use(Tabs);
export default {
    data()
    {
        return{
          active:0,
          list:[
                {id:1,name:"张涛"},
                {id:2,name:"傻逼"},
                {id:3,name:"张飞"},
                {id:4,name:"刘翔"},
                {id:5,name:"孙膑"}
          ]
        };
    },
}
</script>

<style lang="less" scoped>
a{
    text-decoration:none;
    color:black;
}
#news_bodyer{
    width:100%;
    height:1800px;
    position:relative;
}
#news_bodyer::after{
    content:"";
    width:100%;
    height:1800px;
    position:absolute;
    left:0;
    bottom:0;
    top:0;
    z-index:-1;
    background:gray;
    opacity:0.1;
}
.article{
    width:96%;
    height:120px;
    margin:0 auto;
    border:2px solid white;
    border-color:white transparent white transparent;
    background:white;
    margin-top:5px;
    h1{
        color:black;
        font-weight: bold;
        font-size:15px;
        width:100%;
        height:30px;
        margin:0;
        display:block;
        box-sizing:border-box;
        margin:1% 0;
        padding:0;
    }
    
}
.article_item{
    position:relative;
    width:100%;
    height:80%;
    display:block;
    .look_count{
        position:absolute;
        width:30%;
        height:30%;
        left:0;
        bottom:15%;
        padding-left:1%;
        span{
            color:gray;
            display:inline-block;
            width:30%;
            height:90%;
            font-size:0.9rem;
            padding-top:5%;
        }
    }
    .dot{
        width:10%;
        height:10%;
        display:block;
        position:absolute;
        right:5%;
        bottom:35%;
        padding-left:5%;
        span{
            position: relative;
            width:10%;
            height:40%;
            margin-left:5%;
            display:inline-block;
            border-radius:50%;
            border:1px solid gray;
            background:gray;
            opacity:0.5;
        }
    } 
}    
.article .article_item a p{
    color:gray;
    font-size:0.9rem;
}
</style>