"use client";

import Footer from "@/components/ui/Footer";

import TaskList from "@/components/ui/tasks/TaskList";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

export default function HomePage() {
  return (
    <div className=" container mx-auto mt-36">
      <Toaster />
        <div className="flex justify-end items-center max-w-5xl">
        <div className="w-full sm:w-auto">
    <Link href="/create">
      
        <button
          type="button"
          className="focus:outline-none text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md py-2 px-5 mb-2 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Add Task
        </button>
      
    </Link>
  </div>
        </div>
      <TaskList />
      <Footer />
    </div>
  );
}
