/* eslint-disable @next/next/no-img-element */
import Btn from '@/components/shared/Btn'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineCamera, AiOutlineCloseCircle } from 'react-icons/ai'

export const ItemInputImage = ({ title, className }: any) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState<any>()
  const url = image ? URL.createObjectURL(image) : ''

  return (
    <section
      className={`border aspect-video h-24 overflow-hidden rounded-md relative ${className}`}
    >
      {image ? (
        <>
          <button
            className="absolute right-1 top-1 text-white"
            onClick={() => setImage(null)}
          >
            <AiOutlineCloseCircle />
          </button>
          <img src={url} alt="input" className="h-full w-full object-cover" />
        </>
      ) : (
        <>
          <input
            type="file"
            hidden
            multiple={false}
            ref={inputRef}
            accept="image/*"
            onChange={(e) => setImage(e.currentTarget.files[0])}
          />
          <button
            onClick={() => inputRef.current?.click()}
            className="h-full w-full  flex justify-center items-center flex-col"
          >
            <AiOutlineCamera className="text-4xl" />
            <p>{title}</p>
          </button>
        </>
      )}
    </section>
  )
}

const verification = () => {
  return (
    <main className="h-screen w-screen">
      <section className="container h-full flex justify-center items-center">
        <div className=" w-full sm:w-[400px]">
          <h1 className="text-center text-2xl">Verification</h1>

          <div className="mt-5 flex flex-col gap-4 items-center ">
            <p>Verify your ID</p>
            <div className="flex  gap-4">
              <ItemInputImage title="ID FRONT" />
              <ItemInputImage title="ID Back" />
              <ItemInputImage title="Electric bill" />
            </div>
            <Btn title="Uplode" type="button" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default verification
