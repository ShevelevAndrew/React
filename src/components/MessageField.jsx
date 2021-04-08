import React from 'react'
import classNames from 'classnames'
import Message from './Message'
import {AUTHORS} from './utils/constants'
// const initMess = [{id: 1, autor: AUTHORS.BOT, mess: 'Hi!'}]
const initMess = {
    id1: [{id: 1, autor: AUTHORS.BOT, mess: 'Hi!'}],
    id2: [],
    id3: [{id: 1, autor: AUTHORS.BOT, mess: 'Hi!'}]
}


function MessageField ( {chatId }) {
    const [messages, setMessages] = React.useState(initMess)

    const addMessage = React.useCallback((str) => {
        setMessages((prevMess) => ({
            ...prevMess, 
            [chatId]:
            [...prevMess[chatId], 
            {id: prevMess[chatId].length + 1, ...str}
        ]}))  
      
    },[chatId])

    React.useEffect (() => {
        const lastMessage = messages[chatId]?.[messages[chatId]?.length - 1]
        let timeout
        if (lastMessage?.autor === AUTHORS.ME)  {
            timeout = setTimeout(() => {
                addMessage({id: messages[chatId]?.length + 1 ,autor: AUTHORS.BOT, mess: 'how are you!'})
            } , 1000)
            
        }
        return () => clearTimeout(timeout)
    },[messages])

    return (
        <div className='messageField'>
            <h2>MessageField</h2>
            {messages[chatId]?.map(({id, autor, mess}) => ( 
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