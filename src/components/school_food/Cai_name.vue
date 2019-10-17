<template>
    <div id="cai_name">
         <van-overlay :show="showS" @click="show=showS=false"/>
        <van-tree-select
            height="500px"
            :items="items"
            :main-active-index.sync="activeIndex"
        >
            <template slot="content">
                <div v-if="activeIndex === 0">
                    <div class="food_item"  v-for=" (item,index) in foodlist0"  :key="index"  >
                        <img :src="require('../../../public/img/school_food/index_1.jpg')">
                        <div class="food_container">
                            <span class="food_title">{{item.food_name}}</span>
                            <span class="food_price">&yen;{{item.food_price}}元</span>
                            <span class="food_count">销量:{{item.food_count}}</span>
                            <span class="food_id">{{item.store_name}}</span>
                            <div class="gou_wu" @click="handleShop(index)"><img src="../../../public/img/school_food/gou_wu_car.png"></div>
                            <div v-show="show" class="food_shop">
                                <span class="num_title">数量:</span>
                                <input required class="input_num" min ='1' max='6' type="number" @keyup="controlCount" v-model="value" />
                                <span class="address_title"> 配送地址:</span>
                                <input required class="input_address" type="text" v-model="address"/>
                                <button  @click="orderShop(value)">下单</button>
                                <button  @click="cancelShop">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="activeIndex===1">
                    <div class="food_item"  v-for=" (item,index) in foodlist1"  :key="index"  >
                        <img :src="require('../../../public/img/school_food/index_1.jpg')">
                        <div class="food_container">
                            <span class="food_title">{{item.food_name}}</span>
                            <span class="food_price">&yen;{{item.food_price}}元</span>
                            <span class="food_count">销量:{{item.food_count}}</span>
                            <span class="food_id">{{item.store_name}}</span>
                            <div class="gou_wu" @click="handleShop(index)"><img src="../../../public/img/school_food/gou_wu_car.png"></div>
                        
                            <div v-show="show" class="food_shop">
                                <span class="num_title">数量:</span>
                                <input required class="input_num" min ='1' max='6' type="number" v-model="value" />
                                <span class="address_title"> 配送地址:</span>
                                <input required class="input_address" type="text" v-model="address"/>
                                <button  @click="orderShop(value)">下单</button>
                                <button  @click="cancelShop">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="activeIndex===2">
                    <div class="food_item"  v-for=" (item,index) in foodlist2"  :key="index"  >
                        <img :src="require('../../../public/img/school_food/index_2.jpg')">
                        <div class="food_container">
                            <span class="food_title">{{item.food_name}}</span>
                            <span class="food_price">&yen;{{item.food_price}}元</span>
                            <span class="food_count">销量:{{item.food_count}}</span>
                            <span class="food_id">{{item.store_name}}</span>
                            <div class="gou_wu" @click="handleShop(index)"><img src="../../../public/img/school_food/gou_wu_car.png"></div>
                            
                            <div v-show="show" class="food_shop">
                                <span class="num_title">数量:</span>
                                <input required class="input_num" min ='1' max='6' type="number" v-model="value" />
                                <span class="address_title"> 配送地址:</span>
                                <input required class="input_address" type="text" v-model="address"/>
                                <button  @click="orderShop(value)">下单</button>
                                <button  @click="cancelShop">取消</button>
                            </div>
                        </div>
                    </div>
                </div>   
                <!--三分-->
                <div v-if="activeIndex===3">
                    <div class="food_item"  v-for=" (item,index) in foodlist3"  :key="index" >
                        <img :src="require('../../../public/img/school_food/index_3.jpg')">
                        <div class="food_container">
                            <span class="food_title">{{item.food_name}}</span>
                            <span class="food_price">&yen;{{item.food_price}}元</span>
                            <span class="food_count">销量:{{item.food_count}}</span>
                            <span class="food_id">{{item.store_name}}</span>
                            <div class="gou_wu" @click="handleShop(index)"><img src="../../../public/img/school_food/gou_wu_car.png"></div>
                        
                            <div v-show="show" class="food_shop">
                                <span class="num_title">数量:</span>
                                <input required class="input_num" min ='1' max='6' type="number" v-model="value" />
                                <span class="address_title"> 配送地址:</span>
                                <input required class="input_address" type="text" v-model="address"/>
                                <button  @click="orderShop(value)">下单</button>
                                <button  @click="cancelShop">取消</button>
                            </div>
                        </div>
                    </div>
                </div> 
                   
                 <!--四分-->
                 <div v-if="activeIndex===4">
                    <div class="food_item"  v-for=" (item,index) in foodlist4"  :key="index"  >
                        <img :src="require('../../../public/img/school_food/index_4.jpg')">
                        <div class="food_container">
                            <span class="food_title">{{item.food_name}}</span>
                            <span class="food_price">&yen;{{item.food_price}}元</span>
                            <span class="food_count">销量:{{item.food_count}}</span>
                            <span class="food_id">{{item.store_name}}</span>
                            <div class="gou_wu" @click="handleShop(index)"><img src="../../../public/img/school_food/gou_wu_car.png"></div>
                        
                            <div v-show="show" class="food_shop">
                                <span class="num_title">数量:</span>
                                <input required class="input_num" min ='1' max='6' type="number" v-model="value" />
                                <span class="address_title"> 配送地址:</span>
                                <input required class="input_address" type="text" v-model="address"/>
                                <button  @click="orderShop(value)">下单</button>
                                <button  @click="cancelShop">取消</button>
                            </div>
                        </div>
                    </div>
                </div>    
                 <!--五分-->
                <div v-if="activeIndex===5">
                    <div class="food_item"  v-for=" (item,index) in foodlist5"  :key="index"  >
                        <img :src="require('../../../public/img/school_food/index_5.jpg')">
                        <div class="food_container">
                            <span class="food_title">{{item.food_name}}</span>
                            <span class="food_price">&yen;{{item.food_price}}元</span>
                            <span class="food_count">销量:{{item.food_count}}</span>
                            <span class="food_id">{{item.store_name}}</span>
                            <div class="gou_wu" @click="handleShop(index)"><img src="../../../public/img/school_food/gou_wu_car.png"></div>
                        
                            <div v-show="show" class="food_shop">
                                <span class="num_title">数量:</span>
                                <input required class="input_num" min ='1' max='6' type="number" v-model="value" />
                                <span class="address_title"> 配送地址:</span>
                                <input required class="input_address" type="text" v-model="address"/>
                                <button  @click="orderShop(value)">下单</button>
                                <button  @click="cancelShop">取消</button>
                            </div>
                        </div>
                    </div>
                </div>   
            </template>
        </van-tree-select>
    </div>
</template>
<script>
import domain from "../../domain.js"
import Vue from 'vue';
import Bus from "../../Bus.js"
const path =require("path")
import {TreeSelect,Button,Toast,Overlay} from 'vant';
Vue.use(TreeSelect);
Vue.use(Button);
Vue.use(Toast);
Vue.use(Overlay);
export default {
    data()
    {
        return {
            timer:null,
            address:'4331',
            index:"",
            value:1,
            activeIndex:0,
            show:false,
            showS:false,
            items:[{text:'盖饭'},{text:"炒饼/面/饭"},{text:"麻辣烫"},{text:"麻辣香锅"},{text:"面条"},{text:"饺子"}],
            foodlist0:[],
            foodlist1:[],
            foodlist2:[],
            foodlist3:[],
            foodlist4:[],
            foodlist5:[]
        }
    },
    created()
    {
        let context=this;
        //this.timer=setInterval(()=>{
            context.getFoodList()
       // },1500)
       //this.getFoodList()
    },
    beforeDestroy()
    {
       // clearInterval(this.timer)
      //  this.timer=null;
    },
    methods:{
        getFoodList()
        {
            let context=this;
             this.$http.get(`${domain}:8081/api/foodlist/get`).then(function(res){
                 if(res.data==="nofood")
                 {
                     Toast.fail({duration:1000,message:"没有人开店"});
                 }
                 else{
                        for( let item in res.data)
                        {
                            if(res.data[item].food_id==="0")
                            {
                                context.foodlist0.push(res.data[item]);
                            }
                            else
                            if(res.data[item].food_id==="1")
                            {
                                context.foodlist1.push(res.data[item]);
                            }
                            else
                            if(res.data[item].food_id==="2")
                            {
                                context.foodlist2.push(res.data[item]);
                            }
                            else
                            if(res.data[item].food_id==="3")
                            {
                                context.foodlist3.push(res.data[item]);
                            }
                            else
                            if(res.data[item].food_id==="4")
                            {
                                context.foodlist4.push(res.data[item]);
                            }
                            else
                            if(res.data[item].food_id==="5")
                            {
                                context.foodlist5.push(res.data[item]);
                            }
                        }
                 }
               
             })
        },
        controlCount()
        {
            let value=parseInt(this.value);
            if(value<1)
            {
                this.value=1;
            }else
            if(value>6){
                this.value=6;
            }

        },
        handleShop(index)
        {
            this.show=true;
            this.index=index;
            this.showS=true;
        },
        cancelShop()
        {
            this.show=false;
            this.showS=false;
        },
        orderShop(value)
        {
            this.showS=false;
            let context=this;
           var foodObj={
               user:"",
               food_name:"",
               food_count:"",
               food_price:"",
               food_num:"",
               store_name:"",
               time:"",
               isCharge:"",
               address:""
           };
            switch(this.activeIndex)
            {
                case 0:
                foodObj.food_name =this.foodlist0[this.index].food_name;
                foodObj.food_price=this.foodlist0[this.index].food_price;
                foodObj.store_name=this.foodlist0[this.index].store_name;
                break;
                 case 1:
                foodObj.food_name =this.foodlist1[this.index].food_name;
                foodObj.food_price=this.foodlist1[this.index].food_price;
                foodObj.store_name=this.foodlist1[this.index].store_name;
                break;
                 case 2:
                foodObj.food_name =this.foodlist2[this.index].food_name;
                foodObj.food_price=this.foodlist2[this.index].food_price;
                foodObj.store_name=this.foodlist2[this.index].store_name;
                break;
                 case 3:
                foodObj.food_name =this.foodlist3[this.index].food_name;
                foodObj.food_price=this.foodlist3[this.index].food_price;
                foodObj.store_name=this.foodlist3[this.index].store_name;
                break;
                 case 4:
                foodObj.food_name =this.foodlist4[this.index].food_name;
                foodObj.food_price=this.foodlist4[this.index].food_price;
                foodObj.store_name=this.foodlist4[this.index].store_name;
                break;
                 case 5:
                foodObj.food_name =this.foodlist5[this.index].food_name;
                foodObj.food_price=this.foodlist5[this.index].food_price;
                foodObj.store_name=this.foodlist5[this.index].store_name;
                break;
            }
            this.show=false;
            foodObj.user=window.localStorage.getItem("studentUser")
            foodObj.time=Date.parse(new Date());
            foodObj.food_num=value;
            foodObj.isCharge='false';
            foodObj.address=this.address;
            foodObj.food_count=foodObj.food_price*value;
            this.$http.post(`${domain}:8081/api/student/food`,foodObj,{headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"}}).then(function(res){
                if(res.data==="order_success")
                {
                    Toast.success({duration:300,message:"预定成功"});
                }else
                if(res.data==="student_order_fail"){
                    Toast.fail({duration:300,message:"下单失败"});
                }
            })  
        }
    }
}
</script>
<style  lang="less" scoped>
#cai_name{
    width:100%;
    height:auto;
}
.food_item{
    width:78%;
    height:80px;
    margin-left:25%;
   
    img{
        width:50%;
        height:100%;
        display:inline-block;
        box-sizing: border-box;
        padding-left:1%;
        padding-top:1%;
        background:white;
    }
    .food_container{
        width:45%;
        height:100%;
        display:inline-block;
        overflow:hidden;
        margin-left:2%;
        padding-left:4%;
        box-sizing:border-box;
        position:relative;
        span{
            display:block;
            width:100%;
            height:20%;
            margin:0;
            padding:0;
            margin:4px 0;
            color:gray;
        }
        .food_price{
            width:80%;
            color:red;
            text-align: left;
        }
        .food_id{
            font-size:0.7rem;
            position:relative;
        }
        .food_shop{
            width:60%;
            height:100px;
            box-sizing: border-box;
            z-index:1;
            border-radius:5px;
            background:white;
            position:fixed;
            
            right:10%;
            top:200px;
         
            .num_title{
                display:inline-block;
                width:38%;
                height:20%;
                text-align:center;
                color:black;
                font-size:1rem;
                font-weight: bold;
            }
            .address_title{
                display:inline-block;
                width:38%;
                height:20%;
                text-align:center;
                color:black;
                font-size:1rem;
                font-weight: bold;
            }
            .input_num{
                display:inline-block;
                width:60%;
                height:20%;
                border-radius:8px;
                font-weight: bolder;
            }
            .input_address{
                display:inline-block;
                width:60%;
                height:20%;
                border-radius:8px;
                font-weight: bolder;
            }
            button{
                width:49%;
                height:40%;
                margin:1px 1px;
                cursor:pointer;
                color:black;
                font-weight: bold;
                border-radius: 8px;
            }
        }
        .gou_wu{
            position:absolute;
            width:20%;
            height:25%;
            right:15%;
            top:60%;
            cursor:pointer;
            img{
                width:100%;
                height:100%;
                display:block;
            }
        }
    }
}
.van-sidebar{
    position:fixed;
    left:0px; 
}
</style>