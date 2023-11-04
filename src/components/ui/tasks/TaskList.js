'use client'

import { useGetTasksQuery } from "@/redux/api/apiSlice"



const TaskList = () => {

  const {data} = useGetTasksQuery();
  const tasks = data?.data;
  // console.log(data)
  
  
  return (
    <div className=" border max-w-3xl mx-auto">
   <div>
   <table className="table-auto">
  <thead>
    <tr>
      <th>Task</th>
      <th>Description</th>
      <th>Priority</th>
      <th>Status</th>
      <th>Action</th>
     
    </tr>
    
  </thead>
  <hr />
  <tbody>
  {tasks?.map((item)=>(<tr key={item?.id}>
      <td>{item?.title} </td>
      <td className="pl-5">{item?.description}</td>
      <td className="pl-5">{item?.priority}</td>
      <td className="pl-5">{item?.status}</td>
      
      <td className="pl-5">
      <button className="">Edit</button>
      <button className="px-3">delete</button>
      </td>
      
     
    </tr>
    ))}
  </tbody>
</table>
   </div>
        
    </div>
    
  )
}

export default TaskList