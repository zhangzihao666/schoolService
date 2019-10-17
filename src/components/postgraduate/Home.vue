<template>
    <div id="postgraduate">
        <div class="header">
            <van-nav-bar
                title="烤盐"
                left-text="返回"
                left-arrow
                fixed
                @click-left="onClickLeft"
            />
       </div>

       <div class="bodyer">
           <div class="lunbo">
               <van-swipe :autoplay="1500" indicator-color="white">
                    <van-swipe-item><img src="../../../public/img/postgraduate/lunbo_0.jpg"></van-swipe-item>
                    <van-swipe-item><img src="../../../public/img/postgraduate/lunbo_1.jpg"></van-swipe-item>
                    <van-swipe-item><img src="../../../public/img/postgraduate/lunbo_2.jpg"></van-swipe-item>
                    <van-swipe-item><img src="../../../public/img/postgraduate/lunbo_3.jpg"></van-swipe-item>
                    <van-swipe-item><img src="../../../public/img/postgraduate/lunbo_4.jpg"></van-swipe-item>
                    <van-swipe-item><img src="../../../public/img/postgraduate/lunbo_5.jpg"></van-swipe-item>
                </van-swipe>
           </div>
           <div class="introduction">
               <div class="intro_1">
                   <br>
                   <h1>一、院校和专业选择</h1>
                   <p>
                       <br>
                       <b>1.在学校和专业之间，我的建议是专业先行。</b>就是先确定专业，再确定学校。但是不同类的专业也有所差异，不要盲目的去追求名校，梦想还是要有的，但是适合的才是最好的。比如一些人文方面的学科：汉语言文学，教育学类，心理学等，尽量选择社会名气和认可度比较高的师范院校和名校。之前听一个学历史的老师讲过，他以前去应聘的时候，别人问他是那个专业的，他说学历史的，人家就投来了一丝不屑的眼光：学这个专业有啥用？但是当他说我是北大的，人家态度立马变了。一些理工科专业：电气工程，自动化之类的只关注专业认可度，院校次之。
                       <br><b>2.关注院校以往该专业的录取情况，包括招生人数，分数线，报录比，参考书等。</b>比方说有的专业每年只招一个人（当然这很极端了），你有多大把握这个人是你呢？为了自己的前途，千万不能冲动啊年轻人。但是也不要因为害怕考不上，就不敢报好点的学校，17个月的时间你还考不好，那我觉得你可能不适合考研。专业课的参考书这一块儿有的学校会在招生目录上写出来，有的学校写的是大纲，还有的啥都没写的就去了解一下学校使用的教材。如果打算跨考的话，你还要注意学校是否接受跨考，是否有加试那些。
                        <br><b>3.地域因素。</b>你就读研究生的地方很有可能就是你将来工作的地方，所以你得做个长远的打算。当地的经济状况，民风民俗，饮食习惯，甚至是语言，都决定了是否适合你的发展。
                        <br><b>4.查询的渠道</b>：研招网，各学校官网。其他的我也没用过，咱也不知道，咱也不敢问。自己不会查的话，也可以咨询一些辅导机构吧，他们拥有大数据，也许可以帮你匹配。
                   </p>
               </div>
               <div class="intro_1">
                   <br>
                   <h1>二、复习安排</h1>
                   <br>
                   <p>
                      <b> 1、 基础阶段：</b>7月-8月第一步是资料的搜集，研究清楚目标院校专业课考试内容，需要学哪些书目，其中哪些是重点；其次是知道需要完成哪些练习，比如课后练习题，参考书目习题，真题，模拟题等等。第二步开始专业课的基础学习，通过学习教材全面掌握知识点，总结出各个章节的知识网络以及重难点知识。
                       <br><b>2、 强化阶段：</b>9月-10月带着第一遍形成的知识体系以及重难点再快速过一遍教材，着重于知识盲点，难点的扫除，对于重点知识达到更深的理解。完成教材之后可以进行对应的练习，通过练习来进行查漏补缺以及增强知识点的运用能力。
                       <br><b>3、 冲刺阶段：</b>11月-12月经过看书与习题练习，对于专业课的知识储备基本完成，解题能力也有一定加强。在这个阶段就需要着重研究真题。对于真题的研究至少要做到以下几点：<br>（1） 做完真题，对照答案进行错题分析，在返回教材对应位置查漏补缺或者加深理解<br>（2） 寻找老师的出题规律，通过对试题的分类，找出教材中各个章节出题的比重，对于重点章节一定要重点复习<br>（3） 总结历年真题的考试重点，看试题在每个章节中都经常考察哪些知识点，对于历年真题中反复出现的知识点进行总结


                   </p>
               </div>
           </div>
       </div>
       
    </div>
</template>

<script>
import Vue from "vue";
import {NavBar,Swipe,SwipeItem} from "vant";
Vue.use(NavBar)
Vue.use(Swipe).use(SwipeItem)
export default {
    data()
    {
        return {};
    },
    methods:{
        onClickLeft()
        {
            this.$router.push("/student/home");
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    width:100%;
    height:50px;
    .van-nav-bar{
        height:50px;
    }
}
#postgraduate{
    width:100%;
    height:auto;
    .bodyer{
        width:100%;
        height:1600px;
        .lunbo{
            width:100%;
            height:190px;
            .van-swipe{
                width:100%;
                height:190px;
            }
        }
        .introduction{
            width:100%;
            height:1400px;
            position: relative;
            .intro_1{
                width:100%;
                height:650px;
                h1{
                    padding-left:5%;
                }
                p{
                    width:90%;
                    margin:0 auto;
                    font-size:0.9rem;
                }
            }
        }
    }
}
.van-swipe-item img{
    width:100%;
    height:100%;
}
.introduction::after{
    content:"";
    width:100%;
    height:1400px;
    background:gray;
    opacity:0.2;
    position:absolute;
    left:0;
    top:0;

}
</style>