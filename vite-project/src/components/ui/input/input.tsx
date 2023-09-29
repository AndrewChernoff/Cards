import { ChangeEvent, useState } from 'react'

import eye from '../../../common/imgs/eye.png'
import search from '../../../common/imgs/search.png'

import s from './input.module.scss'

interface Props {
  isSearch: boolean
  label: string
  placeholder: string
  type: 'password' | 'text' | 'email'
  error: boolean
  isDisabled: boolean
}

function Input(props: Props) {
  const { isSearch, label, isDisabled, error, placeholder, type } = props

  const [title, setTitle] = useState('')
  const [passwordShown, setPasswordShown] = useState(false)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }

  // eslint-disable-next-line no-nested-ternary
  const inputType = type === 'password' ? (passwordShown ? 'text' : 'password') : type
  const inputClassname = isSearch ? `${s.input__normal} ${s.input__search}` : s.input__normal
  const errorInputClassname = `${s.input__error} ${s.input__search}`

  return (
    <div className={s.inputBlock}>
      {label && !error && <label htmlFor="input-field">{label}</label>}

      <div className={s.input}>
        {isSearch && <div className={s.input__search_img}></div>}

        <input
          disabled={isDisabled}
          type={inputType}
          value={title}
          className={error ? errorInputClassname : inputClassname}
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
        {type === 'password' && (
          <button className={s.showPassword} onClick={togglePassword}>
            <img src={eye} />
          </button>
        )}

        {isSearch && title.length > 0 && (
          <button className={s.clearBtn} onClick={() => setTitle('')}>
            x
          </button>
        )}
      </div>
      {error && <p>Error!</p>}
    </div>
  )
}

export default Input
