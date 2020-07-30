<template>
  <div>
    <!--  导航栏  -->
    <div class="nav">
      <div class="city">
        <i class="el-icon-location"></i>
        <span>上海</span>
      </div>
    </div>
     <!--      搜索行-->
    <div class="search">
      <div >
        <img  class="logo" src="../assets/timg.jpg" alt="">
      </div>
      <div class="search2">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopMall'
}
</script>

<style scoped lang="stylus">
  .nav{
    border-bottom 1px solid #ddd
    background-color: #e3e4e5;
    height 20px
    width 100%
    padding 0
    margin 0
    .city{
      margin 2px 211px
    }
  }

  .search{
    width 100%
    height  140px
  }

  .logo{
    background-repeat: no-repeat;
    display: block;
    width: 290px;
    height: 220px;
  }

  .search2{
    display block
    border 1px red solid
    width: 20px
  }
</style>
