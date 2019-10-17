<template>
    <div id="stm_class">
        <div class="header">
            <van-nav-bar
                title="单片机作品展示"
                left-text="返回"
                left-arrow=""
                @click-left="onClickLeft"
                fixed
            />
        </div>
        <div class="main">
            <van-swipe :autoplay="1500" indicator-color="white">
                <van-swipe-item><img src="../../../public/img/stm/lunbo_0.jpg"></van-swipe-item>
                <van-swipe-item><img src="../../../public/img/stm/lunbo_1.jpg"></van-swipe-item>
                <van-swipe-item><img src="../../../public/img/stm/lunbo_2.jpg"></van-swipe-item>
                <van-swipe-item><img src="../../../public/img/stm/lunbo_3.jpg"></van-swipe-item>
                <van-swipe-item><img src="../../../public/img/stm/lunbo_4.jpg"></van-swipe-item>
                <van-swipe-item><img src="../../../public/img/stm/lunbo_5.jpg"></van-swipe-item>
                <van-swipe-item><img src="../../../public/img/stm/lunbo_6.jpg"></van-swipe-item>
            </van-swipe>
            <div class="main_body">
            <div class="introduce">
                <br>
                <h1>介绍</h1>
                <p>单片机是一种集成电路芯片，是采用超大规模集成电路技术
                    把具有数据处理能力的中央处理器CPU、随机存储器RAM、只读存储器ROM、多种I/O口和中断
                    系统、定时器/计数器等功能集成到一块硅片上构成的一个小而完善
                    的微型计算机系统，在工业控制领域广泛应用。从上世纪80年代，由当时的4位、8位单片机，
                    发展到现在的300M的高速单片机。
                </p>
            </div>
           
            <div class="application">
                <h1>应用场景</h1>
                <p>
                    <br>
                    <b>1、智能化家用电器:</b>各种家用电器普遍采用单片机智能化控制代替传统的电子线路控制，升级换代，提高档次，如洗衣机、空调、电视机、微波炉、电冰箱、电饭煲以及各种视听设备。
                    <br><b>2、办公自动化设备：</b>现代办公室使用的大量通信和办公设备多数嵌入了单片机。如打印机、复印机、传真机、绘图机、电话以及通用计算机中的键盘译码、磁盘驱动等。
                    <br><b>3、工业自动化控制:</b>工业自动化控制是最早采用单片机控制的领域之一。如各种测控系统、过程控制、机电一体化、PLC等。在化工、建筑、冶金等各种工业领域都要用到单片机控制。
                    <br><b>4、商业营销设备:</b>电子秤、收款机、条形码阅读器、IC卡刷卡机、出租车计价器等
           
                </p>
            </div>
            <div class="job">
                <h1>就业前景</h1>
                <p>
                    <br>
                   <mark> 单片机开发工程师  嵌入式应用开发工程师 </mark><br>
                   <b> 1、单片机</b>（直接整stm32好了，得有数模基础，spi，iic协议这些要懂。单片机开发相对简单，但前途有限）<br>
                   <b> 2、驱动开发</b>（整uboot kernel fpga 等，有前途，但难度大很多）<br>
                    <b>3、应用开发</b>（我就是这种，基本是linux上的开发，搞安卓要会app，需要java基础。得会c++，不然就业面很窄。会qt。sqlite数据库。c语言进阶的内容要很懂。这个方向宽阔，可以转去搞互联网的c++开发)！
                </p>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import {NavBar,Swipe,SwipeItem} from "vant";
Vue.use(NavBar);
Vue.use(Swipe).use(SwipeItem)
export default {
    data()
    {
        return {}
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
#stm_class{
    width:100%;
    height:auto;
    .header{
        width:100%;
        height:50px; 
        .van-nav-bar{
            height:50px;
        }
    }
    .main{
        width:100%;
        height:970px;
        cursor:pointer;
        .van-swipe{
            width:100%;
            height:190px;
        }

        .introduce{
            width:100%;
            height:200px;
            position:relative;
            h1{
                padding-left:5%;
            }
            p{
                width:90%;
                margin:0 auto;
                text-indent:20px;
                font-size:0.9rem;
                height:100%;
                color:black;
            }
        }
        
        .application{
            width:100%;
            height:350px;
            position:relative;
             h1{
                padding-left:5%;
            }
             p{
                width:90%;
                margin:0 auto;
                text-indent:20px;
                font-size:0.9rem;
                height:100%;
                color:black;
            }
        }
        .job{
            width:100%;
            height:220px;
             h1{
                padding-left:5%;
            }
           p{
                width:90%;
                margin:0 auto;
                text-indent:20px;
                font-size:0.9rem;
                height:100%;
                color:black;
            }
        }
    }
  
}
.van-swipe-item img{
    width:100%;
    height:100%;
}
.v-enter,.v-leave-to{
    transform:translateY(-120px);
}
.v-enter-active,.v-leave-active{
    transition:all 1s ease;
}
.main_body{
    width:100%;
    height:900px;
    position:relative;
}
.main_body::after{
    width:100%;
    height:900px;
    position:absolute;
    content:"";
    left:0;
    top:0;
    background:gray;
    opacity:0.2;
}
</style>