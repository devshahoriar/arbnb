import Nav from '@/components/shared/Nav'
import NavFilter from '@/components/shared/NavFilter'
import React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627,
  },
  zoom: 11,
}

const index = () => {
  return (
    <>
      <Nav />
      <NavFilter />
      <div style={{ height: '100vh', width: '100%' }} className='mt-10'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        ></GoogleMapReact>
      </div>
    </>
  )
}

export default index
