/// <reference types="jest" />
import { mount } from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Hello Jest!' }
    });
    expect(wrapper.text()).toContain('Hello Jest!');
  });
});