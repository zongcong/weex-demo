<template>
    <div class="loading">
        <text class="icon-loading" :style="{fontFamily: 'iconfont'}">&#xe62d;</text>
    </div>
</template>

<style scoped>
    .loading {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        justify-content: center;
        align-items: center;
        /*width: 200px;*/
        /*height: 200px;*/
        /*background-color: #B0C4DE;*/
    }

    .icon-loading {
        color: #0088fb;
        font-size: 60px;
    }

</style>

<script type="text/ecmascript-6">
  export default{
    created() {

    }
  }
</script>
