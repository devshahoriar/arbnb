import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import React from 'react'
import DeviceDetector from 'node-device-detector'
import DeviceHelper from 'node-device-detector/helper'
import { ChatItem, MobileNav, PeopleItem } from '@/components/chat'
import Link from 'next/link'

const index = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50  justify-center items-center backdrop-blur-md hidden md:flex">
        <Link className='underline font-bold' href="/chat/notFound">Desktop chat</Link>
      </div>
      <MobileNav />
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
      <div className="mx-3 flex flex-col gap-4">
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
}: GetServerSidePropsContext) => {
  // const detector = new DeviceDetector()
  // const userAgent = req.headers['user-agent']
  // const result = detector.detect(userAgent as string)
  // console.log(DeviceHelper.isMobile(result))

  // const res = await fetch(`https://.../data`)
  // const data = await res.json()
  // if (!data) {
  // return {
  //   redirect: {
  //     destination: '/chat/shuvo',
  //     permanent: false,
  //   },
  // }
  // }

  return {
    props: {}, // will be passed to the page component as props
  }
}

export default index
