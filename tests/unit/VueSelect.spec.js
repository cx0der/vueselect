import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import VueSelect from '@/components/VueSelect.vue'
/* eslint-disable no-unused-expressions */
describe('VueSelect.vue', () => {
  const wrapper = shallowMount(VueSelect)

  it('renders the basic structure correctly', () => {
    expect(wrapper.find('.select__dropdown')).to.be.not.null
  })
})
