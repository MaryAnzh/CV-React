import type { Meta, StoryObj } from '@storybook/react/dist';

import { Typography } from '.';
import { TEXT_VIEW_STYLES } from './constants';
import type { TypographyProps } from './types';

const meta: Meta<typeof Typography> = {
	component: Typography,
	title: 'Typography',
	args: {
		children: 'test text',
	},
	argTypes: {
		textView: {
			options: Object.keys(TEXT_VIEW_STYLES),
			control: 'select',
		},
		children: {
			control: 'text',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
	render: ({ children, ...args }: TypographyProps) => <Typography {...args}>{children}</Typography>,
};
