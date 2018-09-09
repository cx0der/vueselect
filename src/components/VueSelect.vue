<template>
  <div
    :class="['select__dropdown', isOpen ? 'select__dropdown--open' : 'select__dropdown--close']"
    @click="toggle"
    tabindex="0">
    <span class="select__value">{{ value }}</span>
    <ul
      :class="['select__optionlist', isOpen ? '' : 'select__optionlist--close']">
      <li
        v-for="(opt, idx) in items"
        :key="idx"
        class="select__option"
        @click="select(idx)">{{ opt }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VueSelect',
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      isOpen: true,
      value: ''
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    },
    select (idx) {
      this.value = this.items[idx]
    }
  }
}
</script>

<style lang="scss" scoped>
$chevron-size: 5px;

.select__dropdown {
  border: 1px solid #000;
  border-radius: .4em .4em 0 0;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-family: Verdana, Arial, sans-serif;
  font-size: 1rem;
  padding: 0;
  position: relative;
  width: 100%;
  &:active, &:focus {
    outline: none;
  }
  &::after {
    border-color: #000;
    border-style: solid;
    border-width: 0 3px 3px 0;
    content: '';
    height: $chevron-size;
    position: absolute;
    right: 10px;
    top: 35%;
    width: $chevron-size;
  }
}
.select__dropdown--open {
  &::after {
    transform: rotate(45deg);
  }
}
.select__dropdown--close {
  &::after {
    transform: rotate(225deg);
  }
}
.select__value {
  display: inline-block;
  margin: 0;
  overflow: hidden;
  padding: 8px 16px;
  text-align: left;
  text-overflow: ellipsis;
  user-select: none;
  vertical-align: middle;
  width: 100%;
  white-space: nowrap;
}
.select__optionlist {
  border: 1px solid #000;
  border-radius: 0 0 .4em .4em;
  box-sizing : border-box;
  left: 0;
  list-style: none;
  margin: 0;
  max-height: 10em;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0;
  position: absolute;
  text-align: left;
  top: 100%;
  z-index: 2;
}
.select__optionlist--close {
  max-height: 0;
  visibility: hidden;
}
.select__option {
  padding-bottom: 4px;
  padding-left: 16px;
  padding-top: 4px;
  user-select: none;
  &:hover {
    background: #000;
    color: #fff;
  }
}
</style>
