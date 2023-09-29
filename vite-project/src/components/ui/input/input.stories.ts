import type { Meta, StoryObj } from '@storybook/react'

import Input from './input'

const meta = {
  title: 'Components/Button',
  component: Input,
  tags: ['autodocs'],
  /* argTypes: {
     isAuth: {
      control: { type: 'radio' },
    },
  }, */
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputUniversal: Story = {
  args: {
    isSearch: true,
    type: 'text',
    label: 'Input',
    placeholder: 'Input',
    error: false,
    isDisabled: true,
  },
}
