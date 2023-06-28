/* eslint-disable @next/next/no-img-element */
import MobuleNav from '@/components/propaty/MobuleNav'
import Nav from '@/components/shared/Nav'
import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiDotsVerticalRounded, BiLeftArrowAlt } from 'react-icons/bi'

export const PeopleItem = ({
  name,
  img,
  id,
}: {
  name?: string
  img?: string
  id?: string
}) => {
  const router = useRouter()
  return (
    <button
      onClick={() => router.push(`/chat/${'sss'}`)}
      className="flex flex-col justify-center"
    >
      <div className="avatar">
        <div className="w-12 h-12 rounded-full">
          <img
            className="object-cover rounded-full aspect-square"
            alt="u"
            src={`https://picsum.photos/400?productivity,city,${Math.random()}`}
          />
        </div>
      </div>
      <h1>Shuvo</h1>
    </button>
  )
}

export const MobileNav = () => {
  const router = useRouter()
  return (
    <>
      <div className="h-12 top-0 left-0 border-b fixed w-full flex justify-between items-center px-3 md:hidden backdrop-blur-md">
        <button onClick={() => router.push('/')} className=" flex items-center">
          <BiLeftArrowAlt className="mt-1" />
          Back
        </button>
        <div className="flex gap-2 items-center">
          <button>
            <AiOutlineSearch />
          </button>
          <button>
            <BiDotsVerticalRounded />
          </button>
        </div>
      </div>
      <div className="h-12 w-full"></div>
    </>
  )
}

export const ChatItem = () => {
  return (
    <div className='flex gap-2 items-center'>
      <img
        className="object-cover h-12 w-12 rounded-full aspect-square"
        alt="u"
        src={`https://picsum.photos/400?productivity,city,${Math.random()}`}
      />
      <div>
        <h1 className='font-semibold line-clamp-1'>User Name</h1>
        <p className='line-clamp-1 opacity-60'>This is massege Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti suscipit fugit eum nam voluptatibus expedita obcaecati hic dolorem adipisci sequi.</p>
      </div>
    </div>
  )
}
