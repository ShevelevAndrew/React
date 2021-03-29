import React from "react";
import {AUTHORS} from './utils/constants'

function Message ( { strMessage } ) {
    const inputText = React.createRef()
    
    const sendMessage = () => {
        strMessage({autor: AUTHORS.ME, mess: inputText.current.value})
        inputText.current.value = ''
    }
    return (
        <div>
            <h2>Message</h2>
            <input type="text" ref={inputText} />
            <button onClick={sendMessage}>Send message</button>
        </div>
    )
}

export default Message