import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import Home from './Home.vue'

test('Home renders correctly', () => {
  const pinia = createPinia()

  const wrapper = mount(Home, {
    global: {
      plugins: [pinia]
    }
  })

  expect(wrapper.exists()).toBe(true)
})
