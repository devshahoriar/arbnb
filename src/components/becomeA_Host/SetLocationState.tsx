import { motion } from 'framer-motion'
import BaseChild from './BaseChild'

import GoogleMapReact from 'google-map-react'

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627,
  },
  zoom: 11,
}

const SetLocationState = () => {
  return (
    <BaseChild className="">
      <div className="h-full mx-2">
        <p className="text-2xl">Set your house location.</p>
        <div className='h-[80%] mt-5 rounded-xl overflow-hidden'>
         
          <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          ></GoogleMapReact>
        </div>
      </div>
    </BaseChild>
  )
}
export default SetLocationState
