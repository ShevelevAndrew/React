import React from "react";
import {AUTHORS} from './utils/constants'
import Input from './input'

function Message ( { strMessage } ) {
    
    const sendMessage = (newMessage) => {
        strMessage({autor: AUTHORS.ME, mess: newMessage})
    }
    return (
        <div className='message'>
            <h2>Message</h2>
            <Input onAddMessage={sendMessage} />
        </div>
    )
}

export default Message