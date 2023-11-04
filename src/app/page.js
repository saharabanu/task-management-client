

import Footer from "@/components/ui/Footer";
import TaskList from "@/components/ui/tasks/TaskList";



export default function HomePage() {
  return (
    <div className=" container mx-auto mt-36" >
   
    <TaskList/>
    <Footer/>
    </div>
  )
}
