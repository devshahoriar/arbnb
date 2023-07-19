/* eslint-disable @next/next/no-img-element */

import { MdLocationPin } from "react-icons/md"



const List = ({
  title,
  children,
}: {
  title: string
  children: JSX.Element | JSX.Element[]
}) => {
  return (
    <div className="mt-6">
      <h1 className="text-center text-xl">{title}</h1>
      <div className="flex gap-10 flex-wrap justify-center mt-10">{children}</div>
    </div>
  )
}

const ListItem = ({
  img,
  title,
  location,
}: {
  img: string
  title: string
  location: string
}) => {
  return (
    <div className="flex items-center">
      <img className="h-20 aspect-square object-cover rounded-md" src={img} alt="locaipon image" />
      <div className="ml-2">
        <h1 className="text-2xl">{title}</h1>
        
        <p className="flex gap-1 items-center"><MdLocationPin/>{location}</p>
      </div>
    </div>
  )
}

const wishlist = () => {
  return (
    <main>
      <section className="container mb-20">
        <div className="mx-2 md:mx-0">
          <h1 className="text-center mt-[8vh] text-[clamp(30px,5vw,80px)]">
            Wishlist
          </h1>
          <List title='List 1' >
            <ListItem img='https://picsum.photos/500/300?random=1' location='Rasjhahi' title='Item name'/>
            <ListItem img='https://picsum.photos/500/300?random=1' location='Rasjhahi' title='Item name'/>
            <ListItem img='https://picsum.photos/500/300?random=1' location='Rasjhahi' title='Item name'/>
            <ListItem img='https://picsum.photos/500/300?random=1' location='Rasjhahi' title='Item name'/>
            <ListItem img='https://picsum.photos/500/300?random=1' location='Rasjhahi' title='Item name'/>
            <ListItem img='https://picsum.photos/500/300?random=1' location='Rasjhahi' title='Item name'/>
          </List>
          <List title='List 2' >
            <ListItem img='https://picsum.photos/500/300?random=1' location='Rasjhahi' title='Item name'/>
            <ListItem img='https://picsum.photos/500/300?random=1' location='Rasjhahi' title='Item name'/>
            <ListItem img='https://picsum.photos/500/300?random=1' location='Rasjhahi' title='Item name'/>
            <ListItem img='https://picsum.photos/500/300?random=1' location='Rasjhahi' title='Item name'/>
            <ListItem img='https://picsum.photos/500/300?random=1' location='Rasjhahi' title='Item name'/>
            <ListItem img='https://picsum.photos/500/300?random=1' location='Rasjhahi' title='Item name'/>
          </List>
        </div>
      </section>
    </main>
  )
}

export default wishlist
