<template>
  <div class="machineItem">
    
    <div class="state">
      <span class="pause">대기</span>
    </div>
    <div class="text">
      <strong>세탁기 {{item}}번 19kg</strong>
      <span>이용이 가능합니다</span>
    </div>
    <span class="material-icons">chevron_right</span>

  </div>
</template>

<style lang="scss" scoped>
.machineItem{
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