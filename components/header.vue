<template>
  <header>
    <div class="logo">
      <img src="~/assets/img/logo.png" />
      <div class="text">
        <strong>워시프렌즈</strong>
        <span>광안점</span>
      </div>
    </div>
    <div class="btns">
      <el-button text @click="$router.push('/store')"> 
        <span class="material-icons-outlined">store_mall_directory</span>
        <span class="material-icons">import_export</span>
      </el-button>
    </div>
  </header>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
header{
  display:flex;
  align-items:center;
  justify-content: space-between;
  padding:0 20px;
  height:70px;
  background:#fff;
  .logo{
    display:flex;
    align-items: center;
    img{
      display:block;
      height:36px;
      margin-right:15px;
    }
    .text{
      strong,span{
        display:block;
      }
      strong{
        font-size:18px;
        font-weight:600;
        line-height:1;
      }
      span{
        margin-top:3px;
        font-size:12px;
        color:#0066ff;
      }
    }
  }

  .btns{
    .el-button{
      position: relative;
      width:50px;
      height:50px;
      border-radius:25px;
    }
    span.material-icons-outlined{
      font-size:30px;
    }
    span.material-icons{
      position: absolute;
      bottom:6px;
      right:6px;
      background: #0066ff;
      font-size:14px;
      border-radius:12px;
      color:#fff;
    }
  }
}
</style>