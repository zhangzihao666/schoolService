<template>
    <div>
        <van-tabs v-model="active">
            <van-tab title="新增课表">内容 1</van-tab>
            <van-tab title="编辑删除">内容 2</van-tab>
        </van-tabs>
    </div>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);
export default {
    data()
    {
        return {
            active:0,
        };
    }
}
</script>

<style scoped lang="less">
</style>