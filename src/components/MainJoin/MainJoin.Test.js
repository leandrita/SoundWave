import { render, screen } from '@testing-library/react';
import MainJoin from '../components/MainJoin';

beforeEach(() => {
    render(<MainJoin />);
})

test('should renders Join the fun title', () => {
    const title = screen.getByText(/join the fun/i);
    expect(title).toBeInTheDocument();
});

test('should renders all div elements', () => {
    const div = screen.getAllByRole(/'div'/i);
    expect(div).toBeInTheDocument();
});

test('should renders the section element', () => {
    const section = screen.getByRole(/'section'/i);
    expect(section).toBeInTheDocument();
});