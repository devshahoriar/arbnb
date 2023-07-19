import { MouseEventHandler, SyntheticEvent } from 'react'

const Btn = ({
  className,
  onclick,
  title,
  type,
}: {
  className?: string
  title: string
  type?: 'button' | 'submit' | 'reset'
  onclick?: any
}) => {
  return (
    <div className={`${className} w-[260px]`}>
      <button onClick={onclick} type={type} className='text-center w-full bg-black text-white py-2'>
        {title}
      </button>
    </div>
  )
}

export default Btn
