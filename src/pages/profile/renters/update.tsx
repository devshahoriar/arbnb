import Btn from '@/components/shared/Btn'
import InputBox from '@/components/shared/InputBox'

const update = () => {
  return (
    <main className="h-screen w-screen">
      <section className="container h-full flex justify-center items-center">
        <div className=" w-full sm:w-[400px]">
          <h1 className="text-center text-2xl">Verification</h1>

          <div className="mt-5 flex flex-col gap-4 items-center ">
            <InputBox
              placeholder="Google mape location"
              type="string"
              title="Prefered Location"
            />
            <select className="select w-[260px]   focus:outline-none rounded-none !py-2 border border-black">
              <option disabled selected>
                pREFERED HOME TYPE
              </option>
              <option>sMALL</option>
              <option>bIG </option>
              <option>sINGLE ETC </option>
            </select>
            <InputBox title="Profession" />
            <InputBox title="Current address" />
            <InputBox title="More INFO" />
            <Btn title="Next" type="button" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default update
