<template>
  <div class="input-component">
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <button>Find</button>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
}
</script>

<style scoped>
.input-component {
  display: flex;
  align-items: center;
}
button {
  margin-left: 10px;
  margin-right: 30px;
}
</style>
