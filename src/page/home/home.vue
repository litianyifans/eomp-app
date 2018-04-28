<template>
  <div>
    <head-top>
      <span slot='logo' class="head_logo"></span>
    </head-top>
    <nav class="scroll-panel">
      <swiper :imgs="imgs"></swiper>
    </nav>
    <div class="content-wrapper">
      <ul class="grid-list">
          <li class="grid-item">
            <span class="icon" :class="itemMap[0]"></span>
            <span class="icon-text">站点监控</span>
          </li>
        <li class="grid-item">
          <span class="icon" :class="itemMap[1]"></span>
          <span class="icon-text">告警</span>
        </li>
        <li class="grid-item">
          <span class="icon" :class="itemMap[2]"></span>
          <span class="icon-text">未入库桩</span>
        </li>
        <li class="grid-item">
          <span class="icon" :class="itemMap[0]"></span>
          <span class="icon-text">站点监控</span>
        </li>
        <li class="grid-item">
          <span class="icon" :class="itemMap[0]"></span>
          <span class="icon-text">站点监控</span>
        </li>
        <li class="grid-item">
          <span class="icon" :class="itemMap[0]"></span>
          <span class="icon-text">站点监控</span>
        </li>
      </ul>
    </div>
    <foot-bootoom></foot-bootoom>
  </div>

</template>

<script>
  import headTop from '../../components/header/head'
  import footBootoom from '../../components/footer/foot'
  import swiper from '../../components/swiper/swiper'
  import banner2 from '../../assets/images/banner2.jpg'
  import banner3 from '../../assets/images/banner3.jpg'
  import banner4 from '../../assets/images/banner4.jpg'
  import banner5 from '../../assets/images/banner5.jpg'
  import banner6 from '../../assets/images/banner6.jpg'

  export default {
    data() {
      return {
        imgs: []
      }
    },

    components: {
      headTop,
      footBootoom,
      swiper
    },
    methods: {
      /* //点击图标刷新页面
       reload(){
         window.location.reload()
       }*/
    },
    created() {
      this.imgs = [
        {"smallPicUrl": banner2},
        {"smallPicUrl": banner3},
        {"smallPicUrl": banner4},
        {"smallPicUrl": banner5},
        {"smallPicUrl": banner3},
        {"smallPicUrl": banner6}
      ] ,
        this.itemMap = ['stations', 'alerm', 'noStakes']
    }
  }


</script>

<style lang="scss" type="text/scss" scoped>
  //transparent
  @import '../../assets/css/mixin';

  .head_logo{
    left: 0.4rem;
    font-weight: 400;
    @include sc(0.7rem, #fff);
    @include wh(2.3rem, 0.7rem);
    @include ct;
  }

  .scroll-panel {
    position: relative;
    padding-bottom: 0;
    margin-bottom: 0;
    padding-top: 1.95rem;
    height: 8rem;
  }

  .content-wrapper {
    display: block;
    position: relative;
  }

  .grid-list {
    position: relative;
    display: block;
    width: 100%;
    border-top: 1px solid #eee;
    border-left: 1px solid #eee;
    background-color: white;
    font-size: 0;
  }

  .grid-item {
    position: relative;
    display: inline-block;
    width: 25%;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 11px 15px;
    vertical-align: top;
    text-align: center;
  }

  .icon {
    display: inline-block;
    vertical-align: top;
    height: 32px;
    width: 32px;
    background-size: 32px 32px;
    background-repeat: no-repeat;
    &.stations {
      @include bg-image('stations-icon')
    };
    &.alerm {
      @include bg-image('alerm-icon')
    };
    &.noStakes {
      @include bg-image('noStakes-icon')
    };
  }

  .icon-text {
    display: block;
    padding-top: 10px;
    line-size: 0.6rem;
    font-size: 0.6rem;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
