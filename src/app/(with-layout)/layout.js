'use client'
import Header from "@/components/ui/Header"
import { isLoggedIn } from "@/services/auth.service"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



const RootLayout = ({children}) => {
  const [isLoading, setIsLoading] = useState(false)
  const userLoggedIn = isLoggedIn();
  const router = useRouter();

  useEffect(()=> {
  if(!userLoggedIn){
    router.push('/login');
  }
  setIsLoading(true)
  },[router, isLoading,userLoggedIn]);

  if(!isLoading){
    return <h1>Loading...............</h1>

  }

  return (
    <>
 <header className="fixed top-0 left-0 text-center w-full header bg-blue-400 py-4 text-white font-bold text-lg shadow-lg">
      <Header/>
      </header>
      {children}

    </>
  )
}

export default RootLayout