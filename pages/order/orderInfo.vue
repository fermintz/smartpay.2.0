<template>
  <div class="orderInfo">
    <div class="page_top">
      <h2>선택하신 내용을<br/>다시 한번 <strong>확인 후 결제</strong>해주세요</h2>
    </div>
    <section class="info"> 
      <dl class="selection">
        <dt>선택한 장비&상품</dt>
        <dd>
          <div class="eq_name">
            1번 세탁기 19kg
          </div>
          <el-divider></el-divider>
          <div class="product_info">
            <div class="text">
              <strong>표준세탁</strong>
              <span>30분</span>
            </div>
            <div class="price">
              5,000원
            </div>
          </div>
        </dd>
      </dl>
      <dl class="point_form">
        <dt>포인트 사용</dt>
        <dd>
          <div class="user_point">
            <span>나의포인트</span>
            <strong>0P</strong>
          </div>
          <div class="point_use">
            <span>1,000P</span>
            <el-button plain>전액사용</el-button>
          </div>
        </dd>
      </dl>
    </section>

    <div class="divider"></div>

    <section class="last_info">
      <dl class="total">
        <dt>총 결제금액</dt>
        <dd>4,000원</dd>
      </dl>
      <el-divider></el-divider>
      <dl>
        <dt>상품금액</dt>
        <dd>5,000원</dd>
      </dl>
      <dl>
        <dt>사용포인트</dt>
        <dd>-1,000P</dd>
      </dl>
      <dl class="point">
        <dt>적립예상 포인트</dt>
        <dd>400P</dd>
      </dl>

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

      <el-button class="finish" plain @click="open">
        결제하기
      </el-button>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ElMessageBox } from 'element-plus';

definePageMeta({
  layout:'second',
  name:'결제 및 포인트사용'
})

const open = () => {
  ElMessageBox.confirm(
    '결제를 진행하시겠습니까?',
    '결제확인',
    {
      confirmButtonText:'확인',
      cancelButtonText:'취소',
      buttonSize:'large',
      customClass:'messageBox',
      confirmButtonClass:'confirm'
    }
  )
}


const agree1 = ref(false)
const agree2 = ref(false)
</script>

<style lang="scss" scoped>


.page_top{
  padding:20px;
  h2{
    font-size:20px;
    font-weight:600;
    strong{
      color:#0066ff;
    }
  }
}
section{
  padding:20px;
}
section.info{
  display:flex;
  flex-direction: column;
  gap:40px;
  dl{
    dt{
      margin-bottom:10px;
      font-size:14px;
      color:#797979;
    }
  }
}

section.last_info{
  .el-divider{
    margin:15px 0;
  }

  dl{
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:10px;

    dt{
      font-size:14px;
      color:#797979;
    }
    dd{
      font-size:14px;      
    }
  }

  dl.total{
    dt{
      color:#292929;
    }
    dd{
      font-size:16px;
      font-weight:600;
      color:#d22828;
    }
  }

  dl.point{
    dd{
      color:#0066ff
    }
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

.divider{
  height:10px;
  background:#f5f5f7;
}
.selection{
  dd{
    background:#f5f5f7;
    border-radius:10px;
    overflow:hidden;
    padding:15px;
    .eq_name{
      font-weight:600;
    }
    .el-divider{
      margin:10px 0;
    }
    .product_info{
      display:flex;
      justify-content: space-between;
      align-items: center;
      .text{
        strong{
          font-size:14px;
          display:block;
        }
        span{
          display:block;
          font-size:12px;
          color:#0066ff;
          margin-top:2px;
        }
      }
      .price{
        font-weight:600;
        line-height:1;
      }
    }
  }
}
.point_form{
  dd{
    .user_point{
      height:50px;
      border-radius:10px;
      display:flex;
      align-items: center;
      padding:0 15px;
      justify-content: space-between;
      background:#f5f5f7;
      span{
        font-size:14px;
      }
      strong{
        font-weight:600;
      }
    }

    .point_use{
      display:flex;
      align-items: center;
      gap:10px;
      margin-top:10px;
      span{
        display:flex;
        align-items: center;
        height:50px;
        border-radius:10px;
        flex:1;
        border:1px solid #e2e2e2;
        padding:0 10px;
        font-weight:600;
      }
      .el-button{
        height:50px;
        border-radius:10px;
        background:#292929;
        border:0;
        color:#fff;
        padding:0 20px;
      }
    }
  }
}
</style>