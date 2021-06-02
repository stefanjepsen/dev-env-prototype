import {
  expect
} from 'chai'
import {
  shallowMount
} from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Home from '@/views/Home.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: {
        msg
      }
    })
    expect(wrapper.text()).to.include(msg)
  })
})


describe('Home.vue', () => {
  it('Should show correct h1, and should be correct string', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.find('h1').text()).equal('This is Home1')
  })
})