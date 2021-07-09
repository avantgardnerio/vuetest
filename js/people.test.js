import { mount } from '@vue/test-utils'

import People from './people.js'

describe('People component', () => {
  it('renders people', () => {
    const wrapper = mount(People)
    console.log(wrapper.html())
  })
})
