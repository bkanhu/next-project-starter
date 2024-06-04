import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Home from '../src/app/page'
 
test('Page', () => {
  render(<Home />)
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
})