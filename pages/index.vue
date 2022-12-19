<template>
  <div class="contents main">
    <div class="top">
      <strong>4561 님,</strong>
      <span>오늘도 즐거운 세탁되세요</span>
    </div>

    <div class="grid">
      <div class="use" @click="$router.push('/order/machine')">
        <dl class="text">
          <dt>
            매장 이용하기
          </dt>
          <dd>
            매장의 장비와 상품을 선택할 수 있습니다.
          </dd>
        </dl>
        <img src="~/assets/img/laundry.png" alt="세탁기">
      </div>

      <div class="row">
        <dl class="col point">
          <dt>잔여포인트</dt>
          <dd>12,800P</dd>
        </dl>
        <dl class="col mypage" @click="$router.push('user')">
          <dt>나의 이용내역</dt>
          <dd>
            <span class="material-icons">chevron_right</span>
          </dd>
        </dl>
      </div>
    </div>

    <div class="divider"></div>

    <section>
      <dl class="map">
        <dt>매장 위치</dt>
        <dd>
          <div id="map" style="width:100%;height:100%;">
          </div>
        </dd>
      </dl>

      <dl class="notice">
        <dt>공지사항</dt>
        <dd>
          <span>공지사항이야기 입니다 안녕하세요 여기는 워시프렌즈 광안점입니다</span>
        </dd>
      </dl>

    </section>
  </div>
</template>

<script lang="ts" setup>


</script>

<style lang="scss" scoped>
.main{

  .top{
    strong,span{
      display:block;
    }
    strong{
      font-family:'Roboto';
      font-size:24px;
      font-weight:800;
    }
    span{
      color:#797979;
    }
  }

  .grid{
    display:flex;
    flex-direction: column;
    gap:10px;
    margin-top:20px;
    
    .use{
      padding:15px;
      border-radius:10px;
      display:flex;
      align-items: center;
      background:#0066ff;
      flex:1;

      img{
        height:80px;
        padding:0 10px;
      }

      dl{
        margin-right:20px;
        dt{
          display:flex;
          align-items: center;
          padding:0;
          font-size:18px;
          font-weight:600;
          color:#fff;         
        }
        dd{
          margin:0;
          margin-top:5px;
          font-size:14px;
          color:rgba(255,255,255,0.6);
          margin-top:5px;
        }
      }
      span{
        margin-left:15px;
        color:rgba(255,255,255,0.6);
        margin-left:10px;
        font-size:18px;
      }
    }
    
    .row{
      display:flex;
      gap:10px;
      .col{
        flex:1;
        border-radius:10px;
        background:#f5f5f7;
        padding:15px;
        min-height:90px;
        box-sizing: border-box;
        margin:0;
        display:flex;
        flex-direction: column;
        justify-content: space-between;

        dt{
          font-size:14px;
          font-weight:600;
        }
        dd{
          margin-top:10px;
          text-align:right;
        }
      }

      .col.point{
        dd{
          font-size:20px;
          font-weight:600;
          color:#0066ff;
          font-family:'Roboto';
        }
      }

      .col.mypage{
        background:#292929;
        dt{
          color:#fff;
        }
        dd{
          span{
            color:rgba(255,255,255,0.6);
            font-size:18px;
          }
        }
      }
    }
  }

  .divider{
    height:1px;
    background:#e2e2e2;
    margin:40px 0;
  }

  section{
    display:flex;
    flex-direction: column;
    gap:40px;
    dl{
      dt{
        margin-bottom:10px;
        font-weight:500;
      }
    }

    .map{
      dd{
        height:150px;
        background:#f5f5f7;
        border-radius:10px;
      }
    }

    .notice{
      dd{
        background:#f5f5f7;
        padding:15px;
        border-radius:10px;
        span{
          font-size:14px;
          color:#797979;
        }
      }
    }

    .customer{
      dd{
        strong, span{
          display:block;
        }
        strong{
          font-size:24px;
          font-weight:700;
          font-family:'Roboto';
        }
        span{
          font-size:14px;
          color:#797979;
          margin-top:5px;
        }
      }
      dd.btns{
        display:flex;
        flex-direction: column;
        gap:10px;
        margin-top:30px;
        .el-button{
          width:100%;
          height:40px;
          margin:0;
          border-radius:10px;
          border:0;
          background:#fff;
          border:1px solid #e2e2e2;
        }
      }
    }
  }

}
</style>