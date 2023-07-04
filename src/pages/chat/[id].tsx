/* eslint-disable @next/next/no-img-element */
import MessageItem, { ChatItem } from '@/components/chat'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BiHomeAlt2 } from 'react-icons/bi'
import { FiSend } from 'react-icons/fi'
import { IoLogOutOutline } from 'react-icons/io5'

const Chat = () => {
  const router = useRouter()
  // console.log(router.query);

  return (
    <main>
      <div className="h-screen flex container md:border-l md:border-r">
        <div className="w-[35%] hidden   h-screen overflow-hidden border-r md:flex flex-col">
          <div className="h-32 flex  justify-between items-center mx-5">
            <div className="flex items-center gap-3">
              <img
                className="h-14 w-14 rounded-full"
                src="https://picsum.photos/200"
                alt="pp"
              />
              <div>
                <h1 className="text-xl font-bold text-white ">User name</h1>
                <IoLogOutOutline className="text-2xl" />
              </div>
            </div>
            <div>
              <Link href="/" className="text-2xl">
                <BiHomeAlt2 />
              </Link>
            </div>
          </div>
          <div className="overflow-auto scrollbar-thin scrollbar-thumb-black">
            <div className="m-3 flex flex-col gap-3">
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
            </div>
          </div>
        </div>

        <div className="w-[100%] md:w-[65%] flex flex-col">
          <div className=" h-14 flex px-3 items-center gap-2 border-b">
            <img
              className="h-10 w-10 object-cover rounded-full"
              src="https://picsum.photos/200"
              alt="pp"
            />
            <p className="text-lg font-semibold">Name</p>
          </div>

          <div className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-black w-full">
            <div className="flex w-full ">
              <div className="px-3 flex flex-col  justify-end h-fit w-full">
                <MessageItem
                  message="lorem asfas da sd ad as d asdas d as d asd "
                  l
                />
                <MessageItem message="lorem asfas da sd ad as d asdas d as d asd dfgdfgdfgdfg dfgdf/>" />
                <MessageItem
                  message="lorem asfas da sd ad as d asdas d as d asd "
                  l
                />{' '}
                <MessageItem message="lorem asfas da sd ad as d asdas d as d asd dfgdfgdfgdfg dfgdf/>" />
                <MessageItem
                  message="lorem asfas da sd ad as d asdas d as d asd "
                  l
                />{' '}
                <MessageItem message="lorem asfas da sd ad as d asdas d as d asd dfgdfgdfgdfg dfgdf/>" />
                <MessageItem
                  message="lorem asfas da sd ad as d asdas d as d asd "
                  l
                />{' '}
                <MessageItem message="lorem asfas da sd ad as d asdas d as d asd dfgdfgdfgdfg dfgdf/>" />
                <MessageItem
                  message="lorem asfas da sd ad as d asdas d as d asd "
                  l
                />{' '}
                <MessageItem message="lorem asfas da sd ad as d asdas d as d asd dfgdfgdfgdfg dfgdf/>" />
                <MessageItem
                  message="lorem asfas da sd ad as d asdas d as d asd "
                  l
                />
                <MessageItem message="lorem asfas da sd ad as d asdas d as d asd dfgdfgdfgdfg dfgdf/>" />
                <MessageItem
                  message="lorem asfas da sd ad as d asdas d as d asd "
                  l
                />
                <MessageItem message="lorem asfas da sd ad as d asdas d as d asd dfgdfgdfgdfg dfgdf/>" />
                <MessageItem
                  message="lorem asfas da sd ad as d asdas d as d asd "
                  l
                />
                <MessageItem message="lorem asfas da sd ad as d asdas d as d asd dfgdfgdfgdfg dfgdf/>" />
                <MessageItem
                  message="lorem asfas da sd ad as d asdas d as d asd "
                  l
                />
                <MessageItem message="lorem asfas da sd ad as d asdas d as d asd dfgdfgdfgdfg dfgdf/>" />
                <MessageItem
                  message="lorem asfas da sd ad as d asdas d as d asd "
                  l
                />
                <MessageItem message="lorem asfas da sd ad as d asdas d as d asd dfgdfgdfgdfg dfgdf/>" />
                <MessageItem
                  message="lorem asfas da sd ad as d asdas d as d asd "
                  l
                />
                <MessageItem message="lorem asfas da sd ad as d asdas d as d asd dfgdfgdfgdfg dfgdf/>" />
                <MessageItem
                  message="lorem asfas da sd ad as d asdas d as d asd "
                  l
                />
                <MessageItem message="lorem asfas da sd ad as d asdas d as d asd dfgdfgdfgdfg dfgdf/>" />
                <MessageItem
                  message="lorem asfas da sd ad as d asdas d as d asd "
                  l
                />
                <MessageItem message="lorem asfas da sd ad as d asdas d as d asd dfgdfgdfgdfg dfgdf/>" />
                <MessageItem
                  message="lorem asfas da sd ad as d asdas d as d asd "
                  l
                />
                <MessageItem message="lorem asfas da sd ad as d asdas d as d asd dfgdfgdfgdfg dfgdf/>" />
                <MessageItem
                  message="lorem asfas da sd ad as d asdas d as d asd "
                  l
                />
                <MessageItem message="lorem asfas da sd ad as d asdas d as d asd dfgdfgdfgdfg dfgdf/>" />
                <MessageItem
                  message="lorem asfas da sd ad as d asdas d as d asd "
                  l
                />
                <MessageItem message="lorem asfas da sd ad as d asdas d as d asd dfgdfgdfgdfg dfgdf/>" />
                <MessageItem
                  message="lorem asfas da sd ad as d asdas d as d asd "
                  l
                />
                <MessageItem message="lorem asfas da sd ad as d asdas d as d asd dfgdfgdfgdfg dfgdf/>" />
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
