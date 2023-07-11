/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react'
import BaseChild from './BaseChild'

const ItemImage = ({file}:{file:File}) => {
  const url = URL.createObjectURL(file)
  return <div className='h-20 md:h-32 aspect-video  rounded-lg  overflow-hidden"
  '>
    <img className='object-cover h-full w-full rounded-lg' src={url} alt="select" />
  </div>
}

const SetPrice = () => {
  const [images, setImages] = useState([])
  const inputImage = useRef<HTMLInputElement>(null)
  useEffect(() => {
    console.log(images)
  }, [images])
  return (
    <BaseChild>
      <div className="h-full mx-2">
        <div className="mt-5 flex flex-col gap-4">
          <p className="font-semibold">Enter a good price</p>
          <input
            type="number"
            placeholder="Price"
            className="input input-bordered w-full appearance-none"
          />
          <p className="font-semibold">Add some image</p>
          <div className='flex flex-wrap gap-4'>
            {images?.map((file,i) => (
              <ItemImage file={file} key={i} />
            ))}
            <button
              onClick={() => inputImage.current?.click()}
              className="h-20 aspect-video border rounded-lg flex justify-center items-center cursor-pointer active:scale-95 md:h-32"
            >
              <span>Add image</span>
            </button>
            <input
              ref={inputImage}
              type="file"
              hidden
              multiple
              onChange={(e) => setImages(Array.from(e.currentTarget.files as any))}
            />
          </div>
        </div>
      </div>
    </BaseChild>
  )
}
export default SetPrice
