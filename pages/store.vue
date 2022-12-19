<template>
  <div class="contents">
    <div class="page_top">
      <h2>이용하실 매장을 선택해주세요</h2>
    </div>

    <div class="list">
      <div class="store_item active">
        <div class="info">
          <strong>워시프렌즈 구남점</strong>
          <span>부산시 북구 구남언덕로 15</span>
        </div>
        <span class="material-icons">chevron_right</span>
      </div>

      <div class="store_item">
        <div class="info">
          <strong>워시프렌즈 금정점</strong>
          <span>부산시 북구 구남언덕로 15</span>
        </div>
        <span class="material-icons">chevron_right</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'second',
  name:'매장선택'
})
</script>

<style lang="scss" scoped>
.list{
  display:flex;
  flex-direction: column;
  gap:10px;
}

.store_item{
  display:flex;
  align-items: center;
  justify-content: space-between;
  border-radius:10px;
  border:1px solid #d2d2d2;
  padding:15px;
  .info{
    margin-right:15px;
    .state{
      font-size:12px;
      color:#0066ff;
      margin-bottom:5px;
    }
    strong,span{
      display:block;
    }
    strong{
      font-size:16px;
      font-weight:600;
    }
    span{
      color:#797979;
      margin-top:5px;
      font-size:14px;
    }
  }


  span.material-icons{
    color:#d2d2d2;
  }
}

.store_item.active{
  background:#f5f5f7;
  border:0;

  .info::before{
    display:block;
    content:'선택됨';
    font-size:12px;
    color:#0066ff;
    margin-bottom:3px;
  }
}
</style>