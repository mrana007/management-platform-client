import useTasks from "../hooks/useTasks";

import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const Tasks = () => {
  const [tasks, refetch] = useTasks();

  

  return (
    <div className="grid gap-2 grid-cols-3 py-8">
      <div>
        <div className="p-4 bg-[#CAD9F6] border rounded">
          <div>
            <h2 className="text-sm font-semibold">To do</h2>
          </div>
          {/* to do list */}
          {tasks
            ?.filter((task) => task?.status?.includes("to-do"))
            ?.map((task) => (
              <>
                <div className="bg-white rounded p-2 mt-2" key={task._id}>
                  <div className="flex justify-between items-center">
                    <h2 className="font-bold text-base">{task?.title}</h2>
                    <div className="flex gap-2">
                      <MdOutlineModeEditOutline />
                      <RiDeleteBin6Line  />
                    </div>
                  </div>
                  <p className="text-[#5C5C5C] text-sm mt-1">
                    {task?.description}
                  </p>
                </div>
              </>
            ))}
        </div>
      </div>
      <div>
        <div className="p-4 bg-[#FFE4C2] border rounded">
          <div>
            <h2 className="text-sm font-semibold">On Going</h2>
          </div>
          {/* ongoing list */}
          {tasks
            ?.filter((task) => task?.status?.includes("ongoing"))
            ?.map((task) => (
              <>
                <div className="bg-white rounded p-2 mt-2" key={task._id}>
                  <div className="flex justify-between items-center">
                    <h2 className="font-bold text-base">{task?.title}</h2>
                    <div className="flex gap-2">
                      <MdOutlineModeEditOutline />
                      <RiDeleteBin6Line />
                    </div>
                  </div>
                  <p className="text-[#5C5C5C] text-sm mt-1">
                    {task?.description}
                  </p>
                </div>
              </>
            ))}
        </div>
      </div>
      <div>
        <div className="p-4 bg-[#FAD0C6] border rounded">
          <div>
            <h2 className="text-sm font-semibold">Completed</h2>
          </div>
          {/* completed list */}
          {tasks
            ?.filter((task) => task?.status?.includes("completed"))
            ?.map((task) => (
              <>
                <div className="bg-white rounded p-2 mt-2" key={task._id}>
                  <div className="flex justify-between items-center">
                    <h2 className="font-bold text-base">{task?.title}</h2>
                    <div className="flex gap-2">
                      <MdOutlineModeEditOutline />
                      <RiDeleteBin6Line />
                    </div>
                  </div>
                  <p className="text-[#5C5C5C] text-sm mt-1">
                    {task?.description}
                  </p>
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
