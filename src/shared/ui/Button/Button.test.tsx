import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';
import { ThemeButton } from './Button';

describe('Button', () => {
    test('Button with TEST', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('Button with class clear', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
