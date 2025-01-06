<template>
  <div class="dual-selection">
    <div class="options">
      <span v-for="(item, index) in modelValue.options" :key="index" @click="selectOption(item)">
        {{ item }}
      </span>
    </div>
    <div class="selected-options">
      <span v-for="(item, index) in modelValue.selected" :key="index" @click="removeOption(item)">{{
        item
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
  methods: {
    selectOption(selectedItem) {
      const newSelected = this.modelValue
      newSelected.options = newSelected.options.filter((item) => item != selectedItem)
      newSelected.selected.push(selectedItem)
      this.$emit('update:modelValue', newSelected)
    },
    removeOption(selectedItem) {
      const newSelected = this.modelValue
      newSelected.selected = newSelected.selected.filter((item) => item != selectedItem)
      newSelected.options.push(selectedItem)
      this.$emit('update:modelValue', newSelected)
    },
  },
}
</script>

<style scoped>
.dual-selection {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.options,
.selected-options {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 48%;
  min-height: 272px;
  border: 1px solid black;
  border-radius: 10px;
}

span {
  display: inline-block;
  width: 100%;
  height: 30px;
  text-align: center;
  padding: 0 5px;
  border-radius: 5px;
  border: 1px solid rgb(211, 211, 211);
  cursor: pointer;
}
</style>
