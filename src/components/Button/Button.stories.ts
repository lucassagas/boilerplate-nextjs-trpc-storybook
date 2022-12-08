import { Meta, StoryObj } from '@storybook/react'
import { Button, IButton } from './index'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta<IButton>

export const Default: StoryObj<IButton> = {}
