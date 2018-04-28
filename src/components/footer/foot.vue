<template>
  <nav class="foot-bar">
    <div class="bar-item">
      <span class="icon icon-home"></span>
      <span class="title">首页</span>
    </div>
    <div class="bar-item">
      <router-link :to="{path:'/info'}">
        <span class="icon icon-public"></span>
        <span class="title">消息</span>
      </router-link>
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
  .foot-bar {
    position: fixed;
    z-index: 100;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    display: table;
    width: 100%;
    height: 0.5rem;
    table-layout: fixed;
    box-shadow: 0 0 1px rgba(0, 0, 0, .85);
  }

  .bar-item {
    display: table-cell;
    overflow: hidden;
    height: 0.5rem;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .icon {
    top: 3px;
    width: 0.25rem;
    height: 0.25rem;
  }

  .title {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.11rem;
  }
</style>
