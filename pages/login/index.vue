<template>
  <div class="login">
    <div class="page_top">
      <div class="logo">
        <img src="~/assets/img/logo.png" />
        <span>SMART PAY</span>
      </div>
      <div class="circle"></div>
    </div>
    <div class="bottom_sheet">
      <div class="title">
        <h2><strong>스마트페이</strong>와 함께<br/>편안하고 즐거운 결제되세요</h2>
        <p>한 번의 가입으로 매장의 장비를 편리하게<br/>결제할 수 있습니다.</p>
      </div>
      <form>
        <input v-model="id" type="text" placeholder="전화번호를 입력해주세요"/>
        <el-button plain @click="$router.push('/login/signUp')">로그인</el-button>
      </form>

      <el-divider>
        SNS로그인
      </el-divider>
      
      <div class="sns_btns">
        <el-button>카카오톡 로그인</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'empty',
  name:'로그인메인'
})

const id = ref('')
</script>

<style lang="scss" scoped>

/**
 * ----------------------------------------
 * animation color-change-2x
 * ----------------------------------------
 */
 @-webkit-keyframes color-change-5x {
  0% {
    background: #19dcea;
  }
  25% {
    background: #b22cff;
  }
  50% {
    background: #00e0ff;
  }
  75% {
    background: #0066ff;
  }
  100% {
    background: #3700ff;
  }
}
@keyframes color-change-5x {
  0% {
    background: #00e0ff;
  }
  50% {
    background: #0066ff;
  }
  100% {
    background: #3700ff;
  }
}

@-webkit-keyframes focus-in-contract {
  0% {
    letter-spacing: 1em;
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@keyframes focus-in-contract {
  0% {
    letter-spacing: 1em;
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}

@keyframes rotate-box{
  0%{
    transform: rotate(360deg);
  }
  100%{
    transform: rotate(0deg);
  }
}

.login{
  overflow:hidden;
  width:100%;
}
.page_top{
  padding:100px 0;
  -webkit-animation: color-change-5x 8s linear infinite alternate both;
	animation: color-change-5x 8s linear infinite alternate both;
  overflow:hidden;
  .logo{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;
    position: relative;
    
    z-index:2;
    img, span{
      display:block;
    }
    span{
      font-family:'Roboto';
      margin-top:15px;
      font-weight:500;
      color:#fff;
      font-size:24px;
      -webkit-animation: focus-in-contract 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	    animation: focus-in-contract 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
  }

  .circle{
    width:200px;
    height:200px;
    border-radius:100px;
    background:rgba(255,255,255,0.1);
    position: fixed;
    animation: rotate-box 15s infinite linear;
    transform-origin:right;
    top:0px;
    right:0px;
    z-index:1;
  }
}
.bottom_sheet{
  height:100%;
  position: relative;
  padding:40px 30px;
  border-radius:24px 24px 0 0;
  top:-34px;
  background:#fff;
  box-shadow: 0 -15px 10px rgba(0,0,0,0.05);

  .title{
    h2{
      font-size:24px;
      line-height:1.3;
      strong{
        color:#0066ff;
      }
    }
    p{
      margin-top:10px;
      font-size:14px;
      color:#797979;
    }
  }

  form{
    margin-top:20px;
    input{
        width:100%;
        height:45px;
        border-radius:10px;
        padding:0 10px;
        border:1px solid #d2d2d2;
        outline: none;
        font-family:'Roboto';
        font-size:18px;
        font-weight:600;
      }
      input:focus{
        border-color:#0066ff;
      }
      input::placeholder{
        font-size:14px;
        color:#aaa;
    }

    .el-button{
      width:100%;
      height:45px;
      border-radius:10px;
      margin-top:10px;
      font-size:14px;
      font-weight:bold;
      background:#0066ff;
      color:#fff;
      border:0;
    }
  }

  .el-divider{
    margin:30px 0;
  }

  .sns_btns{
    .el-button{
      background:#ffdd00;
      height:45px;
      width:100%;
      border-radius:10px;
      color:#391b1b;
      border:0;
      font-size:14px;
    }
  }
}
</style>