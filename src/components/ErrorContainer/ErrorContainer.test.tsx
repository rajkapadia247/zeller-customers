import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ErrorContainer from './ErrorContainer'
import { LABELS } from '../../constants'
import userEvent from '@testing-library/user-event'

describe('ErrorContainer', () => {
  it('renders the error message', () => {
    render(<ErrorContainer handleRetry={vi.fn()} />)
    expect(screen.getByText(LABELS.ERROR_MESSAGE)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: LABELS.RETRY_BUTTON_TEXT })).toBeInTheDocument()
  })

  it('calls handleRetry when the retry button is clicked', async () => {
    const handleRetry = vi.fn()
    render(<ErrorContainer handleRetry={handleRetry} />)
    await userEvent.click(screen.getByRole('button', { name: LABELS.RETRY_BUTTON_TEXT }))
    expect(handleRetry).toHaveBeenCalled()
  })
})