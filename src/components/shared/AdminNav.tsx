/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { IoIosNotifications } from 'react-icons/io'
import { RiAccountCircleFill } from 'react-icons/ri'

const AdminNav = () => {
  return (
    <nav className="border-b">
      <section className="container">
        <div className="mx-2 flex justify-between items-center py-3 ">
          <h1 className="text-2xl font-black">Logo</h1>
          <div className="hidden md:flex items-center gap-4">
            <Link className='hover:opacity-50' href="/">Home</Link>
            <Link className='hover:opacity-50' href="/">Views</Link>
            <Link className='hover:opacity-50' href="/">My Listing</Link>
            <Link className='hover:opacity-50' href="/">Reviews</Link>
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-5 text-2xl">
            <Link href="/profile/notification" className="active:scale-95 hover:opacity-60">
              <IoIosNotifications />
            </Link>
            <button className="active:scale-95 hover:opacity-60">
              <RiAccountCircleFill />
            </button>
          </div>
        </div>
      </section>
    </nav>
  )
}

export default AdminNav
