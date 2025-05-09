interface MessageProps {
  message: string;
}

const Message = ({message}: MessageProps) => {
  return (
    <div className="px-3 py-1 bg-[#9fd4e982] rounded-md font-medium text-gray-700 border-gray-400 m-2">
        <div>{message}</div>
    </div>
  )
}

export default Message