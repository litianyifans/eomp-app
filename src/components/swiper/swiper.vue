<template>
  <div class="swiper-container" id="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in imgs">
        <img class="img" :src="item.smallPicUrl" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from '../../assets/js/swiper.min.js'
  export default{
    name: 'swiper',
    data () {
      return{
      }
    },
    props: {
      imgs: {
        type: Array,
        default: () => []
      }
    },
    created () {
      this.$nextTick(() => {
        new Swiper ('.swiper-container', {
          loop: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplay : 10000000,
          autoplayDisableOnInteraction : false,
        })
      })

    }
  }

</script>

<style lang="scss" type="text/scss" scoped>
  @import '../../assets/css/mixin';
  img {
    @include wh(100%, 6.05rem);
  }
  #swiper .swiper-pagination-bullet {
    background: #e5e8e8;
    opacity: 1;
  }
  #swiper .swiper-pagination-bullet-active {
    background: #ff5733;
  }
</style>
