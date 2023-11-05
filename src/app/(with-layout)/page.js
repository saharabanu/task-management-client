'use client'
import Footer from "@/components/ui/Footer";
import TaskList from "@/components/ui/tasks/TaskList";
import { Toaster } from "react-hot-toast";

export default function HomePage() {
  return (
    <div className=" container mx-auto mt-36">
      <Toaster />
      <TaskList />
      <Footer />
    </div>
  );
}
