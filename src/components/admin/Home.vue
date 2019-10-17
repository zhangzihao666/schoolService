<template>
    <div id="admin_home">
        <div class="header">
            <Header></Header>
        </div>
        <div class="mainer">
            <router-link to="/admin/user"><img src="../../../public/img/admin/admin.png"><span>用户管理</span></router-link>
            <router-link to="/admin/news"><img src="../../../public/img/admin/news.png"><span>新闻编辑</span></router-link>
            <router-link to="/admin/class"><img src="../../../public/img/admin/class_table.png"><span>课表管理</span></router-link>
            <router-link to="/admin/software"><img src="../../../public/img/admin/software.png"><span>资源管理</span></router-link>
        </div>
    </div>
</template>

<script>
import Header from "./Header.vue"
export default {
    data()
    {
        return {};
    },
    components:{
        Header,
    }
}
</script>

<style lang="less"scoped>

.mainer{
    width:99%;
    height:70px;
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

</style>