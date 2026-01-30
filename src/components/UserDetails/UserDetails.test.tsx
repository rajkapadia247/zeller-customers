import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { UserDetails } from './UserDetails'
import type { User } from '../../common/types'

const mockUser: User = {
  id: '1',
  name: 'John Smith',
  email: 'john@example.com',
  role: 'ADMIN',
}

describe('UserDetails', () => {
  it('renders the user details', () => {
    render(<UserDetails user={mockUser} />)
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('Admin')).toBeInTheDocument()
    expect(screen.getByTestId('user-initial')).toHaveTextContent('J')
  })
})