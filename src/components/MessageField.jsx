import React from 'react'
import classNames from 'classnames'
import Message from './Message'
import {AUTHORS} from './utils/constants'
const initMess = [{id: 1, autor: AUTHORS.BOT, mess: 'Hi!'}]

function MessageField () {
    const [messages, setMessages] = React.useState(initMess)

    const addMessage = React.useCallback((str) => {
        setMessages((prevMess) => [...prevMess, {id: prevMess.length + 1, ...str}])  
      
    },[])

    React.useEffect (() => {
        const lastMessage = messages[messages.length - 1]
        let timeout
        if (lastMessage?.autor !== AUTHORS.BOT)  {
            timeout = setTimeout(() => {
                addMessage({id: messages.length + 1 ,autor: AUTHORS.BOT, mess: 'how are you!'})
            } , 1000)
            
        }
        return () => clearTimeout(timeout)
    },[messages])

    return (
        <div className='messageField'>
            <h2>MessageField</h2>
            {messages?.map(({id, autor, mess}) => ( 
                <div 
                    className={classNames({
                        bot: autor == AUTHORS.BOT,
                        me: autor == AUTHORS.ME
                    })} 
                    key={id}>{autor}: {mess}
                </div>
                ))}
            <Message strMessage={addMessage} />
        </div>
    )
} 


export default MessageField