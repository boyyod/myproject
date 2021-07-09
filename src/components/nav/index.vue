<template>
   <div class="abc">
     <el-row type="flex" class="row-bg" justify="center">
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col ><div class="grid-content bg-purple-light">    <el-menu  text-color="#ffffff" active-text-color="#409eef" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#999">
  <el-menu-item  index="1">  <i class="el-icon-location"></i><router-link  class="cd" to="/products">查询商品</router-link></el-menu-item>
  <el-menu-item index="2" ><router-link class="cd" to="/parm">商品分类</router-link></el-menu-item>
  <el-menu-item index="3"><router-link class="cd" to="/content">个人中心</router-link></el-menu-item>
</el-menu></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
</el-row>
 
   </div>
<!-- <div class="line"></div> -->
<!-- <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template #title>我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template #title>选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu> -->

</template>

<script>
  export default {
    name:"Nav",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
.abc{
 background-color: #999;
}

.cd{
  display: block;
  width: 100%;
}
</style>

