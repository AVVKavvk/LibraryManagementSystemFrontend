import { Link } from "react-router-dom";
import AdminNavbar from './assets/adminNabar.json'
import { getItem, IsAdmin, IsLogged } from "./utils/localStorage";
import { MdAccountCircle } from "react-icons/md";
const Navbar = ()=>{
  const isadmin= getItem(IsAdmin)
  // const islogged= getItem(IsLogged)
  const islogged= false
  return (
    <div className="bg-slate-200">
      <div className="mx-auto max-w-[1200px] flex  overflow-hidden  justify-between   items-center  md:px-20 py-3">
    <Link to="/"><img src="https://i.ibb.co/2cNGXmV/librohub.png" width="120px" alt="" /></Link>
    {
      isadmin ? 
      
      <ul className="flex gap-8 text-lg ">

        {AdminNavbar?.map((item)=>{
          return (
            <Link to={item?.link} className=" hover:underline" key={item?.tag}> {item.tag}</Link>
          )
        })}

      </ul> 

      
      
      : <div></div>
    }

    {
        islogged 
        ? 
        <Link to="/account" className="bg-white rounded-full w-[50px] h-[50px] flex justify-center items-center ">
          <MdAccountCircle size={40} />
        </Link>
        :
        <div className="flex gap-10 text-lg">
          <Link to="/signup" className=" bg-white rounded py-2 px-3 hover:underline">Sign In</Link>
          <Link  to ="/login"className=" bg-white rounded py-2 px-3 hover:underline">Login</Link>
        </div>
      }

    </div>
    </div>
  )
}

export default Navbar