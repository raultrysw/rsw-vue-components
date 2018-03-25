<template>
  <ul class="controls-bar ed-menu l-horizontal inline-menu">
    <li id="minimize-window"><i class="mi mi-arrow-drop-down-circle"></i></li>
    <li id="maximize-window"><i class="mi mi-aspect-ratio"></i></li>
    <li id="close-window"><i class="mi mi-close"></i></li>
  </ul>
</template>

<style>
.controls-bar {
  display: flex !important;
}
ul > li {
  -webkit-app-region: no-drag;
}
</style>
