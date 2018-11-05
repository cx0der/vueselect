<template>
  <div
    :aria-expanded="[isOpen ? 'true' : 'false']"
    :aria-owns="'lbox_' + _uid"
    :class="['select__dropdown', isOpen ? 'select__dropdown--open' : 'select__dropdown--close']"
    @blur="handleBlur"
    @click="toggle"
    @keyup.space="toggle"
    @keyup.up="moveUp"
    @keyup.down="moveDown"
    @keyup.enter="selectFromKeyboard"
    aria-autocomplete="none"
    role="combobox"
    tabindex="0">
    <span
      class="select__value">{{ mutableValue }}</span>
    <ul
      :id="'lbox_' + _uid"
      :class="['select__optionlist', isOpen ? '' : 'select__optionlist--close']"
      role="listbox">
      <li
        v-for="(opt, idx) in items"
        :aria-selected="[isItemSelected(idx) ? 'true' : 'false']"
        :class="['select__option', isItemSelected(idx) ? 'select__option--selected': '',
          hoverIndex === idx ? 'select__optionlist--hover': '']"
        :key="idx"
        role="option"
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
    },
    value: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      isOpen: false,
      mutableValue: null,
      selectedIdx: -1,
      hoverIndex: -1
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
      this.hoverIndex = this.selectedIdx
    },
    select (idx) {
      this.mutableValue = this.items[idx]
      this.selectedIdx = idx
      this.$emit('input', this.mutableValue)
      this.$emit('update:value', this.mutableValue)
    },
    isItemSelected (idx) {
      return this.selectedIdx === idx
    },
    moveUp () {
      this.hoverIndex = this.hoverIndex === 0 ? (this.items.length - 1) : (this.hoverIndex - 1)
    },
    moveDown () {
      this.hoverIndex = ((this.hoverIndex + 1) % this.items.length)
    },
    selectFromKeyboard () {
      this.select(this.hoverIndex)
      this.toggle()
    },
    handleBlur () {
      if (this.isOpen) {
        this.toggle()
      }
    }
  },
  watch: {
    value (val) {
      // when the parent changes the value, update the internal state
      this.mutableValue = val
      this.selectedIdx = this.items.indexOf(val)
    }
  },
  created () {
    // initialize the mutable value to what is sent from the parent
    this.mutableValue = this.value
    this.selectedIdx = this.items.indexOf(this.value)
  }
}
</script>

<style lang="scss" scoped>
$background-color: #fff;
$border-color: #101010;
$border-inactive-color: #606060;
$border-radius: 5px;
$item-hover-color: #f5f5f5;
$item-selected-color: rgba(0, 0, 0, .25);

*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.select__dropdown {
  font-size: 16px;
  outline: none;
  position: relative;
  text-align: left;
}
.select__dropdown--close {
  &::after {
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid $border-color;
    content: '';
    height: 0;
    position: absolute;
    right: 8px;
    top: 20px;
    width: 0;
  }
}
.select__dropdown--open {
  &::after {
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid $border-color;
    content: '';
    height: 0;
    position: absolute;
    right: 8px;
    top: 20px;
    width: 0;
  }
}
.select__value {
  border: 1px solid $border-inactive-color;
  border-radius: $border-radius;
  display: block;
  height: 48px;
  outline: none;
  padding: 16px;
  &:focus {
    border-color: $border-color;
  }
}
.select__optionlist {
  background-color: $background-color;
  border: 1px solid $border-color;
  border-radius: 0 0 $border-radius $border-radius;
  list-style: none;
  margin: 0;
  max-height: 150px;
  padding: 0;
  padding-bottom: 8px;
  padding-top: 8px;
  position: relative;
  top: -3px;
  z-index: 2000;
}
.select__optionlist--close {
  visibility: hidden;
}
.select__option {
  height: 32px;
  line-height: 2;
  padding: 0 16px;
  text-align: left;
  vertical-align: middle;
  // &:hover {
  //   background-color: $item-hover-color;
  // }
}
.select__optionlist--hover, .select__option:hover {
  background-color: $item-hover-color;
}
.select__option--selected {
  background-color: $item-selected-color;
  &:hover {
    background-color: $item-selected-color;
  }
}
</style>
