import BaseChild from './BaseChild'

const FirstStape = () => {
  return (
    // <h1>Shuco</h1>
    <BaseChild>
      <div className="h-full flex justify-center flex-col items-center gap-2">
        <h1 className="text-3xl">
          Welcome <span className="font-bold">Shuvo</span>,
        </h1>
        <p className='text-2xl'>Get start..</p>
        <p className='opacity-60'>Become a house owaner.</p>
      </div>
    </BaseChild>
  )
}
export default FirstStape
