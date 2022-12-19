<template>
  <div class="contents">
    <div class="page_top">
      <h2>
        장비의 <strong>상품을 선택</strong>해주세요
      </h2>

      <dl>
        <dt>선택된 장비</dt>
        <dd @click="visible = true">
          <strong>세탁기 1번 19Kg</strong>
          <span class="material-icons">chevron_right</span>
        </dd>
      </dl>
    </div>

    <div class="tabs">
      <el-button 
      text 
      @click="tabsNumber = index" 
      v-for="(item, index) in ['상품 직접선택', '투입금액 직접입력']" 
      :key="item"
      :class="{active:tabsNumber === index}"
      >
        {{item}}
      </el-button>
    </div>

    <div class="list" v-show="tabsNumber === 0">
      <div class="item" v-for="item in 10" :key="item" @click="$router.push('orderInfo')">
        <div class="left">
          <strong>쾌속코스</strong>
          <span>34분</span>
        </div>
        <div class="right">
          <strong>5,000원</strong>
          <span>+250P</span>
        </div>
      </div>
    </div> <!-- tab_cont -->

    <div class="user_price" v-show="tabsNumber === 1">
      <div class="price_box">
        <span>투입금액</span>
        <strong>{{userPrice}}</strong>
      </div>
      <div class="btns">
        <el-button @click="userPrice = 0">초기화</el-button>
        <el-button @click="priceCount">-500</el-button>
        <el-button @click="priceCount">+500</el-button>
      </div>

      <el-divider></el-divider>

      <el-button class="finish">입력완료</el-button>
    </div>

    <EqSelection v-model="visible" />
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  layout:'second',
  name:'상품 선택하기'
})

const visible = ref(false)
const tabsNumber = ref<number>(0)
let userPrice:any = ref(0)

const priceCount = () => {
  if(userPrice === 0){
    userPrice += 500
  }else{
    userPrice -= 500 
  }
}
</script>

<style lang="scss" scoped>
.page_top{
  dl{
    margin-top:20px;
    dt{
      font-size:12px;
      margin-bottom:5px;
    }
    dd{
      display:flex;
      align-items: center;
      background:#f5f5f7;
      height:50px;
      border-radius:10px;
      padding:0 15px;
      justify-content: space-between;
      strong{
        font-weight:600;
      }
      span{
        color:#c2c2c2;
      }
    }
  }
}

.tabs{
  margin:30px 0;
  display:flex;
  align-items: center;
  .el-button{
    flex:1;
    height:50px;
    border-radius:0;
    font-size:14px;
    font-weight:600;
    color:#a2a2a2;
    border-bottom:3px solid #f2f2f4;
    margin:0;
  }
  .el-button.active{
    border-color:#0066ff;
    color:#292929;
  }
}

.list{
  display:flex;
  flex-direction: column;
  gap:10px;

  .item{
    display:flex;
    align-items: center;
    justify-content: space-between;
    border:1px solid #e2e2e2;
    padding:15px;
    border-radius:10px;
    
    span,strong{
      display:block;
    }
    span{
      font-size:14px;
      margin-top:5px;
    }
    strong{
      font-size:16px;
    }

    .left{
      strong{
        font-size:16px;
      }
      span{
        color:#797979;
      }
    }
    .right{
      text-align:right;
      strong{
        font-weight:600;
      }
      span{
        color:#0066ff;
      }
    }
  }
}

.user_price{
  .price_box{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:0 15px;
    height:50px;
    background:#f5f5f7;
    border-radius:10px;

    span{
      font-size:12px;
      color:#797979;
    }
  }

  .btns{
    display:flex;
    gap:10px;
    margin-top:10px;
    
    .el-button{
      flex:1;
      margin:0;
      height:45px;
      font-size:14px;
      font-weight:600;
      border-radius:10px;
      color:#292929;
      border:1px solid #d2d2d2;
    }
  }

  .finish{
    height:50px;
    width:100%;
    border-radius:10px;
    font-size:14px;
    font-weight:600;
    color:#fff;
    background:#0066ff;
  }

}
</style>