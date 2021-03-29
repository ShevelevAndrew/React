import React from 'react'
import Message from './Message'
import {AUTHORS} from './utils/constants'
const initMess = []

function MessageField () {
    const [messages, setMessages] = React.useState(initMess)
    const [newMess, setNewMess] = React.useState(null)

    const newMessage = (str) => {
        setMessages((prevMess) => [...prevMess, str])
        setNewMess(!newMess)
    }

    React.useEffect (() => {
        newMess !== null ? setMessages((prevMess) => [...prevMess, {autor: AUTHORS.BOT, mess: 'how are you!'}]) : null
    },[newMess])

    return (
        <div>
            {console.log('render')}
            <h2>MessageField</h2>
            {messages ? messages.map((text, i) => ( <div key={i}>{text.autor}: {text.mess}</div>)) : ''}
            <Message strMessage={newMessage} />
        </div>
    )
} 


export default MessageField