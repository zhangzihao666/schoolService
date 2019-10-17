<template>
    <div id="mainer"> 
        <div class="store_message">
            <van-notice-bar
                text="祝 贺 新 中 国 成 立 70 周 年 我 和 我 的 祖 国 一 刻 也 不 能 分 割"
                color="red"
                background="white"
                left-icon="volume-o"
             />
        </div>
        <div class="store_icon">
            <router-link to="/store/food"><img src="../../../public/img/store/store.png"><span>WO的店</span></router-link>
            <router-link to="/store/mail"><img src="../../../public/img/store/mail.png"><span>代取快递</span></router-link>
            <router-link to="/store/feedback"><img src="../../../public/img/store/feedback.png"><span>学生反馈</span></router-link>
            <router-link to="/store/employ"><img src="../../../public/img/store/employ.png"><span>招聘兼职</span></router-link>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import {NoticeBar} from "vant";
Vue.use(NoticeBar)
export default {
    data()
    {
        return {
            
        };
    },
    
}
</script>

<style scoped lang="less">
#mainer{
    width:99%;
    height:800px;
    margin:0 auto;
    border:1px dotted red;
    .store_message{
        width:100%;
        height:40px;
    
    }
    .store_icon{
        width:99%;
        height:60px;
        margin:0 auto;
        padding-left:4%;
        border:1px dotted green;
         a{
            display:inline-block;
            width:23%;
            height:60px;
            margin:0 auto;
            img{
                display:block;
                width:40%;
                height:50%;
                margin:0 auto;
            }
            span{
                display:block;
                width:100%;
                height:40%;
        
                box-sizing:border-box;
                text-align:center;
                color:gray;
                font-size:0.9rem;
                padding-top:5%;
            }
        }
    }
   
}
</style>