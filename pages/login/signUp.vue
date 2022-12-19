<template>
  <div class="contents signUp">
    <div class="page_top">
      <h2>첫 방문이시네요!<br/>본인 인증이 필요합니다.</h2>
      <p>
        <strong>010-8525-4561</strong>번호로 인증번호를<br/>발송하였습니다.
      </p>
    </div>

    <form>
      <div class="textBox">
        <input type="text" placeholder="인증번호를 입력해주세요(4자리)">
        <span>05:00</span>
      </div>
      <div class="btns">
        <el-button>인증번호 재전송</el-button>
        <el-button class="complete" @click="$router.push('password')">
          인증완료
        </el-button>
      </div>
      
    </form>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'second',
  name:'인증하기'
})
</script>

<style lang="scss" scoped>
.page_top{
  h2{
    margin-bottom:15px;
  }
  p{
    strong{
      color:#0066ff;
      font-weight:600;
    }
  }
}

form{
  margin-top:30px;
  .textBox{
    background:#f5f5f7;
    display:flex;
    align-items: center;
    border-radius:10px;
    overflow:hidden;

    input{
      height:50px;
      flex:1;
      background:none;
      border:0;
      outline: none;
      padding:0 15px;
    }
    span{
      font-size:14px;
      font-weight:600;
      padding:0 15px;
      color:#d22828;
    }
  }

  .btns{
    display:flex;
    gap:10px;
    margin-top:10px;
    .el-button{
      flex:1;
      height:48px;
      border-radius:10px;
      margin:0;

    }
    .el-button.complete{
      flex:1.5;
      background:#0066ff;
      color:#fff;
      border:0;
    }
  }


}
</style>