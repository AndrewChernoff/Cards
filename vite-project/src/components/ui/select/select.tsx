import { forwardRef } from 'react'

import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'
import classnames from 'classnames'

import './select.scss'

const SelectDemo = () => (
  <Select.Root>
    <Select.Trigger className="SelectTrigger" aria-label="Food">
      <Select.Value placeholder="Select a fruit…" />
      <Select.Icon className="SelectIcon">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="SelectContent">
        <Select.ScrollUpButton className="SelectScrollButton">
          <ChevronUpIcon />
        </Select.ScrollUpButton>

        {/* <Select.Group>
            <Select.Label className="SelectLabel">Fruits</Select.Label>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </Select.Group>

          <Select.Separator className="SelectSeparator" />

          <Select.Group>
            <Select.Label className="SelectLabel">Vegetables</Select.Label>
            <SelectItem value="aubergine">Aubergine</SelectItem>
            <SelectItem value="broccoli">Broccoli</SelectItem>
            <SelectItem value="carrot" disabled>
              Carrot
            </SelectItem>
            <SelectItem value="courgette">Courgette</SelectItem>
            <SelectItem value="leek">Leek</SelectItem>
          </Select.Group> */}

        {/* <Select.Separator className="SelectSeparator" /> */}

        <Select.Group className="group">
          <Select.Label className="SelectLabel">Meat</Select.Label>
          <SelectItem className={'sublabel'} value="beef">
            Beef
          </SelectItem>
          <SelectItem className={'sublabel'} value="chicken">
            Chicken
          </SelectItem>
          <SelectItem className={'sublabel'} value="lamb">
            Lamb
          </SelectItem>
          <SelectItem className={'sublabel'} value="pork">
            Pork
          </SelectItem>
        </Select.Group>
        <Select.ScrollDownButton className="SelectScrollButton">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
)

const SelectItem = forwardRef(({ children, className, ...props }: any, forwardedRef) => {
  return (
    <Select.Item className={classnames('SelectItem', className)} {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  )
})

export default SelectDemo

/* import { forwardRef } from 'react'

import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'
import classnames from 'classnames'

import s from './select.module.scss'

const SelectDemo = () => (
  <Select.Root>
    <Select.Trigger className={s.SelectTrigger} aria-label="Food">
      <Select.Value className={s.SelectValue} placeholder="Select a fruit…" />
      <Select.Icon className={s.SelectIcon}>
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className={s.SelectContent}>
        <Select.ScrollUpButton className={s.SelectScrollButton}>
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className={s.SelectViewport}>
          <Select.Group>
            <SelectItem className={s.sublabel} value="apple">
              Apple
            </SelectItem>
            <SelectItem className={s.sublabel} value="banana">
              Banana
            </SelectItem>
            <SelectItem className={s.sublabel} value="blueberry">
              Blueberry
            </SelectItem>
            <SelectItem className={s.sublabel} value="grapes">
              Grapes
            </SelectItem>
            <SelectItem className={s.sublabel} value="pineapple">
              Pineapple
            </SelectItem>
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className={s.SelectScrollButton}>
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
)

const SelectItem = forwardRef(({ children, className, ...props }: any, forwardedRef) => {
  return (
    <Select.Item className={classnames(s.SelectItem, className)} {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className={s.SelectItemIndicator}>
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  )
})

export default SelectDemo
 */
