import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import RoleSelector from './RoleSelector'

describe('RoleSelector', () => {
  it('renders all the elements', () => {
    render(<RoleSelector selectedRole="ADMIN" setSelectedRole={vi.fn()} />)
    expect(screen.getByText('User Types')).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'Admin' })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'Manager' })).toBeInTheDocument()
  })

  it('checks Admin when selected role is ADMIN', () => {
    render(<RoleSelector selectedRole="ADMIN" setSelectedRole={vi.fn()} />)
    expect(screen.getByRole('radio', { name: 'Admin' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Manager' })).not.toBeChecked()
  })

  it('checks Manager when selected role is MANAGER', () => {
    render(<RoleSelector selectedRole="MANAGER" setSelectedRole={vi.fn()} />)
    expect(screen.getByRole('radio', { name: 'Admin' })).not.toBeChecked()
    expect(screen.getByRole('radio', { name: 'Manager' })).toBeChecked()
  })

  it('calls setSelectedRole with ADMIN when Admin is selected', async () => {
    const setSelectedRole = vi.fn()
    const user = userEvent.setup()
    render(<RoleSelector selectedRole="MANAGER" setSelectedRole={setSelectedRole} />)
    await user.click(screen.getByLabelText('Admin'))
    expect(setSelectedRole).toHaveBeenCalledTimes(1)
    expect(setSelectedRole).toHaveBeenCalledWith('ADMIN')
  })

  it('calls setSelectedRole with MANAGER when Manager is selected', async () => {
    const setSelectedRole = vi.fn()
    const user = userEvent.setup()
    render(<RoleSelector selectedRole="ADMIN" setSelectedRole={setSelectedRole} />)
    await user.click(screen.getByLabelText('Manager'))
    expect(setSelectedRole).toHaveBeenCalledTimes(1)
    expect(setSelectedRole).toHaveBeenCalledWith('MANAGER')
  })
})