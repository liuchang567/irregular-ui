<template>
  <aside class="irr-menu-warp">
    <p class="irr-menu-name">{{name}}</p>
    <ul role="menubar" class="irr-menu">
      <li class="irr-menu-item">
        <i></i>
        <span>11</span>
      </li>
      <li class="irr-menu-item">
        <i></i>
        <span>11</span>
      </li>
      <li class="irr-menu-item">
        <i></i>
        <span>11</span>
      </li>
    </ul>
  </aside>
</template>
<script>
export default {
  name: 'IrrMenu',
  props: {
    name: {
      typeof: String,
      default: 'xx'
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.irr-menu-warp{
  width: 260px;
  height: 100vh;
  color: #fff;
  background-image: linear-gradient(30deg , #0048bd, #44a7fd);
}
.irr-menu-warp .irr-menu-name{
  margin: 0;
  padding: 30px 0 30px 20px;
}
.irr-menu{
  padding-left: 20px;
  font-size: 14px;
}
.irr-menu-item{
  padding: 15px;
  cursor: pointer;
}
.irr-menu-item:hover {
  color: #3f5efb;
  background: #fff;
  outline: none;
  position: relative;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.irr-menu-item:hover::after {
  content: "";
  position: absolute;
  background-color: transparent;
  bottom: 100%;
  right: 0;
  height: 35px;
  width: 35px;
  border-bottom-right-radius: 18px;
  box-shadow: 0 20px 0 0 #fff;
}

.irr-menu-item:hover::before {
  content: "";
  position: absolute;
  background-color: transparent;
  bottom: -35px;
  right: 0;
  height: 35px;
  width: 35px;
  border-top-right-radius: 18px;
  box-shadow: 0 -20px 0 0 #fff;
}
</style>
