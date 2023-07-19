import Btn from '@/components/shared/Btn'
import InputBox from '@/components/shared/InputBox'

const update = () => {
  return (
    <main className="h-screen w-screen">
      <section className="container h-full flex justify-center items-center">
        <div className=" w-full sm:w-[400px]">
          <h1 className="text-center text-2xl">More informations</h1>

          <div className="mt-5 flex flex-col gap-4 items-center ">
            <InputBox
              placeholder="Google mape location"
              type="string"
              title="Prefered Location"
            />

            <InputBox title="Phone number" />
            <InputBox title="Whatsapp" />
            <InputBox title="Company name (if applicable)" />
            <Btn title="Next" type="button" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default update
