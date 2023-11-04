import {LuLogIn} from 'react-icons/lu'
 
const Header = () => {
  return (
    <div className="flex justify-around items-center">
          <h2> Task Management Application</h2>
         <div className='flex justify-center items-center  '>
         <LuLogIn/>
         <button> SignIn</button>
         </div>
        </div>
  )
}

export default Header