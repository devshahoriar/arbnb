import Btn from '@/components/shared/Btn'
import InputBox from '@/components/shared/InputBox'
import Link from 'next/link'

const selectaccount = () => {
  return (
    <main className="h-screen w-screen">
      <section className="container h-full flex justify-center items-center">
        <div className=" w-full sm:w-[400px]">
          <h1 className="text-center text-2xl">Select your account type</h1>
          
          <div className="mt-5 flex flex-col gap-4 items-center ">
            <select className="select w-[260px] bg-black text-white focus:text-white focus:outline-none rounded-none !py-2">
              <option disabled selected>
                Accoutn type
              </option>
              <option>Renter</option>
              <option>Landlord </option>
            </select>
            <Btn title="Next" type="button" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default selectaccount
