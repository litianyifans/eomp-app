<template>
    <div>
      <head-top>
      </head-top>
      <article-list :info-list="infoList">
      </article-list>
    </div>
</template>

<script>
  import headTop from '../../components/header/head'
  import articleList from '../../components/list/articleList'
    export default {
      data () {
        return {
          infoList:[]
        }
      },
      components:{
        headTop,
        articleList
      },
      created () {
        let url = '/api/systemInfo' ;
        this.$http.get(url).then((response) => {
          response = response.body;
          this.infoList = response.data.data;
          console.log(response.data.data) ;
        });
      }
    }
</script>

<style scoped>

</style>
