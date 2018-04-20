<template>
  <div>
    <head-top>
      <span slot='logo' class="head_logo"  @click="reload">eomp</span>
    </head-top>
    <div class="scroll-panel">
        <swiper :imgs="imgs"></swiper>
    </div>
  </div>

</template>

<script>
  import headTop from '../../components/header/head'
  import swiper  from '../../components/swiper/swiper'
  import banner2  from '../../assets/images/banner2.jpg'
  import banner3  from '../../assets/images/banner2.jpg'
  import banner4  from '../../assets/images/banner2.jpg'
  import banner5  from '../../assets/images/banner2.jpg'
  import banner6  from '../../assets/images/banner2.jpg'
  export default {
    data() {
      return {
        imgs: []
      }
    },

    components:{
      headTop,
      swiper
    },
    methods:{
      //点击图标刷新页面
      reload(){
        window.location.reload()
      }
    },
    created () {
      this.imgs = [
        banner2,
        banner3
      ]
    }
  }


</script>

<style lang="scss" type="text/scss" scoped>
  @import '../../style/mixin';
  .head_logo{
    left: 0.4rem;
    font-weight: 400;
  @include sc(0.7rem, #fff);
  @include wh(2.3rem, 0.7rem);
  @include ct;
  }
  .scroll-panel{
    padding-top: 2.35rem;
    width: 100%;
    height: 150px;
  }
</style>
