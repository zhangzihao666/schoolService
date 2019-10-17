<template>
    <div id="bodyer">
        <div id="nav">
             <div class="nav-list">
                 <router-link to="/school/news/home"><div class="nav-item"><img src="../../../public/img/body/news.png"><span>校内新闻</span></div></router-link>
                 <router-link to="/school/food/home"><div class="nav-item"><img src="../../../public/img/body/eat.png"><span>校内美食</span></div></router-link>
                 <router-link to="/stm/class/home"><div class="nav-item"><img src="../../../public/img/body/xin_pian.png"><span>单片机班</span></div></router-link>
                 <router-link to="/postgraduate/home"><div class="nav-item"><img src="../../../public/img/body/kao_yan.png"><span>考研介绍</span></div></router-link>
             </div>
             <div class="nav-list">
                 <router-link to="/fast/mail/home"><div class="nav-item"><img src="../../../public/img/body/kuai_di.png"><span>快递委托</span></div></router-link>
                 <router-link to="/resource/share/home"><div class="nav-item"><img src="../../../public/img/body/gong_xiang.png"><span>资源共享</span></div></router-link>
                 <router-link to="/school/table/home"><div class="nav-item"><img src="../../../public/img/body/ke_biao.png"><span>课表查询</span></div></router-link>
                 <router-link to="/job/message/home"><div class="nav-item"><img src="../../../public/img/body/zhao_pin.png"><span>招聘信息</span></div></router-link>
             </div>
        </div>
        <!--美食-->
         <div class="nav_food">
             <div class="nav_food_list">
                 <div class="food_list_item_1">
                     <img src="../../../public/img/body/food_1.jpg">
                     <p>烤肉拌饭</p>
                 </div>
                 <div class="food_list_item_2">
                      <img src="../../../public/img/body/food_2.jpg">
                        <p>快餐店</p>
                 </div>
             </div>
             <div class=" nav_food_list">
                 <div class="food_list_item">
                      <img src="../../../public/img/body/kao_rou.png">
                        <p>热干面</p>
                 </div>
                 <div class="food_list_item">
                      <img src="../../../public/img/body/cui_pi_ji.png">
                     <p>新疆大盘鸡</p>
                 </div>
                 <div class="food_list_item">
                      <img src="../../../public/img/body/ji_liu_bin.jpg">
                     <p>台湾鸡柳饼</p>
                 </div>
             </div>
        </div>
        <!--广告-->
        <div class="nav_ad">
            
           <van-notice-bar
                background="white"
                color="gray"
                left-icon="volume-o"
            >
            猪肉涨价了
            </van-notice-bar>
        </div>
       
        <div class="nav_news">
            <van-divider>轻工学院举办管理者素质培养以及职场发展讲座</van-divider>
            <van-divider>唐山市丰润区领导来轻工学院对接校城融合合作</van-divider>
            <van-divider>轻工学院参加第六届产教融合发展战略国际论坛</van-divider>
            <van-divider>轻工才俊！嘻哈包袱铺相声演员:高嘉豪、徐鸿域</van-divider>
            <van-divider>19年春季入党积极分子培训开班350余名学员参加</van-divider>
        </div>
    </div>  
</template>

<script>
import Vue from "vue";
import {NoticeBar,Divider} from "vant"
Vue.use(NoticeBar)
Vue.use(Divider)
export default {
    data()
    {
        return {};
    },
    methods:{
        handleChange(index)
        {

        }
    }
}
</script>

<style lang="less" scoped>
#bodyer{
    width:100%;
    height:590px;
    #nav{
        width:100%;
        height:160px;
       
        .nav-list{
            width:100%;
            height:50%;
           
            a{
                display:inline-block;
                width:23%;
                height:90%;
                text-decoration:none;
                margin-left:2%;
                .nav-item{
                    width:100%;
                    height:100%;
                    box-sizing:border-box;
                    padding-left:25%;
                    padding-top:10%;
                    img{
                        width:60%;
                        height:50%;
                        display:block;
                    }
                    span{
                        display:block;
                        font-size:0.8rem;
                        color:gray;
                        width:100%;
                        height:20%;
                        margin-left:-12%;
                        margin-top:10%;
                        border:1px solid white;
                    }
                }
                
            }
        }
    }
    //美食展示
     .nav_food{
        width:100%;
        height:185px;
        box-sizing:border-box;
        .nav_food_list{
            width:100%;
            height:50%;
            overflow:hidden;
            .food_list_item_1{
                display:inline-block;
                width:69%;
                height:100%;
                position:relative;
                border:1px solid white;
                img{
                    display:block;
                    width:100%;
                    height:100%;
                }
                p{
                    position:absolute;
                    left:0;
                    top:75%;
                    width:100%;
                    height:25%;
                    text-align:center;
                    background:gray;
                    font-size:0.9rem;
                    color:white;
                    opacity:0.8;
                }
            }
            .food_list_item_2{
                display:inline-block;
                width:29%;
                height:100%;
                position:relative;
                 border:1px solid white;
                img{
                    display:block;
                    width:100%;
                    height:100%;
                }
                p{
                    position:absolute;
                    left:0;
                    top:75%;
                    background:gray;
                    width:100%;
                    height:25%;
                    text-align:center;
                    font-size:0.9rem;
                    color:white;
                    opacity:0.8;
                }
            }
            .food_list_item{
                display:inline-block;
                width:32.5%;
                height:100%;
                border:1px solid white;
                position:relative;
                img{
                    display:block;
                    width:100%;
                    height:100%;
                }
                p{
                   position:absolute;
                   left:0;
                   top:75%;
                    width:100%;
                    height:25%;
                    background:gray;
                    color:white;
                    opacity:0.8;
                    text-align:center;
                    font-size:0.9rem;
                }
            }
        }
    }
    //广告区
    .nav_ad{
        width:100%;
        height:40px;
        overflow:hidden;
        box-sizing:border-box;
        .van-notice-bar{
            width:100%;
            height:100%;
        }
    }
   
    .nav_news{
        width:100%;
        height:205px;
        box-sizing:border-box;
        .van-divider{
            border-color:white;
          
        }
    }
}
@keyframes dong{
    0%,15%{
        opacity:1;
        transform:translateX(0);
    }
    20%,35%{
        opacity:0.9;
        transform:translateX(-20%);
    }
    40%,55%{
        opacity:0.8;
        transform:translateX(-40%);

    }
    60%,75%{
        opacity:0.7;
        transform: translateX(-60%);
    }
    80%,100%{
        opacity:1;
        transform:translateX(-80%);
    }
}
</style>