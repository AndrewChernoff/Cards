import { useState } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

interface Props {
  label: string
  id: string
  checked: boolean
  onCheckedChange: (value: any) => void
}

const CheckboxDemo = ({ id, label, checked, onCheckedChange }: Props) => {
  const [isChecked, setIsChecked] = useState(true)

  const checkboxBackground = isChecked ? 'white' : 'black'

  return (
    <div className={s.checkbox}>
      <div
        /*  style={{ display: 'flex', alignItems: 'center', margin: '50px', width: '24px' }} */
        className={s.wrapper}
      >
        <Checkbox.Root
          className={s.checkboxRoot}
          checked={/* isChecked */ checked}
          //onClick={() => setIsChecked(!isChecked)}
          onCheckedChange={onCheckedChange}
          style={{ backgroundColor: checkboxBackground }}
          id={id}
        >
          <Checkbox.Indicator className={s.checkboxIndicator}>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
      <p>{label}</p>
    </div>
  )
}

export default CheckboxDemo
