import { MdOutlineEmail } from 'react-icons/md'
import { HiChatBubbleLeftRight } from 'react-icons/hi2'
import { FaPhoneVolume } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const HelpTypeBox = ({
  icon,
  title,
  set,
  type,
}: {
  title: string
  icon: JSX.Element
  set: any
  type: 'email' | 'chat' | 'call'
}) => {
  return (
    <button
      onClick={() => set(type)}
      className="flex justify-center items-center border rounded-md flex-col aspect-square h-24 sm:h-32 md:h-40 hover:scale-105 active:scale-95"
    >
      <span className="text-3xl sm:text-4xl md:text-5xl">{icon}</span>
      <h1 className="text-xl sm:text-2xl md:text-3xl">{title}</h1>
    </button>
  )
}

const EmailUs = () => {
  return (
    <section className="mx-5 md:max-0 flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold text-center">Email us</h1>
      <div className="w-full md:w-[600px] flex flex-col gap-5 mt-5">
        <input
          type="email"
          placeholder="Email address"
          className="outline-none p-2 text-black border rounded-sm border-black"
        />
        <input
          type="text"
          placeholder="Subject"
          className="outline-none p-2 text-black border rounded-sm border-black"
        />
        <textarea
          placeholder="Message"
          className="outline-none p-2 text-black border rounded-sm border-black"
        />
        <button className="bg-green-700 w-fit text-white font-bold px-5 py-2 rounded-md hover:opacity-80 active:scale-95">
          Send Email
        </button>
      </div>
    </section>
  )
}
const ChatUs = () => {
  return <h1>Chat us</h1>
}
const Callus = () => {
  return (
    <section className="mx-5 md:max-0 flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold text-center">Call our support</h1>
      <div className="w-full md:w-[600px] flex flex-col gap-1 mt-5 items-center">
        <p>+845 545 51440</p>
        <p>Estimated waiting time 5 minutes</p>
        <button className="bg-green-700 w-fit text-white font-bold px-5 py-2 rounded-md hover:opacity-80 active:scale-95 mt-5">
          Call
        </button>
      </div>
    </section>
  )
}

const LandLodersFooter = () => {
  const [showHelp, setShowHelp] = useState(false)
  const [helpType, setHelpType] = useState<'email' | 'chat' | 'call'>()
  useEffect(() => {
    if (!showHelp) {
      setHelpType(undefined)
    }
  }, [showHelp])
  return (
    <footer className="mt-5">
      <section className="container border-t">
        <div className="flex justify-center">
          <button
            onClick={() => setShowHelp((r) => !r)}
            className="border px-3 md:px-5 text-sm md:text-base py-1 mt-5 rounded-lg"
          >
            Need help? Contact our support
          </button>
        </div>
        {showHelp && (
          <div className="flex mx-5 justify-center gap-5 mt-10">
            <HelpTypeBox
              type="email"
              set={setHelpType}
              icon={<MdOutlineEmail />}
              title="Email"
            />
            <HelpTypeBox
              type="chat"
              set={setHelpType}
              icon={<HiChatBubbleLeftRight />}
              title="Live chat"
            />
            <HelpTypeBox
              type="call"
              set={setHelpType}
              icon={<FaPhoneVolume />}
              title="Call"
            />
          </div>
        )}
        <div className="mt-10">{helpType === 'email' && <EmailUs />}</div>
        <div className="mt-10">{helpType === 'call' && <Callus />}</div>
        <div className="mt-10">{helpType === 'chat' && <ChatUs />}</div>
      </section>
    </footer>
  )
}

export default LandLodersFooter
