<template>
  <div class="modal main-center cross-center">
    <span class="modal-close" @click="$emit('close')"><i class="mi mi-close"></i></span>
    <div class="container">
      <h1>{{title}}</h1>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-modal',
  props: ['title']
}
</script>
