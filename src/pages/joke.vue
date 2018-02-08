<template>
    <div class="joke">
      <mt-header title="每日笑话">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>

    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .joke
    width 100%
    height 100%
    overflow hidden
    .mint-header
      background-color white
      .mint-header-title
        color black
      .active
        color black
</style>
