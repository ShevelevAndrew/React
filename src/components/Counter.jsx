import React from 'react'

function Counter () {
    const [counter, setActive] = React.useState(0)

    const onClickButton = () => {
        setActive(counter + 1)
    }

    return (
      <div>
          <button className='button-line' onClick={onClickButton}>{!counter ? '+1' : counter}</button>
      </div>  
    )
}


export default Counter