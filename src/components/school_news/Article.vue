<template>
    <div id="article_content">
        文章内容
        <p>{{content}}</p>
    </div>
</template>

<script>
export default {
    data()
    {
        return {
            content:""
        };
    },
    created()
    {
      this.content=this.$route.query.id;
    }
}

</script>

<style lang="less"scoped>
</style>