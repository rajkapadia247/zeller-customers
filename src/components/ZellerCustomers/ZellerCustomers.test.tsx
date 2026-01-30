import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import ZellerCustomers from './ZellerCustomers'
import type { ListZellerCustomersResponse } from '../../common/types'

const mockUseQuery = vi.fn()
vi.mock('graphql-hooks', () => ({
  useQuery: (query: unknown) => mockUseQuery(query),
}))

const mockRes: ListZellerCustomersResponse = {
  listZellerCustomers: {
    items: [
      { id: '1', name: 'John Smith', email: 'john@example.com', role: 'ADMIN' },
      { id: '2', name: 'Jane Doe', email: 'jane@example.com', role: 'ADMIN' },
      { id: '3', name: 'Jim Beam', email: 'jim@example.com', role: 'MANAGER' },
      { id: '4', name: 'Jill Johnson', email: 'jill@example.com', role: 'MANAGER' }
    ],
  },
}

describe('ZellerCustomers', () => {
  beforeEach(() => {
    mockUseQuery.mockClear()
  })

  it('renders the filtered users list with default role when the data is loaded', () => {
    mockUseQuery.mockReturnValue({ data: mockRes, loading: false, error: undefined })
    render(<ZellerCustomers />)
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
  })

  it('renders the page loader when the data is loading', () => {
    mockUseQuery.mockReturnValue({ data: null, loading: true, error: undefined })
    render(<ZellerCustomers />)
    expect(screen.getByTestId('page-skeleton-loader')).toBeInTheDocument()
  })
})