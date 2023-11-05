'use client'
import { authKey } from '@/constants/storage';
import { getUserInfo, isLoggedIn, removeUserInfo } from '@/services/auth.service';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {LuLogIn} from 'react-icons/lu'
 
const Header = () => {

  const userLoggedIn = isLoggedIn();
  
  
  const router = useRouter();
    const {email} = getUserInfo();
   console.log(email)
  console.log(userLoggedIn,  'from header')

  const logout = () => {
    removeUserInfo(authKey);
    router.push("/register");
  };
  return (
    <div className="flex justify-around items-center">
          <Link href="/"><h2> Task Management Application</h2></Link>
          

          {userLoggedIn ?<>  <button onClick={logout}>logout</button> <p>{email}</p> </> :  <Link href="/login"><button> Login</button></Link>}
          
          
        </div>
  )
}

export default Header