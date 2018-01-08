<template>
    <div class="toolbar">
        <div class="bar-item" @click="jump('home')">
            <text class="text" ref="homes">首页</text>
        </div>
        <div class="bar-item" @click="jump('hotspot')">
            <text class="text">热点</text>
        </div>
        <div class="bar-item" @click="jump('recommend')">
            <text class="text">推荐</text>
        </div>
    </div>
</template>

<style scoped>
    .toolbar {
        position: sticky;
        left: 0;
        top: 0;
        flex-direction: row;
        align-items: center;
        background-color: #00BFFF;
        height: 80px;
        margin-bottom: 10px;
        /*width: 750px;*/
        justify-content: space-around;
    }

    .text {
        line-height: 80px;
        padding-left: 40px;
        padding-right: 40px;
        font-size: 32px;
        color: #fff;
    }

    .active {
        color: red;
    }

</style>

<script type="text/ecmascript-6">
  export default {
  }
</script>