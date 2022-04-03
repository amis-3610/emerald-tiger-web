import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('The main app', () => {

  beforeAll(() => {
    render(<App />);
  });

  it('should render the Orders', () => {
    expect(screen.getByText('Orders')).toBeInTheDocument();
  });


});
