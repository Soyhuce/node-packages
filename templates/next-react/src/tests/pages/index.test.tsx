import React from 'react'
import { render } from '@testing-library/react'

import Index from '@/pages/index'

describe('<App />', () => {
  it('should contains hello world', () => {
    const { container } = render(<Index />)
    expect(container.textContent).toBe('Hello world 🤠')
  })

  it('renders the correct markup', () => {
    const { container } = render(<Index />)
    expect(container).toMatchSnapshot()
  })
})
