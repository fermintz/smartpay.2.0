<template>
  <div class="second_layout">
    <header>
      <el-button text @click="$router.go(-1)"> 
        <span class="material-icons">arrow_back</span>
      </el-button>
      <h3>
        {{$route.meta.name}}
      </h3>
      <!-- <el-button text @click="$router.push('/')">
        <span class="material-icons-outlined">home</span>
      </el-button> -->
    </header>
    <NuxtPage />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>

<style lang="scss" scoped>
.second_layout{
  header{
    position: sticky;
    top:0;
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:70px;
    padding:0 15px;
    background:#fff;
    gap:10px;

    h3{
      
      font-size:18px;
      margin:0;
      padding:0;
      flex:1;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
    }

    .el-button{
      width:50px;
      height:50px;
      border-radius:25px;
    }
  }
}
</style>