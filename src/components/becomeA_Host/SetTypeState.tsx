import React from 'react'
import BaseChild from './BaseChild'
import { BiHomeAlt } from 'react-icons/bi'

const Item = ({ title, icon }: { title: string; icon: React.ReactNode }) => {
  return (
    <button className="flex justify-center items-center flex-col border aspect-video rounded-2xl">
      <span className='text-2xl'>{icon}</span>
      <span className='font-bold'>{title}</span>
    </button>
  )
}

const SetTypeState = () => {
  return (
    <BaseChild>
      <div className="h-full mx-2">
        <p className="text-2xl">Set your home type.</p>
        <div className="grid grid-cols-3 gap-4 mt-4 md:grid-cols-8 sm:grid-cols-5">
          <Item title="Home" icon={<BiHomeAlt />} />
          <Item title="Home" icon={<BiHomeAlt />} />
          <Item title="Home" icon={<BiHomeAlt />} />
          <Item title="Home" icon={<BiHomeAlt />} />
          <Item title="Home" icon={<BiHomeAlt />} />
          <Item title="Home" icon={<BiHomeAlt />} />
          <Item title="Home" icon={<BiHomeAlt />} />
          <Item title="Home" icon={<BiHomeAlt />} />
          <Item title="Home" icon={<BiHomeAlt />} />
          <Item title="Home" icon={<BiHomeAlt />} />
          <Item title="Home" icon={<BiHomeAlt />} />
          <Item title="Home" icon={<BiHomeAlt />} />
          <Item title="Home" icon={<BiHomeAlt />} />
          <Item title="Home" icon={<BiHomeAlt />} />
          <Item title="Home" icon={<BiHomeAlt />} />
          <Item title="Home" icon={<BiHomeAlt />} />
          <Item title="Home" icon={<BiHomeAlt />} />
          <Item title="Home" icon={<BiHomeAlt />} />
          <Item title="Home" icon={<BiHomeAlt />} />
          <Item title="Home" icon={<BiHomeAlt />} />
          <Item title="Home" icon={<BiHomeAlt />} />
          <Item title="Home" icon={<BiHomeAlt />} />
          <Item title="Home" icon={<BiHomeAlt />} />
        </div>
      </div>
    </BaseChild>
  )
}

export default SetTypeState
