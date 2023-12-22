import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import Tasks from "../components/Tasks";
import CreateTask from "../components/CreateTask";

const Dashboard = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row">
        <div className="w-[350px] p-8">
          <Link to="/">
          <button className="btn w-full mx-auto bg-green-800 hover:bg-green-600">
            <div className="flex items-center gap-1 text-white">
              <IoHomeOutline className="text-lg"></IoHomeOutline>
            <h2>SCC TECHNOVISION</h2>
            </div>
          </button>
          </Link>
          <ul className="flex flex-col gap-4 mt-16">
            <li>
              <button className="w-full">
                <NavLink to="/dashboard" className={({ isActive, isPending }) =>  isPending ? "pending" : isActive ? "bg-[#2563DC] text-white py-1 px-2 rounded w-full text-center block" : "bg-[#EEF2FC] py-1 px-2 rounded text-black w-full text-center block" }>
                  DashBoard
                </NavLink>
              </button>
            </li>         
          </ul>
        </div>
        <div className="border-l w-full min-h-screen py-4">
          <div>
            <div className="flex gap-4 border-b px-10 pb-6 items-center">
              <div className="w-[80%] ">
                <form className="relative"> <input className="border w-full rounded-sm py-1 px-2 "type="text" placeholder="Search by task name..."/>
                  <IoIosSearch className="absolute top-2 right-2" />
                </form>
              </div>
              <div className="flex gap-4 items-center justify-end w-[20%]">
                <IoMdNotificationsOutline className="w-[25px] h-[25px]" />
                <img
                  className="w-9 rounded-full"
                  src="https://i.ibb.co/cxddwLx/placeholder.jpg"
                />
              </div>
            </div>
            {/* outlet */}
            <div className="p-10">
              <CreateTask />
              <div>
                <Tasks></Tasks>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
