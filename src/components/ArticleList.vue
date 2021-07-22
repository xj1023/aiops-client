<template>



  <el-container class="article_list">


    <el-main class="main">
      <div style="margin-top: 10px;display: flex;justify-content: left">
        <el-input
          placeholder="一堆操作"
          prefix-icon="el-icon-search"
          v-model="keywords" style="width: 400px" size="small">
        </el-input>
        <el-button type="primary" icon="el-icon-search" size="small" style="margin-left: 3px" @click="searchClick">条件1
        </el-button>
        <el-button type="primary" icon="el-icon-plus" size="small" style="margin-left: 3px" @click="handleAdd">执行2
        </el-button>
      </div>
      <div style="margin-top: 10px;display: flex;justify-content: left">
        <el-input
          placeholder="一堆操作"
          prefix-icon="el-icon-search"
          v-model="keywords" style="width: 400px" size="small">
        </el-input>
        <el-button type="primary" icon="el-icon-search" size="small" style="margin-left: 3px" @click="searchClick">条件3
        </el-button>
        <el-button type="primary" icon="el-icon-plus" size="small" style="margin-left: 3px" @click="handleAdd">执行4
        </el-button>
      </div>
      <div style="margin-top: 10px;display: flex;justify-content: left">
        <el-input
          placeholder="一堆操作"
          prefix-icon="el-icon-search"
          v-model="keywords" style="width: 400px" size="small">
        </el-input>
        <el-button type="primary" icon="el-icon-search" size="small" style="margin-left: 3px" @click="searchClick">条件5
        </el-button>
        <el-button type="primary" icon="el-icon-plus" size="small" style="margin-left: 3px" @click="handleAdd">执行6
        </el-button>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
        <el-tab-pane label="所有" name="all">
          <blog_table state="-1" :showEdit="false" :showDelete="false" :showRestore="false" :activeName="activeName"></blog_table>
        </el-tab-pane>
        <el-tab-pane label="待执行" name="post">
          <blog_table state="1" :showEdit="true" :showDelete="true" :showRestore="false" :activeName="activeName"></blog_table>
        </el-tab-pane>
        <el-tab-pane label="执行中" name="draft">
          <blog_table state="0" :showEdit="true" :showDelete="true" :showRestore="false" :activeName="activeName"></blog_table>
        </el-tab-pane>
        <el-tab-pane label="已暂停" name="dustbin">
          <blog_table state="2" :showEdit="false" :showDelete="true" :showRestore="true" :activeName="activeName"></blog_table>
        </el-tab-pane>
        <el-tab-pane label="已完成" name="blogmana" v-if="isAdmin">
          <blog_table state="-2" :showEdit="false" :showDelete="true" :showRestore="false" :activeName="activeName"></blog_table>
        </el-tab-pane>
        <el-tab-pane label="已过期" name="blogcfg">
          <blog_cfg></blog_cfg>
        </el-tab-pane>
        <el-tab-pane label="已取消" name="blogcfg">
          <blog_cfg></blog_cfg>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>
<script>
  import BlogTable from '@/components/BlogTable'
  import BlogCfg from '@/components/BlogCfg'
  import {postRequest} from '../utils/api'
  import {putRequest} from '../utils/api'
  import {deleteRequest} from '../utils/api'
  import {getRequest} from '../utils/api'
  export default {
    mounted: function () {
      var _this = this;
      getRequest("/isAdmin").then(resp=> {
        if (resp.status == 200) {
          _this.isAdmin = resp.data;
        }
      })
    },
    data() {
      return {
        activeName: 'post',
        isAdmin: false
      };
    },
    methods: {
      handleClick(tab, event) {
//        console.log(tab, event);
      }
    },
    components: {
      'blog_table': BlogTable,
      'blog_cfg': BlogCfg
    }
  };
</script>
<style>
  .article_list > .header {
    background-color: #ececec;
    margin-top: 10px;
    padding-left: 5px;
    display: flex;
    justify-content: flex-start;
  }

  .article_list > .main {
    /*justify-content: flex-start;*/
    display: flex;
    flex-direction: column;
    padding-left: 0px;
    background-color: #fff;
    padding-top: 0px;
    margin-top: 8px;
  }
</style>
