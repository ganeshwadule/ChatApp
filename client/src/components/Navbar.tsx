import pfp from "../../public/pfp.jpeg"

const Navbar = () => {
  return (
    <div className="w-full text-gray-900 h-[60px] flex justify-between items-center px-10 shadow-md ">
      <div className="font-medium text-2xl text-indigo-600">ChitChat</div>
      <div className="w-10 h-10 flex justify-center items-center rounded-[50%] border-green-200 border overflow-hidden">
        <img src={pfp} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
