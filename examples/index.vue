<template>
  <div>
    <div v-for="(item, index) in exampleList" :key="index">
      <example-show :name="item.name"></example-show>
    </div>
  </div>
</template>
<script>
import ExampleShow from './example/show'
export default {
  data () {
    return {
      exampleList: [{ title: 'IrrMenu', name: 'IrrMenu' }]
    }
  },
  components: {
    ExampleShow
  }
}
</script>
<style lang="scss">
/*这些元素都建议重新初始化*/
body,div,
dl,dt,dd,ul,ol,li,
tr,td,th,
h1,h2,h3,h4,h5,h6,
hr,br,img,
table,input,form,a,p,textarea {
  padding: 0;
  margin: 0;
  font-family: Arial, 'MicrosoftYaHei', '宋体';
}
ul,
ol,
li {
  list-style: none;
}
a {
  text-decoration: none;
  display: block;
}
img {
  border: 0;
  display: block;
}
.clearfloat {
  zoom: 1;
}
.clearfloat:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
</style>
