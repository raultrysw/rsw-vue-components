<template>
  <header class="header">
      <h1 class="header__title">{{title}}</h1>
      <slot class="header__links" name="links-nav" />
  </header>
</template>

<script>
export default {
  props: ['title']
}
</script>
<style lang="scss">
@import '../node_modules/ed-grid/ed-grid.scss';

.header {
    @include mainStart;
    background: lightgrey;
    margin-bottom: 10px;
    box-shadow: 0px 1px 4px -1px grey;
    & > *:last-child {
        margin-left: auto;
    }
}
</style>
