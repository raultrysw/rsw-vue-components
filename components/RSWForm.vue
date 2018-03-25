<template>
  <form @submit.prevent="submitHandler" :name="formName" class="ylt-form">
    <slot></slot>
    <label>
      <input type="submit" :value="submitText" />
    </label>
  </form>
</template>
<script>
export default {
  props: ['submitText', 'submitHandler', 'formName']
}
</script>
