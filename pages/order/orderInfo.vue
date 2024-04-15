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

      <el-button class="finish" plain @click="guidePopup = true">
        결제하기
      </el-button>
    </section>

    <div class="guidePopup" v-show="guidePopup">
      <div class="black-bg" @click="guidePopup = false, guidePage = 0">
      </div>
      <div class="guide_cont_wrap slideup">
        <button class="close-btn" @click="guidePopup = false, guidePage = 0">
          <span class="material-icons">close</span>
        </button>
        <dl class="guide_cont"  v-show="guidePage === 0">
          <dt>
            <img src="~/assets/img/guide01.jpg"/>
          </dt>
          <dd>
            <span>STEP <b>01</b>/03</span>
            <strong>세탁물 넣고 도어닫기</strong>
            <p>세탁물을 세탁기에 넣고 세탁기 도어를 잘 닫으셨나요?</p>
            <el-button plain @click="guidePage = 1">다음</el-button>
          </dd>
        </dl>

        <dl class="guide_cont"  v-show="guidePage === 1">
          <dt>
            <img src="~/assets/img/guide02.jpg"/>
          </dt>
          <dd>
            <span>STEP <b>02</b>/03</span>
            <strong>세탁코스 선택</strong>
            <p>세탁기의 다이얼을 조절해 세탁코스를 선택하신 후 확인을 눌러주세요</p>
            <el-button plain @click="guidePage = 2">다음</el-button>
          </dd>
        </dl>

        <dl class="guide_cont"  v-show="guidePage === 2">
          <dt class="last">
            <div class="title">
              <strong>1번 세탁기 19Kg</strong>
              <span>표준세탁 50분</span>
            </div>
            <div class="divider-px"></div>
            <div class="info">
              <div class="info-item">
                <span>상품금액</span>
                <strong>5,000원</strong>
              </div>
              <div class="info-item">
                <span>사용포인트</span>
                <strong>5,000원</strong>
              </div>
              <div class="info-item">
                <span>상품금액</span>
                <strong>5,000원</strong>
              </div>
              <div class="divider-px"></div>
              <div class="finish">
                <span>결제예정금액</span>
                <strong>0원</strong>
              </div>
            </div>
          </dt>
          <dd>
            <span>STEP <b>03</b>/03</span>
            <strong>선택하신 내용을 마지막으로 확인해주세요</strong>
            <p>내용이 맞으시면 결제를 진행해주세요</p>
            <el-button plain @click="guidePopup = false, guidePage = 0">맞습니다, 결제할게요</el-button>
          </dd>
        </dl>
      </div>
    </div>

    
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  layout:'second',
  name:'결제 및 포인트사용'
})

const guidePopup = ref(false)
const guidePage = ref(0)
const agree1 = ref(false)
const agree2 = ref(false)

onMounted(()=>{
  guidePopup.value = false
})

</script>

<style lang="scss" scoped>
.guidePopup{
  position: fixed;
  lefT:0;
  top:0;
  z-index:30;
  width:100%;
  height:100%;
  display:flex;
  align-items: center;
  justify-content: center;
  
  .black-bg{
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.8);
    position: absolute;
    top:0px;
    left:0;
    z-index:10
  }

  .close-btn{
    position: absolute; 
    display:flex;
    align-items: center;
    justify-content: center;
    z-index:40;
    top:5px;
    right:40px;
    width:40px;
    height:40px;
    background:#000;
    color:#fff;
    border:3px solid #f2f2f2;
    border-radius:20px;
  }

  .guide_cont_wrap{
    flex:1;
    padding:24px;
    position: relative;
    z-index:20;

    .guide_cont{
      background:#fff;
      border-radius: 20px;
      overflow: hidden;
      padding:0px;

      dt{
        img{
          display:block;
          width:100%; 
          object-fit: cover; 
          height:220px;
        } 
      }

      dt.last{
        min-height:200px;
        padding:20px;
        background:#f2f2f2;

        .divider-px{
          height:1px;
          background:#e2e2e2;
          margin:14px 0;
        }
        .title{
          display:flex;
          flex-direction: column;
          strong{
            font-size:18px;
            font-weight:500;
          }
          span{
            font-size:14px;
            color:#0066ff;
          }
        }
        .info{
          display:flex;
          flex-direction: column;
          gap:5px;
          font-size:14px;
          .info-item{
            display:flex;
            align-items: center;
            justify-content: space-between;

            span{color:#797979;}
            strong{}
          }
        }
        .finish{
          display:flex;
          align-items: center;
          justify-content: space-between;
          span{color:#797979;}
          strong{
            color:#d22828;
            font-size:18px;
            font-weight:500;
          }
        }
      }
      dd{
        display:flex;
        flex-direction: column;
        padding:20px;

        span{
          font-size:14px;
          color:#797979;
          margin-bottom:5px;
          b{font-weight:600; color:#292929}
        }
        strong{
          font-size:20px; 
          font-weight:600;
        }
        p{
          margin-top:10px;
          color:#797979;
        }

        .el-button{
          margin-top:30px;
          height:48px;
          background:#0066ff;
          color:#fff;
          border:0px;
          font-size:16px;
        }
      }
    }
  }
}

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


.slideup{
  animation: slideup .5s ease forwards;
}

@keyframes slideup {
  0%{
    transform: translateY(70px);
  }

  100%{
    transform: translateY(0);
  }
}
</style>