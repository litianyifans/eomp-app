<template>
  <div class="report">
    <router-link :to="{path:'/info'}">
      <section class="list-tab" v-for="item in infoList">
        <h1 class="title">{{item.title}}</h1>
        <div class="reportDate">{{item.createTime | formatDate }}</div>
        <div class="content">{{item.content}}</div>
      </section>
    </router-link>
  </div>
</template>
<script>
  import {formatDate} from '../../assets/js/common'
  export default {
    props: {
      infoList:{
        type: Array ,
        default: () => []
      }
    },
    filters: {
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm');
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
    font-size: 0.5rem;
    color: gray;
  }
  .content{
    font-size: 0.5rem;
    color: gray;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap ;

  }
</style>
