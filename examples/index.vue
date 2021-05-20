<template>
  <div>
    <div v-for="(item, index) in exampleList" :key="index" >
        <div>{{item.title}}</div>
        <example-show :name="item.name"></example-show>
    </div>
  </div>
</template>
<script>
import ExampleShow from './example/show'
export default {
  data () {
    return {
      exampleList: [{ title: 'test', name: 'CldTest' }]
    }
  },
  components: {
    ExampleShow
  }
}
</script>
<style lang="scss">
body, html {
  margin: 0px;
  padding: 0;
}
</style>
