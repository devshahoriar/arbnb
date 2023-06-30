/* eslint-disable @next/next/no-img-element */
interface MessageItemProps {
  message: string
  l?: boolean
}

const MessageItem = ({ message, l }: MessageItemProps) => {
  return (
    <div className={`chat ${l ? 'chat-start' : 'chat-end'}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://picsum.photos/200" alt="pp" />
        </div>
      </div>
      <div className="chat-bubble">
        {message}
      </div>
    </div>
  )
}
export default MessageItem
