import { HiArrowSmallLeft } from 'react-icons/hi2'
import { FiShare } from 'react-icons/fi'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import Link from 'next/link'

const MobuleNav = () => {
  return (
    <div className="flex justify-between px-2 py-4 bg-white bg-opacity-25 backdrop-blur-sm md:hidden fixed top-0 left-0 right-0 z-10">
      <Link href='/' className="flex items-center gap-2 text-lg font-semibold">
        <HiArrowSmallLeft />
        <p>Homes</p>
      </Link>
      <div className="flex items-center gap-4 text-lg">
        <button>
          <FiShare />
        </button>
        <button>
          <AiOutlineHeart />
          <AiFillHeart className="hidden" />
        </button>
      </div>
    </div>
  )
}

export default MobuleNav
