<template>
    <div class="riddle">
        <mt-header title="猜谜大全">
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
        <div class="riddle_img">
          <img src="../components/riddle.jpg" alt="">
        </div>
        <div class="list" ref="list">
          <div>
            <ul>
              <li v-for="(type,index) in riddleType.typeList" @click="tabChange(type.id)" :class="{active:type.id===riddleArr[0].typeId}" v-show="!(type.id==='miyujingxuan'||type.id==='etmy')">
                {{type.name}}
              </li>
            </ul>
          </div>
        </div>
      <div class="riddles">
        {{riddleArr[0].typeName}}
      </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import axios from 'axios'
    import api from '../assets/index'
    import {mapState} from 'vuex'
    export default {
      data(){
        return{
          riddleArr:[{typeId:'gxmy'}]
        }
      },
      mounted(){
        this.$store.dispatch('getRiddleType')
        this.$nextTick(()=>{
          new BScroll(this.$refs['list'],{
            scrollX:true,
            click:true
          })
        })
      },
      computed:{
        ...mapState(['riddleType','riddles'])
      },
      methods:{
        tabChange(id){
          //console.log(id)
          //this.$store.dispatch('getRiddle',id)
          api.reqRiddle(id).then(res=>{
            let result = res.data
            if(result.showapi_res_code===0){
              let riddles = result.showapi_res_body
              if(riddles.pb){
                this.riddleArr = riddles.pb.contentlist
                console.log(this.riddleArr)
              }
            }
          })
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .riddle
    width 100%
    height 100%
    .riddles
      width 100%
      height 100%
      background pink
    .list
      width 100%
      height 50px
      text-align center
      overflow hidden
      div
        width 465%
        height 100%
        transform translateZ(1px)
        ul
          width 100%
          height 100%
          overflow hidden
          li
            width 4.7rem
            line-height 50px
            float left
            font-size 14px
          .active
            background lawngreen
    .mint-header
      background-color white
      .mint-header-title
        color black
      .active
        color black
    .riddle_img
      width 100%
      height 200px
      img
        width 100%
        height 100%
</style>
