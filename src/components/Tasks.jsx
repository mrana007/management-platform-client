import useTasks from "../hooks/useTasks";

import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const Tasks = () => {
  const [tasks, refetch] = useTasks();

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`https://task-management-platform-server-theta.vercel.app/${id}`, {
          method: "DELETE",
        });

        if (res) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-8">
      <div>
        <div className="p-4 bg-[#CAD9F6] border rounded">
          <div>
            <h2 className="text-sm font-semibold">To Do</h2>
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
                      {/* update tasks */}
                      <button
                        className=""
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()}>
                        <MdOutlineModeEditOutline />
                      </button>
                      <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                        <h3 className="font-bold text-lg">Update Task</h3>
                        <form>
                          <input
                          className="border focus:outline-none py-1 px-2 rounded-sm w-full mb-2"
                          type="text" />
                          <input
                          className="border focus:outline-none py-1 px-2 rounded-sm w-full mb-2"
                          type="text" />
                          <input
                          className="border focus:outline-none py-1 px-2 rounded-sm w-full mb-2"
                          type="text" />
                          <input
                          className="border focus:outline-none py-1 px-2 rounded-sm w-full mb-2"
                          type="text" />
                          <div className="flex justify-end">
                          <input
                          className="bg-green-900 text-white rounded py-1 px-4 text-sm"
                          type="submit"
                          value="Update Task" />
                          </div>
                        </form>
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                              ✕
                            </button>
                          </form>
                        </div>
                      </dialog>
                      {/* delete */}
                      <RiDeleteBin6Line
                        className="text-red-600"
                        onClick={() => handleDelete(task?._id)} />
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
