<template>
    <div id="school_food">
        <Bodyer></Bodyer>
    </div>
</template>

<script>
import Header from "./Header.vue"
import Bodyer from "./Bodyer.vue"

export default {
    data()
    {
        return {};
    },
    components:{
        Header,
        Bodyer,
    
    }
}
</script>

<style lang="less" scoped>
#school_food{
    width:100%;
    height:auto;
}
</style>