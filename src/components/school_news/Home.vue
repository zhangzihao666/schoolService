<template>
    <div id="school_new">
        <Bodyer></Bodyer>
    </div>
</template>
<script>
import Header from "./Header.vue"
import Bodyer from "./Bodyer.vue"
export default {
    data()
    {
        return{};
    },
    components:{
        Header,
        Bodyer,
    }
}
</script>

<style scoped lang="less">
#school_new{
    width:100%;
    height:auto;
}
</style>