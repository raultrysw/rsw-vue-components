<template>
  <label class="rsw-field">
    <span>{{text}}</span>
    <input @change="(e) => $emit('input', e.target.value)" :name="name" :type="type" :placeholder="description" />
  </label>
</template>
<script>
export default {
  name: 'rsw-field-input',
  props: ['text', 'description', 'type', 'name']
}
</script>
<style>
.rsw-field {
  display: block;
}
</style>
