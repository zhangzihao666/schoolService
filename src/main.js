import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Mint from "mint-ui"
import {MessageBox} from"mint-ui";
//import Api from "./api/index.js"
const axios =require("axios")
Vue.prototype.$http=axios;
//
Vue.use(Mint);
import 'mint-ui/lib/style.css'; 
Vue.config.productionTip = false;

router.beforeEach((to,from,next)=>{
    let getFlag={};
    getFlag.student=window.localStorage.getItem("studentFlag");
    getFlag.store=window.localStorage.getItem("storeFlag");
    getFlag.admin=window.localStorage.getItem("adminFlag")
    if(to.meta.isStudentLogin)
    {
        if(store.state.isStudentLogin==true||getFlag.student=="isLogin")
        {
          next();
        }
      
        else{
          next({path:"/login/student"})
        }
    }
    else
    if(to.meta.isStoreLogin)
    {
        if(store.state.isStoreLogin==true||getFlag.store=="isLogin")
        {
          next();
        }
        else{
          next({path:"/login/store"})
        }
    }
    else
    if(to.meta.isAdminLogin)
    {
        if(store.state.isAdminLogin==true||getFlag.admin=="isLogin")
        {
          next();
        }
        else{
          next({path:"/login/admin"})
        }
    }
    else{
      next();
    }
  
})

//
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
