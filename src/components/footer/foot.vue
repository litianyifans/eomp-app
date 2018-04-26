<template>
    <nav class="foot-bar">
      <div class="bar-item">
        <span class="icon icon-home"></span>
        <span class="title">首页</span>
      </div>
      <div class="bar-item">
        <span class="icon icon-public"></span>
        <span class="title">消息</span>
      </div>
      <div class="bar-item">
        <span class="icon icon-center"></span>
        <span class="title">个人中心</span>
      </div>
    </nav>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
.foot-bar{
  position: fixed;
  z-index:100;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  display: table;
  width: 100%;
  height: 50px;
  table-layout: fixed;
  box-shadow: 0 0 1px rgba(0,0,0,.85);
}
.bar-item{
  display: table-cell;
  overflow: hidden;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.icon{
  top:3px;
  width: 24px;
  height: 24px;
}
.title{
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 11px;
}
</style>
