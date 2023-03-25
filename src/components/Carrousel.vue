<template>
  <div class="carrousel--container w-full overflow-auto">
    <div class="carrousel--slider snap-x snap-mandatory flex gap-1">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(["list"]);
</script>

<style scoped></style>
