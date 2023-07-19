import Btn from '@/components/shared/Btn'
import InputBox from '@/components/shared/InputBox'
import { ItemInputImage } from '../renters/verification'

const index = () => {
  return (
    <main className="h-screen w-screen">
      <section className="container h-full flex justify-center items-center">
        <div className=" w-full sm:w-[400px]">
          <h1 className="text-center text-2xl">Profile</h1>

          <div className="mt-5 flex flex-col gap-4 items-center ">
            <ItemInputImage title="Profile picture" className="!aspect-square !h-32"  />
            <InputBox
              title="Profile bio"
              type="string"
              placeholder="Bio"
              className='!h-36'
            />

            <Btn title="Next" type="button" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default index
