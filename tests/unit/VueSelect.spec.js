import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import VueSelect from '@/components/VueSelect.vue'

/* eslint-disable no-unused-expressions */
describe('VueSelect.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(VueSelect, {
      propsData: {
        items: [
          'Option 1',
          'Option 2',
          'Option 3'
        ],
        value: 'Option 2'
      }
    })
  })

  it('renders the basic structure correctly', () => {
    expect(wrapper.find('.select__dropdown')).to.be.not.null
    expect(wrapper.findAll('.select__option').length).to.be.equal(3)
  })
  it('opens the dropdown when clicked', () => {
    wrapper.find('.select__dropdown').trigger('click')
    expect(wrapper.contains('.select__dropdown--open')).to.be.true
  })
  it('sets the value of the selected option', () => {
    wrapper.find('.select__option').trigger('click')
    expect(wrapper.vm.mutableValue).to.be.equal('Option 1')
  })
  it('emits input event when an option is selected', () => {
    wrapper.find('.select__option').trigger('click')
    expect(wrapper.emitted().input[0][0]).to.be.equal('Option 1')
  })
  it('emits update event when an option is selected', () => {
    wrapper.find('.select__option').trigger('click')
    expect(wrapper.emitted()['update:value'][0][0]).to.be.equal('Option 1')
  })
  it('selects the correct option when value property is set', () => {
    expect(wrapper.vm.mutableValue).to.be.equal('Option 2')
  })
  it('highlights the option when using keyboard navigation', () => {
    wrapper.find('.select__option').trigger('click')
    wrapper.find('.select__option').trigger('down')
    expect(wrapper.find('.select__optionlist--hover')).to.be.not.null
    expect(wrapper.findAll('.select__optionlist--hover').length).to.be.equal(1)
  })
})
