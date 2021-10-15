import React from 'react'
import { FiMessageCircle, FiPhone, FiVideo } from "react-icons/fi";

export default function Blocks() {
    return (
        <div className='block-container'>
            <div className='message-block'> 
                 <i> <FiMessageCircle /> </i> 
                 <p>Message</p> 
            </div>
            <div className='call-block'> 
               <i> <FiPhone/> </i> 
               <p>Call</p> 
            </div>
            <div className='video-block'> 
               <i> <FiVideo /> </i>
               <p>Video</p> 
            </div>
        </div>
    )
}
