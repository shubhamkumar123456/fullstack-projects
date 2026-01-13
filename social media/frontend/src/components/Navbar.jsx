import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Navbar = () => {
  let ctx = useSelector((state)=>state.user);
  console.log(ctx)
  return (
    <div className='bg-black text-white h-[70px] flex justify-between items-center px-4'>
      <h3>SocialChat</h3>
      <div>
        <ul className='flex gap-5 justify-center items-center'>
        <li><Link>Home</Link></li>
        <li><Link>Profile</Link></li>
        <li><Link>Followers</Link></li>
        <li><Link>Followings</Link></li>
        <li><button>Logout</button></li>
      </ul>

      </div>

      <div className='w-[50px] h-[50px] rounded-full border'>
        <img className='w-full h-full rounded-full object-cover object-center' src={ctx.login===true? ctx.userDetails.profilePic : "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1906669723.jpg"} alt="" />
    {/* <h1>{ctx?.userDetails?.name}</h1> */}
      </div>
     
    </div>
  )
}

export default Navbar
