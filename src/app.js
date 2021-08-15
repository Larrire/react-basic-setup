import React, {useState} from 'react';
import './styles.css';
import './styles.scss';

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

export default App;