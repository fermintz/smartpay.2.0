<template>
  <div class="contents">
    <div class="page_top">
      <h2>발송된 임시 비밀번호를 입력 후 새 비밀번호를 생성해주세요</h2>
    </div>

    <form action="post">
      <span>임시 비밀번호 입력</span>
      <input type="text" placeholder="임시비밀번호를 입력해주세요">
      <el-divider></el-divider>
      <span>새로운 비밀번호 생성</span>
      <input type="text" placeholder="새로 사용할 비밀번호를 입력해 주세요">
      <input type="text" placeholder="비밀번호 확인">

      <el-button @click="$router.push('/')">
        로그인하기
      </el-button>
    </form>
  </div>
</template>

<script lang="ts">
W

definePageMeta({
  layout:'second',
  name:'비밀번호 변경'
})

</script>

<style lang="scss" scoped>
form{
  display:flex;
  flex-direction: column;
  span{
    margin-bottom:10px;
    font-size:14px;
  }
  input{
    width:100%;
    height:50px;
    border-radius:10px;
    border:1px solid #d2d2d2;
    padding:0 10px;
    margin-bottom:10px;
  }

  .el-button{
    height:50px;
    background:#0066ff;
    color:#fff;
    border:0;
    margin-top:20px;
  }
}
</style>