import React, { useState } from 'react'
import { CiImageOn } from "react-icons/ci";
import { FaVideo } from "react-icons/fa";
import EmojiPicker from 'emoji-picker-react';
import { MdEmojiEmotions } from "react-icons/md";

const PostUplaoder = () => {
    const [showEmoji, setshowEmoji] = useState(false);

  return (
    <div className='border relative border-black p-4 max-w-[400px]'>
        <div className='flex gap-3  mb-3 items-center'>
            <img className='w-[50px] h-[50px] rounded-full' src="https://www.redsocial.com/wp-content/uploads/2023/11/why-your-photos-won_t-upload-to-facebook.webp" alt="" />
            <textarea placeholder='whats on your mind..?' className='w-full border border-gray-400 outline-none rounded-xl p-2' name="" id=""></textarea>
        </div>
        <div className='flex justify-evenly items-center'>
            <label htmlFor="image">
                <CiImageOn size={25}/>
            </label>
            <input type="file" hidden  id='image' />
            <label htmlFor="video">
                <FaVideo size={25}/>
            </label>
            <input type="file" hidden  id='video' />

                <MdEmojiEmotions onClick={()=>setshowEmoji(!showEmoji)} size={25}/>
            <div className='absolute top-full'>
                <EmojiPicker searchDisabled={true} theme='dark' emojiStyle="apple" open={showEmoji} />
            </div>

            <button className='bg-green-600 px-4 py-1 rounded-md hover:bg-green-900 hover:text-white cursor-pointer'>Post</button>
        </div>
    </div>
  )
}

export default PostUplaoder
