<template>
  <el-drawer
    v-model="show"
    direction="btt"
    title="장치선택"
    custom-class="eqSelection"
  >
    <div class="cont">
      <div class="tabs">
        <el-button text 
          v-for="(item, index) in ['세탁기','건조기','기타장비']" 
          :key="item" :class="{active:tabs === index}"
          @click="tabs = index"
        >
          {{item}}
        </el-button>
      </div>

      <div class="list" v-show="tabs === 0">
        <MachineItem v-for="item in 5" :key="item" @click="show = false" />
      </div>
    </div>
  </el-drawer>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue: boolean
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', state:boolean): void
}>()

const show = computed({
  get(){
    return props.modelValue;
  },
  set(change: boolean) {
    emits('update:modelValue', change)
  }
})

const tabs = ref(0)

</script>

<style lang="scss" scoped>

.tabs{
  display:flex;
  background:#e2e2e2;
  border-radius:20px;
  overflow:hidden;
  margin-bottom:30px;
  .el-button{
    flex:1;
    margin:0;
    height:40px;
    border-radius:20px;
  }
  .el-button.active{
    flex:1.5;
    background:#0066ff;
    color:#fff;
  }
}

.list{
  display:flex;
  flex-direction: column;
  gap:10px;
}
</style>