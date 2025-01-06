<template>
  <div class="checkbox">
    <span class="checkbox-content">Checkbox</span>
    <span class="check-square" @click="$emit('update:modelValue', !modelValue)">
      <span class="checked" v-show="modelValue">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#4ed164">
          <path
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
      </span>
      <span class="unchecked" v-show="!modelValue">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#4ed164">
          <path
            d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
          />
        </svg>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
}
</script>

<style scoped>
.checkbox {
  display: inline-flex;
  align-items: center;
  color: black;
}
.checkbox-content {
  user-select: none;
}
.check-square {
  margin-left: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;
  background-color: rgb(243, 237, 237);
  border-radius: 5px;

  cursor: pointer;
}
.checked {
  display: flex;
  align-items: center;
  width: 70%;
  height: 70%;
}

.unchecked {
  display: flex;
  align-items: center;
  height: 50%;
  width: 50%;
}
</style>
