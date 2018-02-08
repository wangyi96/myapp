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
              <li v-for="(type,index) in riddleType.typeList" @click="tabChange(type.id)" :class="{active:type.id===typeId}" v-show="!(type.id==='miyujingxuan'||type.id==='etmy')">
                {{type.name}}
              </li>
            </ul>
          </div>
        </div>
        <div class="riddles" ref="wrap">
        <div class="riddle-wrap" >
          <ul>
            <li class="item" v-for="(item,index) in riddleArr">
              <div class="tab" @click="reveal(index)">
                <span>{{item.title}}</span>
                <span v-show="false">{{item.answer}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import api from '../assets/index'
    import {mapState} from 'vuex'
    import {Indicator} from 'mint-ui';
    export default {
      data(){
        return{
          riddleArr:[],
          typeId:'gxmy',
          lastpage:0,
          nowpage:1,
          answerId:0,
          isShow:true
        }
      },
      mounted(){
        this.$store.dispatch('getRiddleType')
        this.$nextTick(()=>{
          new BScroll(this.$refs['list'],{
            scrollX:true,
            click:true
          });
        });

        api.reqRiddle(this.typeId,this.nowpage).then(res=>{
          let result = res.data
          if(result.showapi_res_code===0){
            let riddles = result.showapi_res_body
            if(riddles.pb){
              this.riddleArr = this.riddleArr.concat(riddles.pb.contentlist)
            }
          }
        })

        this._initScroll();
      },
      computed:{
        ...mapState(['riddleType'])
      },
      methods:{
        reveal(id){
          let dives = document.querySelectorAll('.tab')
          let me = dives[id]

          if(this.isShow && !me.answer){
            this.isShow = false;
            me.answer = false
          }
          if(!me.transform){
            me.style.transform = me.answer ? "translateZ(0) rotateY(-360deg)":"translateZ(0) rotateY(360deg)"
            let spans = me.children

            if(!me.answer){
              spans[0].style.display = "none"
              spans[1].style.display = "block"
            }else{
              spans[0].style.display = "block"
              spans[1].style.display = "none"
            }
            me.answer = !me.answer
          }
        },
        pullingDownUp () {
          this.Scroll.finishPullUp()
          this.Scroll.refresh() //重新计算元素高度
        },
        setData(){
          api.reqRiddle(this.typeId,this.nowpage).then(res=>{
            let result = res.data
            if(result.showapi_res_code===0){
              let riddles = result.showapi_res_body
              if(riddles.pb){
                this.riddleArr = this.riddleArr.concat(riddles.pb.contentlist)
                this.$nextTick(()=>{
                  this.pullingDownUp()
                })
              }
            }
          })
        },
        _initScroll(){
          this.Scroll = new BScroll(this.$refs['wrap'],{
            pullUpLoad: {
              threshold: -100
            },
            click:true
          })
          this.Scroll.on('pullingUp', () => {
            Indicator.open({
              spinnerType: 'fading-circle'
            });
            setTimeout(()=>{
              this.nowpage++
              if(this.lastpage<this.nowpage){
                console.log(this.nowpage,this.lastpage)
                this.setData()
                this.lastpage = this.nowpage
              }
              Indicator.close();
            },1000)
          })
        },
        tabChange(id){

          this.typeId = id
          api.reqRiddle(id).then(res=>{
            let result = res.data
            if(result.showapi_res_code===0){
              let riddles = result.showapi_res_body
              if(riddles.pb){
                this.riddleArr = riddles.pb.contentlist
              }
            }
          })
        },
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .riddle
    width 100%
    height 100%
    overflow hidden
    .riddles
      width 100%
      height 417px
      overflow hidden
      .riddle-wrap
        overflow hidden
        h1
          font bold 18px '宋体'
          margin-top 20px
          color lightsalmon
        ul
          width 100%
          background #F0E5AD
          li
            width 100%
            transform: translateZ(0)
            .tab
              width 80%
              height 200px
              margin 0 auto
              margin-bottom 10px
              background rgba(0,0,0,.6)
              transform: translateZ(0) rotateY(0)
              transition .5s transform
              text-align center
              font-size 18px
              display flex
              align-items center
              span
                display block
                width 80%
                margin 0 auto
                color white
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
            background beige
    .mint-header
      background-color white
      .mint-header-title
        color black
      .active
        color black
    .riddle_img
      width 100%
      height 150px
      img
        width 100%
        height 100%
</style>
