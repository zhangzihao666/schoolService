<template>
    <div id="foodlist">
        <div class="title">
            <div class="add">
                <div class="add_icon" @click="addFoodShow"> <img src="../../../public/img/store/add.png"><span>添加菜单</span></div>
                <div class="add_item" v-if="addShow">
                    <van-radio-group v-model="radio">
                        <span class="inline"><van-radio name="0" checked-color="chocolate">盖饭</van-radio></span>
                        <span class="inline"><van-radio name="1" checked-color="chocolate">炒饼/面/饭</van-radio></span>
                        <span class="inline"><van-radio name="2" checked-color="chocolate">麻辣烫</van-radio></span>
                        <span class="inline"><van-radio name="3" checked-color="chocolate">麻辣香锅</van-radio></span>
                        <span class="inline"><van-radio name="4" checked-color="chocolate">面条</van-radio></span>
                        <span class="inline"><van-radio name="5" checked-color="chocolate">饺子</van-radio></span>
                        
                    </van-radio-group>
                    <van-cell-group>
                        <van-field
                            v-model="foodname"
                            label="菜名"
                            placeholder="请输入菜名"
                            required
                        />
                        <van-field
                            v-model="foodprice"
                            label="价格"
                            placeholder="请输入价格"
                            required
                        />
                    </van-cell-group>
                    <van-button type="warning" size="normal" @click="addFoodItem">提交</van-button>
                </div>
            </div>
        </div>
        <van-overlay :show="show" @click="changeShow" />
        <div class="foodlist" v-for=" (item,index) in foodlist" :key="index">
            <van-panel >
                <div class="food_row">
                    <span class="food_row_title">菜名:</span><span class="food_row_content">{{item.food_name}}</span> <span class="food_row_title">价格:</span><span class="food_row_content">{{item.food_price}}元</span>
                </div>
                <div slot="footer" class="price">
                    <van-button size="small" type="info" @click.native="updateFood(index)">修改价格</van-button>
                    <div class="price_item" v-show="false">
                        <van-cell-group>
                            <van-field v-model="changePrice" placeholder="请输入价格" />
                        </van-cell-group>
                        <van-button  type="warning" size="small" @click.native="enterPrice(index,item._id)">完成</van-button>
                    </div>
                    <van-button size="small" type="danger" @click.native="deleteFood(item._id)">删除菜单</van-button>
                </div>
            </van-panel>
        </div>
         
    </div>
</template>

<script>
import Vue from "vue";
import {panel,Overlay,Button,Field,RadioGroup,Radio,Toast} from "vant";
Vue.use(panel);
Vue.use(Overlay)
Vue.use(Button)
Vue.use(Field)
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Toast)
import domain from "../../domain.js"
export default {
    data()
    {
        return {
            changePrice:"",//修改的价格
            foodlist:[],//我的店铺菜单列表
            show:false,//遮罩层
            addShow:false,//添加菜单显示与隐藏
            radio:"0",//默认单选选项
            foodname:"",//添加菜单名
            foodprice:"",//添加菜单价格
            updatePriceShow:false,//更改价格的显示与隐藏
        };
    },
    mounted(){
        this.isOpenStore();
    },
    methods:{
        //商家是否开店
        isOpenStore()
        {
            let context=this;
            let storeUser=window.localStorage.getItem("storeUser");
            this.$http.get(`${domain}:8081/api/store/food/get?store_name=${storeUser}`).then(function(res)
            {
                if(res.data==="noOpenStore")
                {
                    Toast.fail({duration:300,message:"您还没有添加商品呢"})
                }
                else{
                    context.foodlist=res.data;
                }
            })
        },
        addFoodShow()
        {
            this.show=true;
            this.addShow=true;
        },
         //添加菜单
        addFoodItem()
        {
            let context=this;
            if(this.foodname===""||this.foodprice==="")
            {
                Toast.fail({duration:300,message:"菜名或价格不能为空"})
            }
            else
            if(parseFloat(this.foodprice)!=this.foodprice){
                 Toast.fail({duration:300,message:"价格必须为数字"})
            }
            else{
                let dataObj={food_name:"",food_count:0,food_price:"",store_name:"",food_id:""};
                dataObj.store_name=window.localStorage.getItem("storeUser");
                dataObj.food_name=this.foodname;
                dataObj.food_price=this.foodprice;
                dataObj.food_id=this.radio;
                context.foodname=context.foodprice="";
                this.$http.post(`${domain}:8081/api/store/food/add`,dataObj,{headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"}}).then(function(res){
                    if(res.data==="add_success")
                    {
                        
                        Toast.success({duration:300,message:"添加菜单成功"})
                        context.addShow=context.show=false;
                        context.isOpenStore()
                    }
                    else
                    if(res.data==="add_fail"){
                        Toast.fail({duration:300,message:"添加失败"})
                    }
                })
            }
          
        },
        getFood()
        {
            this.isOpenStore();
        },
        changeShow()
        {
            this.show=this.addShow=false;
            let domArr=document.getElementsByClassName("price_item")
            if(domArr.length!==0)
            {
                for(let i=0;i<domArr.length;i++)
                {
                   domArr[i].style.display="none";
                }
            }
        },
        updateFood(index)
        {
            this.show=true;
            let domArr=document.getElementsByClassName("price_item")
            domArr[index].style.display="block";
        },
        enterPrice(index,id)
        {
            let context=this;
            if(this.changePrice==="")
            {
                Toast.fail({duration:300,message:"价格不能为空"});
            }
            else
            if(parseFloat(this.changePrice)!=this.changePrice){
                Toast.fail({duration:300,message:"价格必须为数字"})
            }
            else{
                
                let domArr=document.getElementsByClassName("price_item")
                this.show=false;
                domArr[index].style.display="none";
                let dataObj={"_id":id,"food_price":this.changePrice}
                this.$http.post(`${domain}:8081/api/store/food/edit`,dataObj,{headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"}}).then(function(res){
                    if(res.data==="edit_success")
                    {
                        Toast.success({duration:300,message:"修改价格成功"});
                        context.isOpenStore();
                    }
                    else
                    if(res.data==="edit_fail"){
                        Toast.fail({duration:300,message:"操作失败"});
                    }
                })
            }
        },
        deleteFood(id)
        {
            let context=this;
            let dataObj={"_id":id};
            this.$http.post(`${domain}:8081/api/store/food/delete`,dataObj,{headers:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"}}).then(function(res){
                if(res.data==="delete_success")
                {
                    Toast.success({duration:300,message:"菜单删除成功"});
                    context.isOpenStore()
                }
                else
                if(res.data==="delete_fail"){
                    Toast.fail({duration:300,message:"菜单删除失败"});
                }
            })
        }
    }
}
</script>

<style scoped lang="less">
#foodlist{
    width:98%;
    height:auto;
    .title{
        width:100%;
        height:auto;
        .add{
            width:100%;
            height:50px;
            overflow:hidden;
            .add_icon{
                width:100%;
                height:50px;
                display:block;
                margin-top:2%;
                span{
                    display:inline-block;
                    width:20%;
                    height:50%;
                    position: relative;
                    left:10%;
                    top:-30%;
                    
                }
                img{
                    display:inline-block;
                    width:15%;
                    height:90%;
                    margin-left:20%;
                }
            }
            .add_item{
                position:fixed;
                left:15%;
                top:20%;
                width:70%;
                height:246px;
                z-index:999;
                background:white;
               
                border:1px solid white;
                border-radius:10px;
                .van-radio-group{
                    margin-top:5%;
                    margin-bottom:5%;
                }
                .van-button{
                    margin-top:5%;
                    width:60%;
                    border-radius:15px;
                    margin-left:20%;
                }
            }
            
        }
    }
    .foodlist{
        width:90%;
        margin-left:5%;
    }
}
.inline{
    display:inline-block;
    width:46%;
    padding-left:3%;
}
.price{
    position:relative;
    .price_item{
        display:inline-block;
        width:40%;
        height:80px;
        position:absolute;
        background:white;
        border:1px solid white;
        border-radius:5px;
        z-index:999;
        left:4%;
        top:-180%;
        .van-button{
            width:80%;
            border-radius:10px;
            margin-left:10%;
        }
    }
}
.food_row{
    width:100%;
    span{
        display:inline-block;
    }
    .food_row_title{
        margin-left:1%;
        width:13%;
        color:chocolate;
    }
    .food_row_content{
        box-sizing:border-box;
        width:35%;
        font-size:0.9rem;
        color:gray;
        padding-left:1%;
    }
}
</style>