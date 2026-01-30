import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import UsersList from './UsersList'
import type { User } from '../../common/types'

const mockUsers: User[] = [
  { id: '1', name: 'John Smith', email: 'john@example.com', role: 'ADMIN' },
  { id: '2', name: 'Jane Doe', email: 'jane@example.com', role: 'ADMIN' },
]

describe('UsersList', () => {
  it('renders the users list', () => {
    render(<UsersList users={mockUsers} role="ADMIN" />)
    expect(screen.getByRole('heading', { name: /Admin users/i })).toBeInTheDocument()
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
  })
})