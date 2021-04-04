import React from 'react'
import Button from '@material-ui/core/Button'
import { AccessAlarm, Send } from '@material-ui/icons'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& .MuiTextField-root': {
//         // margin: theme.spacing(0),
//         width: '25ch',
//         // hight: '500px',
//         // borderRadius: '50%',
//       },
//       rootB: {
//             padding: '10px',
//             borderRadius: '50%',
//       }

//     },
//   }));

const useStyles = makeStyles((theme) => ({
    root: {
      width: 350,
      height:20
    },
    iconButton: {
        width: 55,
        height: 55,
        borderRadius: '50%',
        backgroundColor: '#3fb3d2'
    },
  }));


function Input ( {onAddMessage}) {
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
            <form onSubmit={handleSubmit}  noValidate autoComplete="off">
                <TextField 
                    className={classes.root} 
                    type="text" 
                    value={value} 
                    onChange={handleChange} 
                    label="Message"
                />
                <Button 
                    className={classes.iconButton} 
                    type="submit" 
                    variant="contained"  
                    color="primary">
                    <Send />
                </Button>
            </form>
        </div>
    )
}

export default Input