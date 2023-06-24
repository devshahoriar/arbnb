import Link from 'next/link'
import React from 'react'
import { FaAirbnb, FaSearch, FaUserCircle } from 'react-icons/fa'
import { useRouter } from 'next/router'

const Nav = () => {
  const router = useRouter()
  return (
    <div className="border-b">
      <nav className="container flex justify-between py-5 items-center px-1 md:px-0">
        <Link
          href="/"
          className="flex items-center text-2xl gap-2 text-red-500 font-semibold"
        >
          <FaAirbnb />
          <p className='hidden md:inline'>arbnb</p>
        </Link>
        <div className="md:flex items-center border px-7 py-3 rounded-full shadow-md hidden">
          <div className="flex gap-3 items-center topSelect font-semibold">
            <button>Anywhere</button>
            <button>Any week</button>
            <button>Add guests</button>
          </div>
          <button>
            <FaSearch className="bg-red-600 p-1 text-2xl text-white rounded-full" />
          </button>
        </div>
        <div className="flex items-center">
          <button className="border p-2 rounded-full" onClick={() => router.push('/login')}>
            <FaUserCircle className="p-1 text-2xl bg-slate-500 text-white rounded-full" />
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Nav
