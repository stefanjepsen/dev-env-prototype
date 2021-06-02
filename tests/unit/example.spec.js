import {
  expect
} from 'chai'
import {
  shallowMount
} from '@vue/test-utils'

import Home from '@/views/Home.vue'




describe('Home.vue', () => {
  it('Should show correct h1, and should be correct string', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.find('h1').text()).equal('Games List From API')
  })
  })




