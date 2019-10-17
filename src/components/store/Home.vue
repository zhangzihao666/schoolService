<template>
    <div id="store_home">
        <Header></Header>
        <Mainer></Mainer>
    </div>
</template>

<script>
import Vue from "vue";

import Header from "./Header.vue"
import Mainer from "./Mainer.vue"
export default {
    data()
    {
        return {};
    },
    components:{
        Header,
        Mainer
    }
}
</script>

<style scoped lang="less">

</style>