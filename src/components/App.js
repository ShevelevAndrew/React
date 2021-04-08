import React from 'react'
import {Link, useParams} from 'react-router-dom'
import classNames from 'classnames'
import ChatList from './ChatList'
import MessageField from './MessageField'


export const App = () => {
    const {chatId} = useParams()
    return (
        <>
            <div className='header1'>
                <h1>Hello react - HW4 </h1>
                <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/profile'>Profile</Link>
                </li>
            </ul>
            
            </div>
            <div className='body-message'>
                <ChatList />
                {chatId && <MessageField chatId={chatId} /> }
                {/* <MessageField className={} chatId={chatId} /> */}
                
            </div>    
        </>
    )
}

// export default App