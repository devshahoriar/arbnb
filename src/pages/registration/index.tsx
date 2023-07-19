import Btn from '@/components/shared/Btn'
import InputBox from '@/components/shared/InputBox'
import Link from 'next/link'

const index = () => {
  return (
    <main className="h-screen w-screen">
      <section className="container h-full flex justify-center items-center">
        <div className=" w-full sm:w-[400px]">
          <h1 className="text-center text-2xl">Create new account</h1>
          <p className="text-center text-sm mt-3">
            Already Registered?{' '}
            <Link className="underline" href="/login">
              Login
            </Link>
          </p>
          <div className="mt-5 flex flex-col gap-4 items-center ">
            <InputBox placeholder="Jiara Martins" title="Name" type="text" />
            <InputBox placeholder="email@email.com" title="Email" type="text" />
            <InputBox placeholder="*****" title="Password" type="password" />
            {/* <p className='w-[260px]'>{"error"}</p> */}
            <Btn title="Sign up" type="button" />

            <Btn title="Google login" type="button" />
            <Btn title="Facebook login" type="button" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default index
