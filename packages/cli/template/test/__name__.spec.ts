import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { B<%= displayName %> } from '../index'

describe('<%= displayName %>', () => {
  test('class', () => {
    const wrapper = mount(B<%= displayName %>)
    expect(wrapper.classes()).toContain('f-<%= name %>')
  })
})
