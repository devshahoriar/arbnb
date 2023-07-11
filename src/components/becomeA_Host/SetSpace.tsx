import { motion } from 'framer-motion'
import BaseChild from './BaseChild'
const SetSpace = () => {
  return (
    <BaseChild>
      <div className="h-full mx-2">
        <div className="mt-5 flex flex-col gap-4">
          <p className="font-semibold">Enter a good title</p>
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered w-full"
          />
          <p className="mt-5 font-semibold">Enter description</p>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Description"
          />
        </div>
      </div>
    </BaseChild>
  )
}
export default SetSpace
