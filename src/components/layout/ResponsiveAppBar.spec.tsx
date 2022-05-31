import React from 'react';

import { act, fireEvent, render } from '@testing-library/react';
import ResponsiveAppBar from './ResponsiveAppBar';
import { useSession } from 'next-auth/react';

jest.mock('next-auth/react', () => {
  return {
    useSession: jest.fn(),
  };
});

afterAll(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});
describe('useSession', () => {
  it('when login', () => {
    // @ts-ignore
    useSession.mockImplementation(() => ({
      data: 'has-session',
    }));

    const { getByTestId } = render(<ResponsiveAppBar />);
    expect(getByTestId('logout')).toBeInTheDocument();
  });
  it('when logout', () => {
    // @ts-ignore
    useSession.mockImplementation(() => ({
      data: undefined,
    }));

    const { getByTestId } = render(<ResponsiveAppBar />);
    expect(getByTestId('login')).toBeInTheDocument();
  });
});
describe('handleOpenNavMenu', () => {
  it('when login', () => {
    const { getByTestId } = render(<ResponsiveAppBar />);
    expect(getByTestId('menu-item')).toBeInTheDocument();
  });
});
describe('UserMenu', () => {
  it('default', () => {
    // @ts-ignore
    useSession.mockImplementation(() => ({
      data: 'has-session',
    }));
    const { getByTestId } = render(<ResponsiveAppBar />);
    expect(getByTestId('logout')).not.toBeVisible();
  });
  it('when click menu', async () => {
    // @ts-ignore
    useSession.mockImplementation(() => ({
      data: 'has-session',
    }));
    const { getByTestId } = render(<ResponsiveAppBar />);
    const button = getByTestId('open-user-menu-button');
    await act(async () => {
      fireEvent.click(button);
    });
    expect(getByTestId('logout')).toBeVisible();
  });
});
