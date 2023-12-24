import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useTasks from "../hooks/useTasks";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Tasks = () => {
  const [data, refetch] = useTasks();

  const axiosPublic = useAxiosPublic();

  const [sections, setSections] = useState({
    todo: [],
    ongoing: [],
    completed: [],
  });

  useEffect(() => {
    if (data) {
      setSections({
        todo: data.filter((item) => item.status === "to-do"),
        ongoing: data.filter((item) => item.status === "ongoing"),
        completed: data.filter((item) => item.status === "completed"),
      });
    }
  }, [data]);

  const onDragEnd = async (result) => {
    if (!result.destination) return;

    // Update local state immediately
    const updatedSections = { ...sections };
    const [moveTask] = updatedSections[result.source.droppableId].splice(
      result.source.index,
      1
    );
    updatedSections[result.destination.droppableId].splice(
      result.destination.index,
      0,
      moveTask
    );
    setSections(updatedSections);

    const order = result.destination.index + 1;
    await axiosPublic.patch("/Tasks", {
      id: moveTask._id,
      status: result.destination.droppableId,
      order,
    });
  };

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
        const res = await fetch(
          `https://task-management-platform-server-theta.vercel.app/Tasks/${id}`,
          {
            method: "DELETE",
          }
        );

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
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid lg:grid-cols-3 gap-6 mt-10">
        {Object.keys(sections).map((sectionKey) => (
          <div
            className={`border-2 px-5 py-3 text-center rounded-md ${
              sectionKey === "todo" ? "bg-[#CAD9F6]" : sectionKey === "ongoing" ? "bg-[#FFE4C2]" : sectionKey === "completed" ? "bg-[#FAD0C6]" : ""
            }`} key={sectionKey} >
            <h2 className="text-[18px] font-bold">
              {sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)}
            </h2>

            <Droppable droppableId={sectionKey} key={sectionKey}>
              {(provided) => (
                <ul
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="rounded-md my-5 text-left"
                >
                  {sections[sectionKey].map((task, index) => (
                    <Draggable
                      key={task._id}
                      draggableId={task._id}
                      index={index}
                    >
                      {(provided) => (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className="p-2 border capitalize bg-white shadow-lg border-green-500 rounded-md my-3"
                        >
                          <p>
                            <span className="font-semibold">Task Title:</span>{" "}
                            {task?.title}
                          </p>
                          <p>
                            <span className="font-semibold">
                              Task Description:
                            </span>{" "}
                            {task?.description}
                          </p>
                          <p>
                            <span className="font-semibold">
                              Task Priority:
                            </span>{" "}
                            {task?.priority}
                          </p>
                          <p>
                            <span className="font-semibold">
                              Task Deadline:
                            </span>{" "}
                            {task?.deadline}
                          </p>
                          <div className="flex justify-end gap-3 hover:cursor-pointer">
                            <MdOutlineModeEditOutline className="text-2xl" />
                            <RiDeleteBin6Line
                              className="text-2xl text-red-500 hover:text-red-700"
                              onClick={() => handleDelete(task?._id)}
                            />
                          </div>
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Tasks;
