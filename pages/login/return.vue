<template>
  <div class="contents">
    <div class="page_top">
      <h2>
        <strong>4561님</strong><br/>
        다시 방문해주셔서 반갑습니다!
      </h2>
      <p>비밀번호를 입력해 로그인을 완료해주세요</p>
    </div>

    <form>
      <input type="text" placeholder="비밀번호을 숫자 4자리를 입력해주세요">
      <el-button class="finish" @click="$router.push('/')">로그인</el-button>
    </form>
    <div class="bottom" @click="open">
      <el-button>비밀번호를 잃어버렸어요</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElMessageBox } from 'element-plus';

definePageMeta({
  layout:'second',
  name:'로그인'
})

const route = useRouter()

const open = () => {
  ElMessageBox.confirm(
    '임시비밀번호를 발급할까요? 발급받으신 후 새로운 비밀번호로 변경할 수 있습니다.',
    '임시 비밀번호 발급',

    {
      confirmButtonText:'확인',
      cancelButtonText:'취소',
      buttonSize:'large',
      customClass:'messageBox',
      confirmButtonClass:'confirm',
    }
  )

  .then(()=>{
    route.push('rePassword')
  })
}

</script>

<style lang="scss" scoped>
.page_top{
  margin-bottom:30px;
  h2{
    margin-bottom:15px;
  }
  p{
    strong{
      color:#0066ff;
    }
  }
}

form{
  input{
    height:50px;
    border-radius:10px;
    width:100%;
    border:1px solid #e2e2e2;
    outline:none;
    padding:0 10px;

  }

  .el-button.finish{
    width:100%;
    height:50px;
    border-radius:10px;
    margin-top:15px;
    background:#0066ff;
    color:#fff;
    border:0;
    font-size:16px;
    font-weight:600;
  }
}

.bottom{
  margin-top:30px;
  display:flex;
  justify-content: center;

  .el-button{
    height:30px;
    border-radius:15px;
    background:#f2f2f2;
    padding:0 15px;
    border:0;
  }
}
</style>