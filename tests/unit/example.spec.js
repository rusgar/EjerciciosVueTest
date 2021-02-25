import { shallowMount, mount } from '@vue/test-utils'
import component from '@/components/Component'

describe('Component.vue', () => {
  it('render', () => {
    const wrapper = mount(component, {
      mocks: { $t: (msg) => msg }
    })
  })
})
