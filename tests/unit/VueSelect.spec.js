import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import VueSelect from '@/components/VueSelect.vue'
/* eslint-disable no-unused-expressions */
describe('VueSelect.vue', () => {
  const wrapper = shallowMount(VueSelect, {
    propsData: {
      items: [
        'Option 1',
        'Option 2',
        'Option 3'
      ]
    }
  })

  it('renders the basic structure correctly', () => {
    expect(wrapper.find('.select__dropdown')).to.be.not.null
    expect(wrapper.findAll('.select__option').length).to.be.equal(3)
  })
  it('closes the dropdown when clicked', () => {
    wrapper.find('.select__dropdown').trigger('click')
    expect(wrapper.contains('.select__dropdown--open')).to.be.false
  })
  it('sets the value of the selected option', () => {
    wrapper.find('.select__option').trigger('click')
    expect(wrapper.vm.value).to.be.equal('Option 1')
  })
})
