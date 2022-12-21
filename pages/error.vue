<template>
  <div class="error_page contents">
    <dl>
      <dt><img src="~/assets/img/error.png"></dt>
      <dd>요청하신 페이지를 찾을 수 없습니다.</dd>
    </dl>

    <p>페이지가 존재하지 않거나, 사용할 수 없는 페이지 입니다. 입력하신 주소가 정확한지 다시 한 번 확인해주세요</p>

    <el-button>
      이전으로 돌아가기
    </el-button>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'empty',
})

const error = useError()

onMounted(()=>{
  console.log(error)
})

</script>

<style lang="scss" scoped>
.error_page{
  height:100vh;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  dl{
    dt{
      margin:30px 0;
      img{
        width:100%;
      }
    }
    dd{
      font-size:18px;
      font-weight:600;
      text-align:center;
      color:#494949;
    }
  }

  p{
    text-align:center;
    margin-top:15px;
    font-size:14px;
    color:#797979;
  }

  .el-button{
    margin-top:30px;
    height:40px;
    padding:0 30px;
    border-radius:25px;
    font-size:14px;
    background:#0066ff;
    color:#fff;
    border:0;
  }
}
</style>