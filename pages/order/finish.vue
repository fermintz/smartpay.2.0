<template>
  <div class="finish">
    <div class="page_top">
      <div class="icon">
        <span class="material-icons">
          check
        </span>
      </div>
      <div class="circle_box">
        <img src="~/assets/img/laundry.png" alt="세탁기" />
      </div>
    </div>

    <dl>
      <dt>결제가 완료되었습니다</dt>
      <dd>
        <strong>1번 세탁기 19Kg</strong>에 금액이 잘 투입되었는지 확인해주세요!
      </dd>
    </dl>

    <div class="btns">
      <el-button @click="$router.push('/')">메인으로</el-button>
      <el-button>한번 더 투입하기</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'empty',
  name:'결제완료'
})
</script>

<style lang="scss" scoped>
.finish{
  display:flex;
  flex-direction: column;
  justify-content: center;

  padding:80px 40px;
  .page_top{
    display:flex;
    flex-direction: column;
    align-items: center;
    .icon{
      position: absolute;
      display:flex;
      align-items: center;
      justify-content: center;
      background:#0066ff;
      left:50%;
      margin-left:-150px;
      width:80px;
      height:80px;
      border-radius:26px;
      z-index:1;
      -webkit-animation:rotate-scale-up .5s linear both;animation:rotate-scale-up .5s linear both;
      span{
        color:#fff;
        font-size:60px;
        font-weight:600;
      }
    }
    .circle_box{
      width:100%;
      height:100%;
      max-height:260px;
      max-width:260px;
      border-radius:140px;
      background:#e2e2e2;
      overflow:hidden;
      
      img{
        position: relative;
        object-fit: contain;
        object-position:center 50px;      
        display:block;
        width:100%;
        height:100%;
        max-height:260px;
        max-width:260px;
        z-index:2;
        animation: slideUp 0.5s forwards ease-out;
      }
    }

    @keyframes slideUp {
      0%{
        top:260px
      }
      100%{
        top:0;
      }
    }
        
    @-webkit-keyframes rotate-scale-up{0%{-webkit-transform:scale(1) rotateZ(0);transform:scale(1) rotateZ(0)}50%{-webkit-transform:scale(2) rotateZ(180deg);transform:scale(2) rotateZ(180deg)}100%{-webkit-transform:scale(1) rotateZ(360deg);transform:scale(1) rotateZ(360deg)}}@keyframes rotate-scale-up{0%{-webkit-transform:scale(1) rotateZ(0);transform:scale(1) rotateZ(0)}50%{-webkit-transform:scale(2) rotateZ(180deg);transform:scale(2) rotateZ(180deg)}100%{-webkit-transform:scale(1) rotateZ(360deg);transform:scale(1) rotateZ(360deg)}}
  }

  dl{
    text-align:center;
    margin-top:40px;
    dt{
      font-size:24px;
      font-weight:600;
    }
    dd{
      margin-top:10px;
      strong{
        color:#0066ff;
        font-weight:600;
      }
    }
  }

  .btns{
    display:Flex;
    justify-content: center;
    align-items: center;
    margin-top:40px;
    .el-button{
      padding:0 30px;
      border-radius:23px;
      height:46px;
      border:1px solid #d2d2d2;
    }
    .el-button:last-child{
      background:#292929;
      color:#fff;
      border:0;
    }
  }
}
</style>