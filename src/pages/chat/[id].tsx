/* eslint-disable @next/next/no-img-element */
import MessageItem from '@/components/chat'
import { useRouter } from 'next/router'
import { FiSend } from 'react-icons/fi'

const Chat = () => {
  const router = useRouter()
  // console.log(router.query);

  return (
    <main>
      <div className="h-screen flex container border-l border-r">
        <div className="w-[35%] hidden bg-blue-600 md:block">side bar</div>

        <div className="w-[100%] md:w-[65%] flex flex-col">
          <div className=" h-14 flex px-3 items-center gap-2 border-b">
            <img
              className="h-10 w-10 object-cover rounded-full"
              src="https://picsum.photos/200"
              alt="pp"
            />
            <p className="text-lg font-semibold">Name</p>
          </div>

          <div className="flex-1 overflow-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-800 w-full">
            <div className='flex h-full'>
              <div className="px-3 flex flex-col  justify-end w-full">
                
                <MessageItem
                  message="lorem asfas da sd ad as d asdas d as d asd "
                  l
                />
                <MessageItem message="lorem asfas da sd ad as d asdas d as d asd dfgdfgdfgdfg dfgdf/>" />
              </div>
            </div>
          </div>

          <div className="mx-3 h-14 flex items-center">
            <div className="flex items-center w-full border px-3 py-2 gap-2 rounded-md">
              <input
                className="flex-1 outline-none bg-transparent"
                type="text"
                placeholder="Your message"
              />
              <button>
                <FiSend />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Chat
