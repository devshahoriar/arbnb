/* eslint-disable @next/next/no-img-element */
import MobuleNav from '@/components/propaty/MobuleNav'
import Nav from '@/components/shared/Nav'
import { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsFillCalendarWeekFill,
  BsFillCarFrontFill,
} from 'react-icons/bs'
import { FaWifi } from 'react-icons/fa'
import { MdOutlinePool } from 'react-icons/md'
import { FiShare } from 'react-icons/fi'
import { TbBeach } from 'react-icons/tb'
import { TbToolsKitchen2 } from 'react-icons/tb'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

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
        d === 'l' ? 'right-2' : 'left-2'
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

const FetcherItem = ({
  title,
  icon,
  desc,
}: {
  title: string
  icon: JSX.Element
  desc: string
}) => {
  return (
    <div className="flex items-center">
      <span className="text-3xl">{icon}</span>
      <div className="ml-5">
        <h1 className="text-xl font-semibold">{title}</h1>
        {desc && <p className="text-sm">{desc}</p>}
      </div>
    </div>
  )
}

const OfferItem = ({ icon, title }: { icon: JSX.Element; title: string }) => {
  return (
    <div className="flex items-center gap-5 text-xl font-light">
      <span className="text-2xl">{icon}</span>
      <p>{title}</p>
    </div>
  )
}

const Item = () => {
  const [showDesc, setShowDesc] = useState(false)
  return (
    <>
      <div className="hidden md:block">
        <Nav />
      </div>

      {/* mobile navbar */}
      <MobuleNav />

      {/* mobile bottob bar */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-between px-6 bg-white bg-opacity-20 backdrop-blur-sm md:hidden py-2 items-center">
        <div>
          <p className="font-semibold">$1000 night</p>
          <p className="text-sm">may12-20</p>
        </div>
        <button className="bg-pink-600 px-4 py-1 font-bold rounded-full text-white">
          Buy
        </button>
      </div>

      {/* carousel */}
      <div className="mt-[60px] container flex flex-col md:flex-col-reverse md:mt-0">
        <Carousel
          renderArrowNext={(onClickHandler: any, hasNext: any, label: any) =>
            arrow(onClickHandler, hasNext, label, 'l')
          }
          renderArrowPrev={(onClickHandler: any, hasNext: any, label: any) =>
            arrow(onClickHandler, hasNext, label, 'r')
          }
          showThumbs={false}
          className="overflow-hidden group/carro relative itemCarrousel md:rounded-lg"
          showStatus={false}
          infiniteLoop
        >
          <img
            src={`https://source.unsplash.com/random/?productivity,city,${Math.random()}`}
            alt="City"
          />
          <img
            src={`https://source.unsplash.com/random/?productivity,city,${Math.random()}`}
            alt="City"
          />
        </Carousel>
        <div className="p-5 border-b md:px-0 flex justify-between">
          <div>
            <h1 className="text-3xl font-semibold xl:text-4xl">Propaty name</h1>
            <p className="underline underline-offset-2 cursor-pointer xl:text-lg">
              Propaty location
            </p>
          </div>
          <div className="items-center gap-5 text-l hidden md:flex xl:text-xl">
            <button className="flex items-center gap-1">
              <FiShare />
              <p>Share</p>
            </button>
            <button className="flex items-center gap-1">
              <AiOutlineHeart />
              <AiFillHeart className="hidden" />
              <p>Save</p>
            </button>
          </div>
        </div>
      </div>

      {/* description */}
      <div className="container flex justify-between items-start">
        <div className="w-full md:w-[60%]">
          <div className="flex justify-between items-center px-3 mt-5 border-b pb-3">
            <div>
              <h1 className="text-xl w-[70%] xl:text-2xl">
                Entire home hosted by Massupha
              </h1>
              <p className="text-sm xl:mt-2">16+ guests. 5 bedrooms. 9 beds. 6 baths</p>
            </div>
            <div className="">
              <img
                src="https://source.unsplash.com/random/?man"
                alt="Profile"
                className="h-14 w-14 object-cover rounded-full xl:h-16 xl:w-16"
              />
            </div>
          </div>
          <div className="px-3 flex-col flex gap-5 mt-5 border-b pb-5">
            <FetcherItem
              icon={<BsFillCalendarWeekFill />}
              desc="Cancle anytime. Even in not paid"
              title="100% on time."
            />
            <FetcherItem
              icon={<BsFillCalendarWeekFill />}
              desc="Cancle anytime. Even in not paid"
              title="100% on time."
            />
            <FetcherItem
              icon={<BsFillCalendarWeekFill />}
              desc="Cancle anytime. Even in not paid"
              title="100% on time."
            />
          </div>
          <div className="mt-5 border-b pb-5 px-2 md:px-0">
            <p className={`${showDesc ? '' : 'line-clamp-4'} text-sm xl:text-base`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              esse aperiam debitis accusamus alias totam quis ea? Blanditiis
              exercitationem laborum dolore, fuga facilis, nostrum esse sit,
              voluptates amet voluptate sapiente ratione vitae reiciendis
              maiores minus. Eos, dolor nulla. Quibusdam, distinctio repudiandae
              sapiente incidunt officia repellat fugiat qui. Nam mollitia
              deserunt excepturi maiores dolores explicabo deleniti similique!
              Consequuntur, numquam atque. Magni delectus deserunt odit eaque
              magnam rem doloremque fugit quia aut illo, earum voluptates
              exercitationem accusamus beatae sapiente aliquid dolorem porro hic
              tempora ipsa iste nesciunt dolorum. Ipsam deleniti in laudantium
              asperiores. Pariatur, odit similique veniam itaque assumenda
              magnam mollitia accusamus consectetur reprehenderit. Nisi, ex iste
              veritatis aspernatur in neque minima quasi repudiandae! Porro quo
              asperiores iusto perspiciatis dolore quae minus enim fugiat. Aut
              beatae optio nam nemo, sequi rerum ea excepturi cumque corrupti
              obcaecati voluptates at ipsum! Dicta maxime nostrum facere animi
              veritatis delectus deleniti, quod error atque repellendus vel,
              quae voluptatem laborum repudiandae placeat! Voluptas beatae illo
              eligendi voluptate eius id ratione minima aut praesentium optio
              unde, eveniet inventore suscipit! Ratione odit iste tenetur minima
              laboriosam ad ab similique eum sit accusantium voluptatum maiores
              qui aliquid, nam doloribus repellendus magnam dolor odio dolorum
              libero iusto eligendi voluptate. Doloribus quod beatae reiciendis
              velit quibusdam debitis libero dolorem blanditiis accusantium,
              nisi id, similique eveniet illo adipisci consequuntur
              perspiciatis? Atque animi itaque consequuntur nam vel eius
              recusandae vitae sint. Sint quibusdam vero id dolores inventore
              omnis similique delectus illum, aspernatur molestias accusamus,
              eveniet ab necessitatibus praesentium a consequatur laudantium
              nesciunt error quis culpa incidunt. Enim tempora velit aliquam
              magnam, sint nostrum quia veritatis debitis consequuntur repellat
              exercitationem, ab ea culpa id laborum eligendi commodi ullam
              adipisci eius voluptatibus. Sequi corrupti dolorem cupiditate quod
              nostrum impedit at labore optio commodi, quos voluptate quaerat
              error necessitatibus enim repellat minima hic rerum saepe non sed.
            </p>
            <button className='xl:text-lg' onClick={() => setShowDesc((r) => !r)}>
              {showDesc ? 'Read Less' : 'Read More'}
            </button>
          </div>
          <div className="mt-5 border-b pb-5 px-2 md:px-0">
            <h1 className="text-2xl font-semibold">What is we offers</h1>
            <div className="mt-5 flex flex-col gap-4 ml-5">
              <OfferItem icon={<TbBeach />} title="Beach Access" />
              <OfferItem icon={<TbToolsKitchen2 />} title="Kitchen" />
              <OfferItem icon={<FaWifi />} title="Wifi 100mbps" />
              <OfferItem icon={<BsFillCarFrontFill />} title="Free PArking" />
              <OfferItem icon={<MdOutlinePool />} title="Beach Access" />
            </div>
            <button className="bg-pink-600 w-fit py-2 px-5 rounded-xl text-lg font-bold text-white mt-5 active:scale-95">
              Show All
            </button>
          </div>
        </div>
        <div className="hidden md:flex sticky top-20 w-[40%] mt-28 justify-center">
          <div className="w-[90%]  p-10 border shadow-md h-fit rounded-2xl">
            <h1 className="text-2xl">
              <span className="font-bold ">$1000</span> night
            </h1>
            <div className="border border-[#ddd] rounded-2xl  py-5 mt-5">
              <div className="flex justify-evenly">
                <div className="text-center">
                  <p className="font-semibold">Check in</p>
                  <p>May 10</p>
                </div>

                <div className="text-center">
                  <p className="font-semibold">Check Out</p>
                  <p>May 20</p>
                </div>
              </div>
              <div className="flex justify-center mt-8 flex-col items-center">
                <p className="font-semibold">Add guests</p>
                <select defaultValue='a' className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-fit mt-2">
                  <option value='a'>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>
            <button className="bg-pink-600 w-full py-2 rounded-xl text-lg font-bold text-white mt-5 active:scale-95">
              Reserve
            </button>
            <p className="text-center mt-3">You won't yet charge.</p>
          </div>
        </div>
      </div>

      <div className="h-20"></div>
    </>
  )
}

export default Item
