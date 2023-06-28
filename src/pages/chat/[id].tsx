/* eslint-disable @next/next/no-img-element */
import { MobileNav, PeopleItem } from '@/components/chat'
import MobuleNav from '@/components/propaty/MobuleNav'
import Nav from '@/components/shared/Nav'
import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiDotsVerticalRounded, BiLeftArrowAlt } from 'react-icons/bi'



const ItemChat = ({
  message,
  side,
  user,
}: {
  message?: string
  side?: string
  user?: object
}) => {
  return <h1>Shuvo</h1>
}

const Chat = () => {
  const router = useRouter()
  // console.log(router.query);

  return (
    <div className="h-screen">
      <div className="hidden md:block">
        <Nav />
      </div>
      <MobileNav />

      {/* mobile navbar */}
      <div className="h-full">
        <div className="overflow-auto p-3 scrollbar-none">
          <div className="inline-flex gap-3">
            <PeopleItem />
            <PeopleItem />
            <PeopleItem />
            <PeopleItem />
            <PeopleItem />
            <PeopleItem />
            <PeopleItem />
          </div>
        </div>
        <div>
          <div className="px-2 flex items-center gap-2">
            <img
              src={`https://picsum.photos/400?productivity,city,${Math.random()}`}
              alt=""
              className="h-12 w-12 object-cover rounded-full"
            />
            <h1 className="font-bold">Shuvo Ahmed</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
