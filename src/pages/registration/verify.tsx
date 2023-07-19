import Btn from '@/components/shared/Btn'
import InputBox from '@/components/shared/InputBox'

const verify = () => {
  return (
    <main className="h-screen w-screen">
      <section className="container h-full flex justify-center items-center">
        <div className=" w-full sm:w-[400px]">
          <h1 className="text-center text-2xl">Verify email address</h1>

          <div className="mt-5 flex flex-col gap-4 items-center ">
            <InputBox
              placeholder="shuvo@gmail.com"
              title="Email"
              type="email"
              disabled
              value="email@email.com"
            />
            <InputBox placeholder="****" title="Code" type="string" />
            <Btn title="Verify" type="button" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default verify
