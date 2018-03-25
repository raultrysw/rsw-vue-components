<template>
  <ul class="links_nav">
      <li class="links_nav__link" v-for="(link, index) in links" :key="index" ><a :href="link">{{index}}</a></li>
  </ul>
</template>
<script>
export default {
  props: ['links']
}
</script>
<style lang="scss">
@import '../node_modules/ed-grid/ed-grid.scss';
.links_nav {
    @include edMenu(l, navBar);
    width: initial;
}
</style>
