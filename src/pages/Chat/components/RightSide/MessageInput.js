import React, { useState } from 'react'
import Button from '../../../../components/Button';
import useLogin from '../../../../hooks/useLogin'

export default function MessageInput() {

    const {handleSentMessage } = useLogin();
 
    const [message, setMessage] = useState('');

    return (
        <div className="message-input-container">
           <input 
            value = {message}
            placeholder="Type" 
            onChange={(e) => {
                setMessage(e.target.value)
            }} /> 
            <Button text="send" onClick={() =>{
                handleSentMessage(message)
                setMessage('')
            }} />
        </div>
    )
}
