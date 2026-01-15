import type { Preview } from '@storybook/react';
import '../src/index.css';

const preview: Preview = {
    parameters: {
		backgrounds: {
            options: {
                light: { name: 'light', value: '#ffffff' },
                dark: { name: 'dark', value: '#000000' }
            }
        },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},

    initialGlobals: {
        backgrounds: {
            value: 'light'
        }
    }
};

export default preview;
