import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { withTranslation } from 'react-i18next';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('Test sidebar', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('sidebar toggle', () => {
        renderWithTranslation(<Sidebar />);
        const buttonToggle = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(buttonToggle);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
