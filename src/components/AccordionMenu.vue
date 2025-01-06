<template>
  <div class="accordion-menu">
    <ul class="menu-list">
      <template v-for="(menu, index) in modelValue" :key="index">
        <li
          class="menu-category"
          @click="currentOpen = currentOpen === index ? null : index"
          :class="currentOpen == index ? 'category-selected' : ''"
        >
          {{ menu.category }}
        </li>
        <ul class="sub-menu-list" v-show="currentOpen == index">
          <li class="item" v-for="(item, idx) in menu.items" :key="idx">
            <a href="#!" class="item-link">{{ item }}</a>
          </li>
        </ul>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentOpen: null,
    }
  },
}
</script>

<style scoped>
.accordion-menu {
  color: white;
}
.menu-list {
  box-shadow: 7px 7px 51px -11px rgba(0, 0, 0, 0.55);
}
.menu-category {
  width: 200px;
  padding: 14px;
  background-color: #03a678;
  cursor: pointer;
}
.category-selected {
  background-color: #049372;
}
.menu-category:not(:last-child) {
  border-bottom: 1px solid #078561;
}
.sub-menu-list {
  background-color: #383838;
}
.sub-menu-list .item-link {
  display: inline-block;
  width: 100%;
  padding: 12px;
  padding-left: 30px;
}
.sub-menu-list .item-link:hover {
  border-left: 6px solid #078561;
}
</style>
