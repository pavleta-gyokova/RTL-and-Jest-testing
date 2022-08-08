import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  // expect the backgound color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
  // click button
  fireEvent.click(colorButton);
  // expect the backgound color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  //expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);
  // check that the button starts enabled
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toBeEnabled();
  // check that the checkbox starts unchecked
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});
  expect(checkbox).not.toBeChecked();
});
 
test('Checkbox enables and disables a button', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  const checkbox = screen.getByRole('checkbox',{ name: 'Disable button'});
  // click checkbox
  fireEvent.click(checkbox);
  // expect the checkbox to the checked
  expect(checkbox).toBeChecked();
  // expect the button to be disabled
  expect(colorButton).toBeDisabled();
  // click checkbox second time
  fireEvent.click(checkbox);
  // expect button to be enabled again
  expect(colorButton).toBeEnabled();
  expect(checkbox).not.toBeChecked();
});
