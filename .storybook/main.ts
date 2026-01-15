import { StorybookConfig } from 'storybook/internal/types';

const config: StorybookConfig = {
	stories: [
		'../src/components/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)',
	],
	addons: ['@storybook/addon-docs'],
	framework: {
		name: '@storybook/react-webpack5', // Use the correct, modern framework package name
		options: {

		},
	},
	typescript: {
		check: true,
	},
};

export default config;
