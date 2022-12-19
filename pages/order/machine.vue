<template>
  <div class="contents">
    <div class="page_top">
      <h2>
        이용하실 <strong>장비를 선택</strong>해 주세요
      </h2>
    </div>

    <div class="tabs">
      <div class="tab-head">
        <el-button 
          text 
          @click="tabs = index" v-for="(item, index) in ['전체','세탁기','건조기','기타']" 
          :key="item"
          :class="{active:tabs === index}"
        >
          {{item}}
        </el-button>
      </div>
      <div class="tab-cont" v-show="tabs === 0">
        <div class="list">
          <div class="item" v-for="item in 5" :key="item" @click="$router.push('product')">
            <div class="state">
              <span class="pause">대기</span>
            </div>
            <div class="text">
              <strong>세탁기 {{item}}번 19kg</strong>
              <span>이용이 가능합니다</span>
            </div>
            <span class="material-icons">chevron_right</span>
          </div>
        </div>

        <el-divider></el-divider>

        <div class="list disable">
          <div class="item disable">
            <div class="state">
              <span class="play">사용</span>
            </div>
            <div class="text">
              <strong>세탁기 4번 19kg</strong>
              <span>이미 사용중입니다.</span>
            </div>
            <dl>
              <dt>남은시간</dt>
              <dd>09분</dd>
            </dl>
          </div>

          <div class="item disable">
            <div class="state">
              <span class="error">고장</span>
            </div>
            <div class="text">
              <strong>세탁기 5번 19kg</strong>
              <span>현재 이용이 불가능합니다.</span>
            </div>       
          </div>
        </div>
      </div> <!-- tab-cont -->
      <div class="tab-cont" v-show="tabs === 1">
        <div class="no-item">
          등록된 장비가 없습니다.
        </div>
      </div>
      <div class="tab-cont" v-show="tabs === 2">
        <div class="no-item">
          등록된 장비가 없습니다.
        </div>
      </div>
      <div class="tab-cont" v-show="tabs === 3">
        <div class="no-item">
          등록된 장비가 없습니다.
        </div>
      </div>
    </div> <!-- tabs -->
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'second',
  name:'장비 선택하기'
})

const tabs = ref(0)


</script>

<style lang="scss" scoped>
.page_top{
  h2{
    font-size:20px;
    font-weight:600;
    margin-bottom:30px;
    strong{
      color:#0066ff;
    }
  }
}

.no-item{
  background:#f5f5f7;
  padding:15px;
  border-radius:10px;
  font-size:14px;
  color:#797979;
}

.tabs{
  .tab-head{
    display:flex;
    align-items: center;
    margin-bottom:30px;
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
      border-bottom:3px solid #0066ff;
      color:#292929;
    }
  }
}

.list{
  display:flex;
  flex-direction: column;
  gap:10px;
}


.item{
  display:flex;
  align-items: center;
  border:1px solid #e2e2e2;
  border-radius:10px;
  padding:10px;
  gap:15px;

  .state{
    span{
      display:flex;
      align-items: center;
      justify-content:center;
      width:54px;
      height:54px;
      border-radius:8px;
      font-weight:600;
      color:#fff;
    }
    span.pause{
      background:#0066ff;
    }
    span.play{
      background:#E61245;
    }
    span.error{
      background:#292929;
    }

  }
  .text{
    flex:1;
    strong,span{
      display:block;
    }
    strong{
      font-weight:600;
    }
    span{
      margin-top:5px;
      color:#797979;
      font-size:12px;
    }
  }

  span.material-icons{
    color:#c2c2c2;
  }

  dl{
    display:flex;
    flex-direction: column;
    align-items: center;
    dt{
      font-size:11px;
    }
    dd{
      margin-top:2px;
      font-weight:600;
      color:#E61245;
    }
  }
}

.item.disable{
  background:#f2f2f4;
  border:0;
}
</style>