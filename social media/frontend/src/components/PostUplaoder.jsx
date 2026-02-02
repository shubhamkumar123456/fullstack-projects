import React, { useRef, useState } from 'react'
import { CiImageOn } from "react-icons/ci";
import { FaVideo } from "react-icons/fa";
import EmojiPicker from 'emoji-picker-react';
import { MdEmojiEmotions } from "react-icons/md";
import axios from 'axios';
import { useSelector } from 'react-redux';

const PostUplaoder = () => {
    const ctx = useSelector((state)=>state.user); //{}

    const [showEmoji, setshowEmoji] = useState(false);
    let inputRef = useRef()

    function handleEmojiClick(e){
        console.log(e.emoji)
        console.log(inputRef.current.value);
       
        // let x = "hello";
        // x = x+10;
        // console.log(x)  //hello10
        inputRef.current.value = inputRef.current.value+e.emoji
    }

    const [allFiles, setAllFiles] = useState('');  //blank string is false //[{}, {}, {}]

    // file data first send to cloudinary and then send to server
   async function handleFileChanger(e){
        // console.log(e.target)  //tag
        // console.log(e.target.files)  //
        let fileArr = [...e.target.files];
        console.log(fileArr)
        setAllFiles(fileArr)
        // run a loop on allFIles array and send each file to cloudinary
       let ansArr = fileArr.map(async(obj, i)=>{
                    let formData = new FormData();  // {}
            formData.append('upload_preset' ,'socialMedia' )
            formData.append('file',obj)
                    let res = await fetch('https://api.cloudinary.com/v1_1/ddayz7slx/upload',{
                method:"POST",
                body:formData
            })
            let data = await res.json();
            // console.log(data)
            // console.log(data.secure_url)
                return data.secure_url
        })

        // promise.All method , promise.allSettled  --> takes an array of promises and solved all promises together
        // console.log(ansArr)
        let ans = await Promise.all(ansArr)
        console.log(ans)

        let res1 = await axios.post('http://localhost:8090/posts/create',{title:inputRef.current.value, file:ans},{
            headers:{
                'Authorization':ctx.token
            }
        })
        console.log(res1.data);
    }

      // file d send to  then send to server directly than server will send to cloudinary
    // function handleFileChanger(e){
    //     // console.log(e.target)  //tag
    //     // console.log(e.target.files)  //
    //     let fileArr = [...e.target.files];
    //     console.log(fileArr)
    //     setAllFiles(fileArr)

    // }


  return (
    <div className='border relative border-black p-4 max-w-[400px]'>
        {/* <img src={URL.createObjectURL(file object)} alt="" /> */}
        <div className='flex gap-3  mb-3 items-center'>
            <img className='w-[50px] h-[50px] rounded-full' src="https://www.redsocial.com/wp-content/uploads/2023/11/why-your-photos-won_t-upload-to-facebook.webp" alt="" />
            <textarea ref={inputRef} placeholder='whats on your mind..?' className='w-full border border-gray-400 outline-none rounded-xl p-2' name="" id=""></textarea>
        </div>

       {allFiles &&<div className='flex flex-wrap gap-2 justify-center mx-auto bg-blue-400'>
                {
                    allFiles.map((obj, i)=>{
                        return <img className='w-[100px] '  src={URL.createObjectURL(obj)} alt="" />
                    })
                }
        </div>}
        <div className='flex justify-evenly items-center'>
            <label htmlFor="image">
                <CiImageOn size={25}/>
            </label>
            <input multiple onChange={handleFileChanger} type="file" hidden  id='image' />
            <label htmlFor="video">
                <FaVideo size={25}/>
            </label>
            <input type="file" hidden  id='video' />

                <MdEmojiEmotions onClick={()=>setshowEmoji(!showEmoji)} size={25}/>
            <div className='absolute top-full'>
                <EmojiPicker onEmojiClick={handleEmojiClick} searchDisabled={true} theme='dark' emojiStyle="apple" open={showEmoji} />
            </div>

            <button className='bg-green-600 px-4 py-1 rounded-md hover:bg-green-900 hover:text-white cursor-pointer'>Post</button>
        </div>
    </div>
  )
}

export default PostUplaoder
