import { render, screen } from '@testing-library/react';
import Form from '../components/Form';

beforeEach(() => {
    render(<Form />);
})

test('should renders a form element', () => {
    const inputElement = screen.getByLabelText(/name/i);
    expect(inputElement).toBeInTheDocument();
});

test('should renders another form element', () => {
    const inputElement = screen.getByLabelText(/email/i);
    expect(inputElement).toBeInTheDocument();
});

test('should renders one last form element', () => {
    const inputElement = screen.getByLabelText(/password/i);
    expect(inputElement).toBeInTheDocument();
});

test('should renders a button element', () => {
    const JoinNowbtn = screen.getByRole('button', { name: /Join Now/i });
    expect(JoinNowbtn).toBeInTheDocument();
});