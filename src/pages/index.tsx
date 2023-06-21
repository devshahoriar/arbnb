import ItemHouse from '@/components/home/ItemHouse'
import TotalPriceSwitch from '@/components/home/TotalPriceSwitch'
import Nav from '@/components/shared/Nav'
import NavFilter from '@/components/shared/NavFilter'

export default function Home() {
  return (
    <>
      <Nav />
      <NavFilter />
      <TotalPriceSwitch />
      <section className='container grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10 px-4 md:px-0 place-items-center'>
        <ItemHouse />
        <ItemHouse />
        <ItemHouse />
        <ItemHouse />
        <ItemHouse />
        <ItemHouse />
        <ItemHouse />
        <ItemHouse />
      </section>
    </>
  )
}
