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
  

  const logout = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };
  return (
    <div className="flex justify-around items-center">
         <div>
         <Link href="/"><h2> Task Management Application</h2></Link>
         </div>
          

          <div>
          {userLoggedIn ?<div className='flex '>  <button onClick={logout}>logout</button> <p className='pl-3'>{email}</p> </div> :  <Link href="/login"><button> Login</button></Link>}
          </div>
          
          
        </div>
  )
}

export default Header