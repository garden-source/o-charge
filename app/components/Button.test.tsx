import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>テスト</Button>)
    expect(screen.getByText('テスト')).toBeInTheDocument()
  })
}) 