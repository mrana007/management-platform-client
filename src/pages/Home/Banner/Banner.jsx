import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="min-h-screen bg-green-950">
      <div className="flex flex-col md:flex-row items-center md:px-28">
        <div className="flex-1">
          <img className="pt-24" src="https://i.ibb.co/gvc2cyS/todo-Banner.png" />
        </div>
        <div className="flex-1 w-full p-2 pl-4 mx-auto">
          <h2 className="font-bold text-4xl text-white">Master Your Day: Your Ultimate To Do List for Seamless Productivity and Achievement</h2>
          <div className="mt-4">
            <Link to="/dashboard">
              <button className="btn hover:bg-green-700 hover:text-white    hover:border-none font-medium">Let’s Explore<FaArrowRightLong className=" font-thin" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
