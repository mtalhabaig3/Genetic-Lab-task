import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import UserDetails from '../src/components/UserList';

describe('UserDetails', () => {
  const mockUser = {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@gmail.com',
    phone: '555-1234',
    address: {
      street: '123 Main St',
      suite: 'Apt. 4',
      city: 'New York',
      zipcode: '12345',
      geo: {
        lat: '40.7128',
        lng: '-74.0060',
      },
    },
  };

  it('renders the user details correctly', () => {
    const {getByText} = render(<UserDetails user={mockUser} />);
    expect(getByText('Name: John Smith')).not.toBeNull();
    expect(getByText('Email: john.smith@gmail.com')).not.toBeNull();
    expect(getByText('Phone: 555-1234')).not.toBeNull();
    expect(getByText('Address: 123 Main St, Apt. 4, New York')).not.toBeNull();
  });
});
