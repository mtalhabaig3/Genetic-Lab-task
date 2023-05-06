import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import LoginForm from '../src/components/LoginForm';

describe('LoginForm', () => {
  it('submits the form with the correct values', () => {
    const handleSubmit = jest.fn();
    const {getByTestId} = render(<LoginForm onSubmit={handleSubmit} />);
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const submitButton = getByTestId('submit-button');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password');
    fireEvent.press(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password',
    });
  });

  it('displays an error message when the form is submitted with invalid values', () => {
    const {getByTestId, getByText} = render(<LoginForm onSubmit={() => {}} />);
    const submitButton = getByTestId('submit-button');

    fireEvent.press(submitButton);

    expect(getByText('Email is required.')).not.toBeNull();
    expect(getByText('Password is required.')).not.toBeNull();
  });
});
