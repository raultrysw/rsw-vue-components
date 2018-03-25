<template>
  <label class="ylt-field">
    <span>{{text}}</span>
    <select name="field" id="" v-if="list">
      <option v-for="(item, index) in list" :key="index" :value="index">{{item}}</option>
    </select>
    <input v-else :name="fieldName" @change="$emit('input')" type="text" :placeholder="description" />
  </label>
</template>
<script>
export default {
  name: 'rsw-field-input',
  props: ['text', 'list', 'description', 'fieldName']
}
</script>
