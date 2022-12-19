<template>
  <div class="contents">
    <div class="page_top">
      <h2>로그인을 위한 비밀번호를<br/>생성해주세요</h2>
      <p>비밀번호는 <strong>숫자 4자리</strong>만 가능합니다.</p>
    </div>

    <form>
      <input type="text" placeholder="비밀번호 숫자 4자리를 입력해주세요">
      <input type="text" placeholder="비밀번호를 다시 한번 입력해주세요">
      <el-divider></el-divider>
      <div class="agree">
        <div class="item" :class="{active:agree1}" @click="agree1 = !agree1">
          <span class="material-icons">check_circle
          </span>
          <strong>개인정보 제3자 제공공지</strong>
          <el-button>상세보기</el-button>
        </div>
        <div class="item" :class="{active:agree2}" @click="agree2 = !agree2">
          <span class="material-icons">check_circle
          </span>
          <strong>전자상거래 구매안전 서비스 안내</strong>
          <el-button>상세보기</el-button>
        </div>
      </div>

      <el-button class="finish" plain @click="$router.push('return')">
        가입 완료하기
      </el-button>
    </form>
  </div>
</template>

<script lang="ts" setup>


definePageMeta({
  layout:'second',
  name:'비밀번호 생성'
})

const agree1 = ref(false)
const agree2 = ref(false)



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
    margin-bottom:10px;
  }

  .agree{
    display:flex;
    flex-direction: column;
    gap:10px;
    margin-top:40px;
    .item{
      background:#f5f5f7;
      height:46px;
      align-items: center;
      padding:0 10px;
      border-radius:10px;
      display:flex;
      span{
        color:#d2d2d2;
        margin-right:8px;
        font-size:20px;
      }
      strong{
        font-size:14px;
        flex:1;
      }
      .el-button{
        padding:0 5px;
        font-size:10px;
      }
    }

    .item.active{
      span{
        color:#0066ff
      }
    }
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


 
</style>