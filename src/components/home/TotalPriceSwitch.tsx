import React from 'react'

const TotalPriceSwitch = () => {
  return (
    <div className="container md:flex justify-center mt-5 hidden">
      <div className="flex items-center  px-9 py-4 gap-5 border rounded-2xl">
        <div className="flex items-center">
          <h1 className="text-lg pr-5 border-r">Display total price</h1>
          <p className="opacity-75 pl-5">Includes all fees, before taxes</p>
        </div>
        <div className="flex items-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  )
}

export default TotalPriceSwitch
