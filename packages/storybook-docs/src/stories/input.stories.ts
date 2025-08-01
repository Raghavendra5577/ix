/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Components } from '@siemens/ix/components';
import type { ArgTypes, Meta, StoryObj } from '@storybook/web-components';
import { genericRender, makeArgTypes } from './utils/generic-render';

type Element = Components.IxInput;

const meta = {
  title: 'Example/Input',
  tags: [],
  render: (args) => genericRender('ix-input', args),
  argTypes: makeArgTypes<Partial<ArgTypes<Element>>>('ix-input', {}),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev',
    },
  },
} satisfies Meta<Element>;

export default meta;
type Story = StoryObj<Element>;

export const Required: Story = {
  args: {
    label: 'Required',
    value: '',
    required: true,
  },
};

export const MinLength: Story = {
  args: {
    label: 'MinLength',
    minLength: 3,
    maxLength: 5,
    value: '1234567',
  },
};
