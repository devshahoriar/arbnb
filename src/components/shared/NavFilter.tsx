/* eslint-disable @next/next/no-img-element */

import { useRef } from 'react'
import d from './data'
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs'

const Item = ({ item }: { item: { title: string; img: string } }) => {
  return (
    <div className="md:mx-3 mx-1 flex flex-col items-center md:p-2 p-0  rounded-lg justify-center">
      <img
        src={item.img}
        alt=""
        className="rounded-md aspect-square  md:w-12 object-cover w-10"
      />
      <p className="first-letter:uppercase text-center text-xs md:text-base">
        {item.title}
      </p>
    </div>
  )
}

const NavFilter = () => {
  const ref = useRef<HTMLDivElement>(null)
  const _hendelScrol = (d: string) => {
    if (ref.current) {
      ref.current.scrollTo({
        behavior: 'smooth',
        left: ref.current.scrollLeft - (d === 'l' ? 300 : -300),
      })
    }
  }

  return (
    <div className="container relative group/arrow">
      <div
        onClick={() => _hendelScrol('l')}
        className="absolute   bg-opacity-20 h-full md:flex items-center -left-3 rounded-md select-none cursor-pointer opacity-0 group-hover/arrow:opacity-100 transition duration-700 hidden"
      >
        <BsFillArrowLeftCircleFill className="text-3xl opacity-50" />
      </div>
      <div
        onClick={() => _hendelScrol('r')}
        className="absolute  bg-opacity-20 h-full hidden md:flex items-center  -right-9 rounded-md select-none cursor-pointer opacity-0 group-hover/arrow:opacity-100 transition duration-700"
      >
        <BsFillArrowRightCircleFill className="text-3xl opacity-50" />
      </div>
      <section ref={ref} className="flex overflow-scroll scrollbar-none mt-4">
        {d.map((item, i) => {
          return <Item key={i} item={item} />
        })}
      </section>
    </div>
  )
}

export default NavFilter
