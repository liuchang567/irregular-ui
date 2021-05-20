<template>
  <div class="red">{{ test }}</div>
</template>
<script>
export default {
  name: 'CIdTest',
  data () {
    return {
      test: 'JS测试组件'
    }
  }
}
</script>
<style lang="scss" scoped>
.red {
  color: red;
}
</style>
