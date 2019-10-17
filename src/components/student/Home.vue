<template>
    <div id="home">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "./Header.vue"
import Body from "./Body.vue"
import Footer from "./Footer.vue"
export default {
    data(){
        return {};
    },
    components:{
        Header,
        Body,
        Footer,
    }
}
</script>

<style lang="less" scoped>
  #home{
      width:100%;
      height:800px;
      margin:0 auto;
  }
</style>