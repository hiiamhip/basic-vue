<template>
  <div class="checkbox-group">
    <label v-for="option in checkbox.options" :key="option.value" class="checkbox">
      <input type="checkbox" :value="option.value" v-model="selectedValues" />
      {{ option.label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
    },
    checkbox: {
      type: Object,
      required: true,
    },
  },
  computed: {
    selectedValues: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      },
    },
  },
  mounted() {
    console.log('Received value:', this.value) //
  },
}
</script>

<style scoped>
.checkbox-group {
  display: flex;
  flex-direction: column;
}
.checkbox {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.checkbox input {
  margin-right: 8px;
}
</style>
