import { render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';

test('check if input for adding tasks require text', async () => {
  render(<App />);
  const AddTaskbutton = screen.getByRole('button', {
    name: /add task/i
  });
  userEvent.click(AddTaskbutton);
  await waitFor(() => {
    expect(screen.getByText(/Task is required/i)).toBeInTheDocument();
  });
});
