import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    isStudentLogin:false,
    isStoreLogin:false,
    isAdminLogin:false,
  },
  getters:{
    studentIsLogin:state=>state.isStudentLogin,
    storeIsLogin:state=>state.isStoreLogin,
    adminIsLogin:state=>state.isAdminLogin,
  },
  mutations: {
    changeStudent(state,studentFlag){
      state.isStudentLogin=studentFlag
    },
    changeStore(state,storeFlag){
      state.isStoreLogin=storeFlag
    },
    changeAdmin(state,adminFlag){
      state.isAdminLogin=adminFlag
    },
  },
  actions: {
    studentLogin({commit},studentFlag){
      commit("changeStudent",studentFlag)
    },
    storeLogin({commit},storeFlag){
      commit("changeStore",storeFlag)
    },
    adminLogin({commit},adminFlag){
      commit("changeAdmin",adminFlag)
    },
  }
});
