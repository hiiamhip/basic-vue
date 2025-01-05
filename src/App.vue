<template>
  <div><checkbox v-model="selectedOptions" :checkbox="checkbox" /></div>
</template>

<script>
export default {
  data() {
    return {
      selectedOptions: ['php', 'java'],
      checkbox: {
        title: 'Which?',
        options: [
          { value: 'php', label: 'php' },
          { value: 'java', label: 'java' },
          { value: 'python', label: 'python' },
        ],
      },
    }
  },
}
</script>

<style scoped></style>
