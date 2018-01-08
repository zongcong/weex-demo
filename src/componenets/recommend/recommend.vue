<template>
    <div class="recommend">
        <list class="list">
            <cell v-for="item in test" :key="item">
                <text class="text">推荐</text>
            </cell>
        </list>
    </div>
</template>

<style scoped>
    .text{
        font-size: 28px;
    }
</style>

<script type="text/ecmascript-6">
    export default {
      data() {
        return {
          test: [1, 2, 3, 4, 5, 6]
        }
      }
    }
</script>