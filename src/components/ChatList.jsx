import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const chatlist = [{id: 1, chatname: 'chat name1'}, {id: 2, chatname: 'chat name2'}, {id: 3, chatname: 'chat name3'} ]

function ChatList () {
    return (
        <div className='chatList'>
            <h2>ChatList</h2>
                <List component="nav" aria-label="secondary mailbox folder">
                {chatlist.map(({id, chatname}) => (
                    <ListItem key={id}>
                        <ListItemText primary={chatname} />
                    </ListItem>
                ))}
                </List>
        </div>
    )
}

export default ChatList