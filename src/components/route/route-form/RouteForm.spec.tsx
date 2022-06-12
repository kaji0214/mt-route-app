import { render, act, screen, fireEvent } from '@testing-library/react'
import RouteForm from '@/src/components/route/route-form/RouteForm'
import React from 'react'
import { GoogleMap } from '@react-google-maps/api'
import { CreateRoute } from '@/pages/mountains/[mid]/routes/new'

describe('Sampleコンポーネント', () => {
  test('should first', async () => {
    const mockSubmit = jest.fn()
    await act(() => {
      render(
        <GoogleMap>
          <RouteForm
            submitText='Create Route'
            onSubmit={mockSubmit}
            initialValues={{}}
            schema={CreateRoute}
          />
        </GoogleMap>,
      )
    })

    expect(screen.getByText('Create Route')).toBeTruthy()
    await act(() => {
      fireEvent.change(screen.getByTestId('name-input'), { target: { value: 'Name' } })
      fireEvent.change(screen.getByTestId('time-input'), { target: { value: '1' } })
    })

    fireEvent.submit(screen.getByText('Create Route'))
    expect(mockSubmit).toHaveBeenCalled()
  })
})
