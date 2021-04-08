import React from 'react'
import Button from '@material-ui/core/Button'
import { Send } from '@material-ui/icons'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        height: 20

    },
    iconButton: {
        width: 50,
        height: 60,
        borderRadius: '50%',
        backgroundColor: '#3fb3d2'
    },
}));


function Input({ onAddMessage }) {
    const [value, setValue] = React.useState('')
    const classes = useStyles();

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onAddMessage(value)
        setValue('')
    }
    return ( 
        <div>
            <form onSubmit = { handleSubmit } noValidate autoComplete = "off" >
                <TextField className = { classes.root }
                    type = "text"
                    value = { value }
                    onChange = { handleChange }
                    label = "Message" />
                <Button className = { classes.iconButton } type = "submit"
                    variant = "contained"
                    color = "primary">
                <Send />
                </Button> 
            </form> 
        </div>
    )
}

export default Input