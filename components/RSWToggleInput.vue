<template>
  <label class="input button">
      <input class="input__control" @change="emitState" type="checkbox" >
      <span class="input__text">{{text}}</span>
  </label>
</template>
<script>
export default {
  props: ['text'],
  methods: {
      emitState(e) {
          this.$emit('input', e.target.checked)
      }
  }
}
</script>
<style lang="scss">
@import '../node_modules/ed-grid/ed-grid.scss';
.input {
    &__control {
        display: none;
        &:checked + .input__text {
            font-weight: bold;
        }
    }
}
</style>
