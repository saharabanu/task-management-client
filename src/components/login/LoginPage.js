/* eslint-disable react/no-unescaped-entities */
'use client'

import { useUserLoginMutation } from "@/redux/api/authApi";
import { getUserInfo, isLoggedIn, storeUserInfo } from "@/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const LoginPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [userLogin] = useUserLoginMutation() ;
  const router = useRouter()
  
  const onSubmit = async (data) => {
    try {
    
      const res = await userLogin({...data}).unwrap();
      
     
    
      
      if(res?.accessToken){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User LoggedIn Successffuly',
          showConfirmButton: false,
          timer: 1500
        })
    
        router.push('/')
         
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'User Not LoggedIn! Please ,type valid email and password',
          
        })
      }
      storeUserInfo({ accessToken: res?.accessToken });
    }
    catch(err) {
      toast.error(err.message)
    }
    
  };



  return (
    <>
    
        <div className="max-w-3xl mx-auto">
        
      <div className="block max-w-lg rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mt-36">
      <h2 className="text-center text-xl pb-5 font-bold">Please Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
         
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              {...register("email")}
              name="email"
              required
              className="peer block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput7"
              placeholder="Name"
            />
            <label
              for="exampleInput7"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary "
            >
              Your Email
            </label>
          </div>
         
          <div className="relative mb-6" data-te-input-wrapper-init>
            <input
              {...register("password")}
              name="password"
              required
              className="peer block min-h-[auto] w-full rounded border-0 bg-gray-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput7"
              placeholder="Password"
            />
            <label
              for="exampleInput7"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary "
            >
              Your Password
            </label>
          </div>

          

          <input
            type="submit"
            value="Login"
            className="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-blue-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light"
          />
        </form>
        <br /><br />
        <p className="text-lg">Don't Have an Account ? Please <Link href="/register" className="text-blue-700">Register</Link></p>
      </div>
      </div>
      </>
    
  )
}

export default LoginPage