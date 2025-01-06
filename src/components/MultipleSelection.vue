<template>
  <div class="multiple-selection">
    <span
      class="option"
      v-for="(option, index) in modelValue.options"
      :key="index"
      :class="modelValue.selected.includes(index) ? 'selected' : ''"
      @click="updateSelected(index)"
    >
      {{ option }}
    </span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
  methods: {
    updateSelected(index) {
      const newSelected = this.modelValue

      if (newSelected.selected.includes(index)) {
        newSelected.selected = newSelected.selected.filter((item) => item != index)
      } else {
        newSelected.selected.push(index)
      }

      this.$emit('update:modelValue', newSelected)
    },
  },
}
</script>

<style scoped>
.multiple-selection {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
}
.option {
  padding: 10px;
  width: 30%;
  text-align: center;
  background-color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid rgb(218, 218, 218);
}
.selected {
  border: 1px solid black;
}
</style>
