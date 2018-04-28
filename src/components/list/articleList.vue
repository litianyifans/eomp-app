<template>
  <div class="report">
    <section class="list-tab" v-for="item in infoList">
      <h1 class="title">{{item.title}}</h1>
      <div class="reportDate">{{item.createTime}}</div>
      <div class="content">{{item.content}}</div>
    </section>
  </div>
</template>
<script>
  export default {
    props: {
      infoList:{
        type: Array ,
        default: () => []
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>

  .report{
    display: block;
    position: relative;
    top:1.95rem ;
  }
  .list-tab{
    position: relative;
    border-bottom: 1px solid rgba(221, 221, 221, 0.6);
    padding: 0.4rem 0rem;
    margin: 0rem 0.2rem;
  }
  .title{
    color:#222;
    line-height: 0.9rem;
    font-size: 0.9rem;
    font-weight: normal;
    overflow: hidden;
    text-overflow: ellipsis;

  }
  .reportDate{
    padding-top: 5px;
    line-height: 20px;
    font-size: 0.3rem;
  }
  .content{
    font-size: 0.7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap ;
  }
</style>
