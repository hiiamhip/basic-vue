<template>
  <main>
    <InputComponent v-model="inputComponentValue">
      <span class="input-value">{{ inputComponentValue }}</span>
    </InputComponent>

    <Checkbox v-model="checkbox"></Checkbox>

    <AccordionMenu v-model="menus"></AccordionMenu>

    <MultipleSelection v-model="multipleSelection">
      <div class="show-selected">
        <span><strong>Selected:</strong></span>
        <span v-for="option in multipleSelection.selected" :key="option">
          {{ multipleSelection.options[option] }},
        </span>
      </div>
    </MultipleSelection>

    <DualSelection v-model="dualSelection"></DualSelection>
  </main>
</template>

<script>
import Checkbox from './components/Checkbox.vue'
import AccordionMenu from './components/AccordionMenu.vue'
import DualSelection from './components/DualSelection.vue'
import InputComponent from './components/InputComponent.vue'
import MultipleSelection from './components/MultipleSelection.vue'

export default {
  components: {
    Checkbox,
    AccordionMenu,
    DualSelection,
    InputComponent,
    MultipleSelection,
  },
  data() {
    return {
      checkbox: true,
      inputComponentValue: '',
      menus: [
        { category: 'home', items: ['home-1', 'home-2', 'home-3'] },
        { category: 'events', items: ['events-1', 'events-2', 'events-3'] },
        { category: 'gallery', items: ['gallery-1', 'gallery-2', 'gallery-3'] },
        { category: 'services', items: ['services-1', 'services-2', 'services-3'] },
        { category: 'portfolio', items: ['portfolio-1', 'portfolio-2', 'portfolio-3'] },
      ],
      multipleSelection: {
        options: ['php', 'java', 'python', 'ruby', 'golang', 'swift'],
        selected: [],
      },
      dualSelection: {
        options: ['php', 'java', 'python', 'ruby', 'golang', 'swift'],
        selected: [],
      },
    }
  },
}
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 30px;
  margin: 60px auto 0;
  padding: 80px;
  width: 40vw;
  min-height: 85vh;
  background-color: white;
  border-radius: 30px;
  box-shadow: 7px 7px 51px -11px rgba(0, 0, 0, 0.46);
}

.input-value {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  height: 34px;
  padding: 10px;
  background-color: #ffc4c9;
  border-radius: 10px;
}

.show-selected {
  display: flex;
  align-items: center;
  gap: 10px;
}

.show-selected span:first-child {
  margin-right: 20px;
  color: #03a678;
}
</style>
