import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { componentRender } from 'shared/config/test/componentRender/componentRender';

describe('Sidebar', () => {
    test('Test sidebar', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('sidebar toggle', () => {
        componentRender(<Sidebar />);
        const buttonToggle = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(buttonToggle);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
