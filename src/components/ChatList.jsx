import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { Link, useParams } from "react-router-dom";

const chatlist = [
    {id: "id1", chatname: 'chat 1'}, 
    {id: "id2", chatname: 'chat 2'}, 
    {id: "id3", chatname: 'chat 3'} 
]

function ChatList () {

    return (
        <div className='chatList'>
            <h2>ChatList</h2>
                <List component="nav" aria-label="secondary mailbox folder">
                {chatlist.map(({id, chatname}) => (
                    <ListItem key={id}>
                        <Link to={`/chats/${id}`}>{chatname}</Link>
                    </ListItem>
                ))}
                </List>
        </div>
    )
}

export default ChatList