import React from 'react'
import ChatList from './ChatList'
import MessageField from './MessageField'

function App() {
    return (
        <>
            <div className='header'>
                <h1>Hello react - HW3 </h1>
            </div>
            <div className='body-message'>
                <MessageField />
                <ChatList />
            </div>    
        </>
    )
}

export default App