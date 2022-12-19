<template>
  <footer>
    <h4>워시프레시(용산점)</h4>
    <div class="btns">
      <el-button @click="$router.push('/login')">
        로그아웃
      </el-button>
      <el-button @click="$router.push('/agree')">
        서비스 이용약관
      </el-button>
      <el-button @click="$router.push('/agree')">
        개인정보 취급방침
      </el-button>
    </div>
    <ul>
      <li>
        <span>사업자등록번호</span>
        <strong>178-15-01626</strong>
      </li>
      <li>
        <span>통신판매업</span>
        <strong>2021-부산강서구-0877</strong>
      </li>
      <li>
        <span>소재지</span>
        <strong>서울 용산구 한강대로 69 지하 1층 셀프빨래방</strong>
      </li>
      <li>
        <span>대표자</span>
        <strong>김선민</strong>
      </li>
      <li>
        <span>연락처</span>
        <strong>02-797-7477</strong>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
footer{
  padding:30px 20px 40px 20px;

  h4{
    font-size:16px;
  }

  .btns{
    margin:15px 0;
    display:flex;
    overflow-y:auto;
    gap:5px;
    .el-button{
      margin:0;
      font-size:12px;
    }
  }

  .btns::-webkit-scrollbar{
    display:none;
  }

  ul{
    li{
      strong,span{
        font-size:12px;
      }
      span{
        color:#797979;
        margin-right:7px;
      }
    }
  }
}
</style>