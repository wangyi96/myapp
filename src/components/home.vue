<template>
    <div class="home">
      <mt-swipe :auto="0" class="home-swipe">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>

      <div class="historyDay">
        <h1>历史上的今天</h1>
      </div>

      <div class="router-list">
        <router-link to="/music">音乐</router-link>
        <router-link to="/riddle">谜语</router-link>
        <router-link to="/joke">笑话</router-link>
        <router-link to="/robot">图灵</router-link>
      </div>
    </div>
</template>

<script>
    export default {
      mounted(){
        this.$store.dispatch('getHistory')
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home
    width 100%
    height 100%
    .home-swipe
      height 150px
</style>
