import React, {useState} from 'react';
import reactDOM from 'react-dom'

const App = () => {
    const [title, setTitle] = useState('Hello React!');
    
    const [inputValue, setInputValue] = useState('')

    return (
        <>
            <h1>{title}</h1>
            <button onClick={()=>setTitle(inputValue)}>Click me</button>
            <input value={inputValue} onChange={(event)=>{setInputValue( event.target.value )}} />
        </>
    )
}

reactDOM.render(<App/>, document.getElementById('app'));