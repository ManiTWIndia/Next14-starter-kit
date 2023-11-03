import '@testing-library/jest-dom';
import {fireEvent, render, screen} from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
    it('renders a button', () => {
        render(<Button />);
        expect(screen.getByTestId('next-button')).toBeInTheDocument();
    });

    it('should trigger onClick on click of the button', () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick} />);
        fireEvent.click(screen.getByTestId('next-button'));
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
