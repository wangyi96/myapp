<template>
    <div class="home">
      <mt-swipe :auto="0" class="home-swipe">
        <mt-swipe-item>
          <router-link to="/music">
            <img src="./music.jpg" alt="">
          </router-link>
        </mt-swipe-item>
        <mt-swipe-item>
          <router-link to="/riddle">
            <img src="./riddle.jpg" alt="">
          </router-link>
        </mt-swipe-item>
        <mt-swipe-item>
          <router-link to="/joke">
            <img src="./joke.jpg" alt="">
          </router-link>
        </mt-swipe-item>
        <mt-swipe-item>
          <router-link to="/robot">
            <img src="./robot.jpg" alt="">
          </router-link>
        </mt-swipe-item>
      </mt-swipe>

      <div class="router-list">
        <ul>
          <li>
            <router-link to="/music">音乐</router-link>
          </li>
          <li>
            <router-link to="/riddle">谜语</router-link>
          </li>
          <li>
            <router-link to="/joke">笑话</router-link>
          </li>
          <li>
            <router-link to="/robot">图灵</router-link>
          </li>
        </ul>
      </div>

      <h1 class="text">历史上的今天</h1>
      <span class="dayText" v-if="historyDay.list">{{historyDay.list[0].year}}年{{historyDay.list[0].month}}月{{historyDay.list[0].day}}日</span>
      <div class="historyDay" v-for="(item,index) in historyDay.list">
        <h2>{{index+1}}、{{item.title}} ({{item.year}})</h2>
        <div class="history_img">
          <img :src="item.img" v-show="item.img" alt="">
          <img src="./noimg.png" v-show="!item.img" alt="">
        </div>
      </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
      mounted(){
        this.$store.dispatch('getHistory')
      },
      computed:{
        ...mapState(['historyDay'])
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home
    width 100%
    height 100%
    .home-swipe
      height 200px
      a
        width 100%
        height 100%
        img
          width 100%
          height 100%

    .router-list
      width 100%
      height 40px
      text-align center
      ul
        width 100%
        height 100%
        overflow hidden
        li
          float left
          width 25%
          height 100%
          a
            display block
            width 100%
            height 100%
            line-height 40px
    .text
      text-align center
      font bold 20px '微软雅黑'
      margin 10px auto
    .dayText
      text-align center
      display block
    .historyDay
      text-align center
      margin 10px auto
      h2
        margin-bottom 10px
        font-size 18px
      span
        font-size 14px
        display block
        margin 40px auto
      .history_img
        margin-bottom 20px
        img
          width 100%
          height 100%
</style>
