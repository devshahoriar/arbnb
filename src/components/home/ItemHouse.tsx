/* eslint-disable @next/next/no-img-element */
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Link from 'next/link'
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs'
import { BiHeart } from 'react-icons/bi'

const arrow = (
  onClickHandler: Function,
  hasNext: boolean,
  label: string,
  d: string
) => {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault()
        onClickHandler()
      }}
      title={label}
      className={`absolute z-10  top-0 h-full opacity-0 group-hover/carro:opacity-100 transition duration-700 ${
        d === 'l' ? 'right-1' : 'left-1'
      }`}
    >
      {d === 'r' ? (
        <BsFillArrowLeftCircleFill className="text-2xl text-white hover:text-primary" />
      ) : (
        <BsFillArrowRightCircleFill className="text-2xl hover:text-primary text-white" />
      )}
    </button>
  )
}

const ItemHouse = () => {
  return (
    <Link href="/property/sdfd" className="relative">
      <BiHeart className="absolute top-3 right-3 z-10 text-[22px] text-white" />
      {/* <BiSolidHeart className="absolute top-2 right-2 z-10 hidden" /> */}
      <Carousel
        renderArrowNext={(onClickHandler: any, hasNext: any, label: any) =>
          arrow(onClickHandler, hasNext, label, 'l')
        }
        renderArrowPrev={(onClickHandler: any, hasNext: any, label: any) =>
          arrow(onClickHandler, hasNext, label, 'r')
        }
        showThumbs={false}
        className="rounded-xl overflow-hidden aspect-square group/carro relative"
        showStatus={false}
        infiniteLoop
      >
        <img
          src={`https://picsum.photos/400?productivity,city,${Math.random()}`}
          alt="City"
          className="w-full aspect-square object-cover "
        />
        <img
          src={`https://picsum.photos/400?productivity,city,${Math.random()}`}
          alt="City"
          className="w-full aspect-square object-cover "
        />
      </Carousel>
      <div className="mt-3">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-lg">Productivity</h1>
          <p className="text-sm">star</p>
        </div>
        <p className="text-sm opacity-75">4,555 km away</p>
        <p className="text-sm opacity-75">Jun 9-15</p>
        <p>
          <span>$455</span>night
        </p>
      </div>
    </Link>
  )
}

export default ItemHouse
