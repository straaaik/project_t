import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'app';
import 'app/styles/index.scss';

export const StyleDecorator = (theme: Theme) => (StoryComponent: Story) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
