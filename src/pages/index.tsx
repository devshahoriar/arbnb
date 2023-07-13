import BottomDesktopFooter from '@/components/home/BottomDesktopFooter'
import ItemHouse from '@/components/home/ItemHouse'
import TotalPriceSwitch from '@/components/home/TotalPriceSwitch'
import Nav from '@/components/shared/Nav'
import NavFilter from '@/components/shared/NavFilter'
import Link from 'next/link'
import { FaMapMarkedAlt } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <Nav />
      <NavFilter />
      <TotalPriceSwitch />
      <section className="container grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10 px-4 md:px-0 place-items-center">
        <ItemHouse />
        <ItemHouse />
        <ItemHouse />
        <ItemHouse />
        <ItemHouse />
        <ItemHouse />
        <ItemHouse />
        <ItemHouse />
      </section>
      <Link
        href="/maps"
        className="hover:shadow-2xl fixed bottom-20 left-1/2 bg-stone-500 -translate-x-1/2 bg-opacity-25 backdrop-blur-md px-5 py-2 rounded-2xl flex items-center gap-5 text-white font-semibold text-xl z-50"
      >
        <FaMapMarkedAlt />
        <p>Go to map</p>
      </Link>
      <BottomDesktopFooter />
    </>
  )
}
