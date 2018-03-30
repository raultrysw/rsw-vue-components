<template>
  <form @submit.prevent="submitHandler" class="ylt-form">
    <ul v-if="thereAreErrors" class="error-list">
      <li class="error-list__item" v-for="(error, index) in errors" :key="index">{{error}}</li>
    </ul>
    <slot></slot>
    <label>
      <input type="submit" :value="submitText" />
    </label>
  </form>
</template>
<script>
export default {
  props: ['submitText', 'submitHandler', 'errors'],
  computed: {
    thereAreErrors() {
      debugger
      return this.errors.length > 0
    }
  }
}
</script>
<style lang="scss">
.error-list {
  list-style-type: none;
  border: 1px solid;
  margin: .3em;
  padding: .3em;
}
</style>
