import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Benefits from '../Benefits.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(Benefits, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
