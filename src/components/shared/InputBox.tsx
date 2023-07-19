import { title } from 'process'
import { ComponentProps } from 'react'
import { JsxElement } from 'typescript'

interface InputBoxProps extends ComponentProps<'input'> {
  title: string
  placeholder?: string
  type?: string
  className?: string
}

const InputBox = ({ placeholder, title, type, className,...rest }: InputBoxProps) => {
  return (
    <div className="w-[260px]">
      <p>{title}</p>
      <input
        className={`w-full border border-black px-3 py-2 outline-none mt-1 ${className}}`}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  )
}

export default InputBox
