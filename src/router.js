import Vue from "vue";
import Router from "vue-router";
//import App from "./App.vue"
import Service from "./components/common/Service.vue"//服务协议组件
import Login from "./views/Login.vue"//根登录组件
import Login_student from "./components/student/Login.vue"//学生登录组件
import Register_student from "./components/student/Register.vue"//学生注册组件

import Login_store from "./components/store/Login.vue"//商家登录组件
import Register_store from "./components/store/Register.vue"//学生注册组件
import Login_admin from "./components/admin/Login.vue"//管理员登录组件
import Register_admin from "./components/admin/Register.vue"//管理员注册组件

import School_news from "./components/school_news/Home.vue"
import Fast_mail from "./components/fast_mail/Home.vue"
import Resource_share from "./components/resource_share/Home.vue"
import School_food from "./components/school_food/Home.vue"
import Postgraduate from "./components/postgraduate/Home.vue"
import School_table from "./components/school_table/Home.vue"
import Stm_class from "./components/stm_class/Home.vue"
import Job_message from "./components/job_message/Home.vue"

import Student_Home from "./components/student/Home.vue"
import Store_Home from "./components/store/Home.vue"
import Admin_home from "./components/admin/Home.vue"
import Hello from "./components/HelloWorld.vue"

//学校新闻 内容组件
import Article_content from "./components/school_news/Article.vue"
//商家 主页 饭店 快递 反馈 招聘
import Store_food from "./components/store/Food.vue"
import Store_mail from "./components/store/Mail.vue"
import Store_employ from "./components/store/Employ.vue"
import Store_feedback from "./components/store/Feedback.vue"
//管理员组件开始
import Admin_user from "./components/admin/User.vue"
import Admin_news from "./components/admin/News.vue"
import Admin_class from "./components/admin/Class.vue"
import Admin_soft from "./components/admin/Soft.vue"
//管理员组件结束
Vue.use(Router);

export default new Router({
  routes: [
    //登录组件
    {
      path: "/",
      redirect:"/login"
    },
    //服务协议
    {
      path:"/service",
      name:"service",
      component:Service,
    },
    {
      path:"/login",
      name:"login",
      component:Login,
      children:[
        {path:"student",component:Login_student},
        {path:"store",component:Login_store},
        {path:"admin",component:Login_admin}
      ],
  
    },
    {
      path:"/login/student",
      name:"student",
      component:Login_student,
      meta:{
        requireAuth:false,
        isStudentLogin:false,
      }
    },
    {
      path:"/register/student",
      name:"student_register",
      component:Register_student,
      meta:{
        requireAuth:false,
        isStudentLogin:false,
      }
    },
    {
      path:"/login/store",
      name:"store",
      component:Login_store,
      meta:{
        auth:false,
      }
    },
    {
      path:"/register/store",
      name:"store_register",
      component:Register_store,
      meta:{
        requireAuth:false,
        isStudentLogin:false,
      }
    },
    //管理员登录组件
    {
      path:"/login/admin",
      name:"admin",
      component:Login_admin,
      meta:{
        auth:false,
      }
    },
    //管理员注册组件
    {
      path:"/register/admin",
      name:"admin_regist",
      component:Register_admin,
      meta:{
        auth:false,
      }
    },
    //
    {
      path:"/hello",
      name:"hello",
      component:Hello
    },
    //学生主页
    {
      path:"/student/home",
      name:"student_home",
      component:Student_Home,
      meta:{
        auth:true,
        isStudentLogin:true,
        
      }
    },  
    //商家主页
    {
      path:"/store/home",
      name:"store_home",
      component:Store_Home,
      meta:{
        auth:true,
        isStoreLogin:true,
      }
    }, 
    //管理员主页
    {
      path:"/admin/home",
      name:"admin_home",
      component:Admin_home,
      meta:{
        auth:true,
        isAdminLogin:true,
      }
    },
    //用户管理
    {
      path:"/admin/user",
      name:"admin_user",
      component:Admin_user,
      meta:{
        auth:true,
        isAdminLogin:true,
      }
    },
    //新闻管理
    {
      path:"/admin/news",
      name:"admin_news",
      component:Admin_news,
      meta:{
        auth:true,
        isAdminLogin:true,
      }
    },
    //课表管理
    {
      path:"/admin/class",
      name:"admin_class",
      component:Admin_class,
      meta:{
        auth:true,
        isAdminLogin:true,
      }
    },
    //资源管理
    {
      path:"/admin/software",
      name:"admin_software",
      component:Admin_soft,
      meta:{
        auth:true,
        isAdminLogin:true,
      }
    },
    //管理员组件结束
    //组件首页路由开始
    //学校新闻
    {
      path:"/school/news/home",
      name:"school_new_home",
      component:School_news,
    },
    {
      path:"/school/news/article",
      name:"school_news_article",
      component:Article_content,
    },
    //学校美食
    {
      path:"/school/food/home",
      name:"school_food_home",
      component:School_food,
      meta:{
        auth:true,
        isStudentLogin:true,
      }
    },
    //校内课表
    {
      path:"/school/table/home",
      name:"school_table_home",
      component:School_table
    },
    //单片机班
    {
      path:"/stm/class/home",
      name:"stm_class_home",
      component:Stm_class,
    },
    //资源共享
    {
      path:"/resource/share/home",
      name:"resource_share_home",
      component:Resource_share,
    },
    //考研介绍
    {
      path:"/postgraduate/home",
      name:"postgraduate_home",
      component:Postgraduate,
    },
    //招聘信息
    {
      path:"/job/message/home",
      name:"job_message_home",
      component:Job_message,
    },
    //快递委托
    {
      path:"/fast/mail/home",
      name:"fast_mail_home",
      component:Fast_mail,
      meta:{
        isStudentLogin:true,
      }
    },
    //组件首页路由结束

    //商家店铺组件
    {
      path:"/store/food",
      name:"store_food",
      component:Store_food,
      meta:{
        isStoreLogin:true,
      }
    },
    //商家快递组件
    {
      path:"/store/mail",
      name:"store_mail",
      component:Store_mail,
      meta:{
        isStoreLogin:true,
      }
    },
    //商家接受反馈组件
    {
      path:"/store/feedback",
      name:"store_feedback",
      component:Store_feedback,
      meta:{
        isStoreLogin:true,
      }
    },
    //商家发布招聘组件
    {
      path:"/store/employ",
      name:"store_employ",
      component:Store_employ,
      meta:{
        isStoreLogin:true,
      }
    }
  ]
});
