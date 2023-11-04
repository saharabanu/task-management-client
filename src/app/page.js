

import Footer from "@/components/ui/Footer";
import CreateTask from "@/components/ui/tasks/CreateTask";
import TaskList from "@/components/ui/tasks/TaskList"; 
import { Toaster } from "react-hot-toast";



export default function HomePage() {
  return (
    <div className=" container mx-auto mt-36" >
   <Toaster />
   <CreateTask/>
    <TaskList/>
    <Footer/>
    </div>
  )
}
