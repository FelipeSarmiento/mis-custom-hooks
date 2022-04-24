import {useState} from 'react'

export const useCounter = ( initState = 10) => {

    const [counter, setState] = useState(initState);

    const increment = () => {
      setState( counter + 1)
    }

    const decrement = () => {
        setState( counter - 1)
    }

    const reset = () => {
      setState(initState)
    }

    return {
      counter,
      increment,
      decrement,
        reset
    };

}