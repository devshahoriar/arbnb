/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

const ItemNotifications = ({
  desc,
  img,
  title,
}: {
  img: string
  title: string
  desc: string
}) => {
  return (
    <div className="flex gap-2 items-center">
      <img
        className="object-cover h-14 w-14 rounded-sm"
        src={img}
        alt="notification icon"
      />
      <div className="">
        <p className="font-semibold">{title}</p>
        <p className="line-clamp-1 text-sm">{desc}</p>
      </div>
      <button>
        <AiFillCloseCircle/>
      </button>
    </div>
  )
}

const notification = () => {
  return (
    <main>
      <section className="container mb-20">
        <div className="mx-2 md:mx-0 flex justify-center mt-[8vh]">
          <div className="md:max-w-2xl w-full ">
            <h1 className="text-[clamp(25px,4vw,40px)] font-semibold">Notifications</h1>
            <div className='flex flex-col gap-5 mt-10'>
              <ItemNotifications
                desc=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nulla iure fugiat adipisci, autem nisi optio facere minus, totam odit dolores. Aliquam non ipsam laboriosam excepturi ratione ipsa perferendis eligendi esse. Est fuga, nihil debitis dignissimos cumque possimus quia. Nam quibusdam animi "
                img="https://picsum.photos/500/300?random=2"
                title="This is notification title"
              />
              <ItemNotifications
                desc=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nulla iure fugiat adipisci, autem nisi optio facere minus, totam odit dolores. Aliquam non ipsam laboriosam excepturi ratione ipsa perferendis eligendi esse. Est fuga, nihil debitis dignissimos cumque possimus quia. Nam quibusdam animi "
                img="https://picsum.photos/500/300?random=2"
                title="This is notification title"
              />
              <ItemNotifications
                desc=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nulla iure fugiat adipisci, autem nisi optio facere minus, totam odit dolores. Aliquam non ipsam laboriosam excepturi ratione ipsa perferendis eligendi esse. Est fuga, nihil debitis dignissimos cumque possimus quia. Nam quibusdam animi "
                img="https://picsum.photos/500/300?random=2"
                title="This is notification title"
              />
              <ItemNotifications
                desc=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nulla iure fugiat adipisci, autem nisi optio facere minus, totam odit dolores. Aliquam non ipsam laboriosam excepturi ratione ipsa perferendis eligendi esse. Est fuga, nihil debitis dignissimos cumque possimus quia. Nam quibusdam animi "
                img="https://picsum.photos/500/300?random=2"
                title="This is notification title"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default notification
