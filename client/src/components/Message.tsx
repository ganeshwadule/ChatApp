interface MessageProps {
  message: string;
}

const Message = ({message}: MessageProps) => {
  return (
    <div className="p-3 bg-[#a6f4d1] font-medium text-gray-700 border-gray-400 m-2">
        <div>{message}</div>
    </div>
  )
}

export default Message