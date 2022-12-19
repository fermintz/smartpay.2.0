<template>
  <div class="contents">
    <div class="page_top">
      <h2>
        <strong>워시프렌즈 광안점</strong>에서 이용한
        이용내역입니다.
      </h2>
      <div class="myPoint">
        <span>나의 포인트</span>
        <strong>15,000P</strong>
      </div>
    </div>

    <div class="list">
      <div class="no-item">
        이용한 내역이 없습니다.
      </div>
      <dl v-for="item in 3" :key="item">
        <dt>12월 {{item+10}}일</dt>
        <dd>
          <div class="item order">
            <div class="left">
              <div class="state">결제</div>
              <div class="time">14:56</div>
            </div>
            <div class="right">
              <div class="service">키오스크</div>
              <div class="product">
                <span>세탁기 1번 19Kg</span>
                <strong>5,000원</strong>
              </div>
              <el-divider></el-divider>
              <ul>
                <li>
                  <span>포인트사용</span>
                  <strong>-5,000P</strong>
                </li>
              </ul>
            </div>
          </div>

          <div class="item chage">
            <div class="left">
              <div class="state">충전</div>
              <div class="time">14:56</div>
            </div>
            <div class="right">
              <div class="service">관리자</div>
              <el-divider></el-divider>
              <ul>
                <li>
                  <span>포인트충전</span>
                  <strong>+5,000P</strong>
                </li>
              </ul>
            </div>
          </div>

          <div class="item order">
            <div class="left">
              <div class="state">결제</div>
              <div class="time">14:56</div>
            </div>
            <div class="right">
              <div class="service">키오스크</div>
              <div class="product">
                <span>세탁기 1번 19Kg</span>
                <strong>5,000원</strong>
              </div>
              <el-divider></el-divider>
              <ul>
                <li>
                  <span>결제금액(카드)</span>
                  <strong>3,000원</strong>
                </li>
                <li>
                  <span>포인트사용</span>
                  <strong>-2,000P</strong>
                </li>
              </ul>
            </div>
          </div>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'second',
  name:'이용내역'
})
</script>

<style lang="scss" scoped>

.no-item{
  padding:15px;
  background:#f5f5f7;
  border-radius:10px;
}

.contents{
  .page_top{
    h2{
      margin-bottom:15px;
    }
    p{
      font-size:14px;
      color:#797979;
    }

    .myPoint{
      display:flex;
      align-items: center;
      justify-content: space-between;
      background:#f5f5f7;
      padding:15px;
      border-radius:10px;
      span{
        font-size:14px;
      }
      strong{
        font-size:18px;
        font-weight:600;
        color:#0066ff;
      }
    }
  }

  .list{
    margin-top:40px;
    display:flex;
    flex-direction: column;
    gap:30px;

    dl{
      dt{
        margin-bottom:15px;
        font-size:14px;
        font-weight:600;
      }
      dd{
        display:flex;
        flex-direction: column;
        gap:15px;
        .item{
          display:flex;
          border:1px solid #e2e2e2;
          border-radius:10px;
          padding:15px;
          .left{
            .state{
              display:flex;
              align-items: center;
              justify-content: center;
              width:50px;
              height:50px;
              background:#f5f5f7;
              border-radius:8px;
              font-size:14px;
              font-weight:600;
              color:#0066ff;
            }
            .time{
              text-align:center;
              margin-top:8px;
              font-size:11px;
            }
          }
          .right{
            flex:1;
            margin-left:15px;

            .service{
              font-size:16px;
              font-weight:bold;
            }
            .product{
              display:flex;
              align-items: center;

              font-size:13px;
              margin-top:8px;
              gap:10px;
              span{
                flex:1;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
              }
              strong{
                font-weight:600;
              }
            }
            .el-divider{
              margin:10px 0;
            }

            ul{
              display:flex;
              flex-direction: column;
              gap:8px;
              li{
                display:flex;
                align-items: center;
                justify-content: space-between;
                font-size:13px;
                gap:10px;

                strong{
                  font-weight:600;
                  color:#0066ff;
                }
              }
            }
          }
        }

        .item.chage{
          .left{
            .state{
              color:#e61245;
              background:#f5eeee;
            }
          }
          .right{
            ul{
              li{
                strong{
                  color:#e61245;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>