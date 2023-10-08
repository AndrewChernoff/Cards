import { useController, useForm } from 'react-hook-form'

import { Button } from '../button'
import CheckboxDemo from '../chekbox/checkbox'
import Input from '../input/input'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FormValues>()
  const {
    field: { value, onChange },
  } = useController({
    name: 'rememberMe',
    control,
    defaultValue: false,
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        isSearch={false}
        placeholder={'Type your email'}
        type={'text'}
        error={errors.email?.message}
        isDisabled={false}
        {...register('email', { required: 'Email Address is required', maxLength: 20 })}
        label={'email'}
      />

      <Input
        isSearch={false}
        placeholder={'Type your password'}
        type={'password'}
        error={errors.password?.message}
        isDisabled={false}
        {...register('password', { required: 'Password is required', maxLength: 20 })}
        label={'password'}
      />

      <CheckboxDemo
        onCheckedChange={onChange}
        checked={value}
        label={'Remember me'}
        id={'rememberMe'}
      />

      <Button type="submit">Submit</Button>
    </form>
  )
}
