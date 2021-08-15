import React, {useState} from 'react';
import './styles.css';
import './styles.scss';

const App = () => {
    const [title, setTitle] = useState('Hello React!');
    
    const [inputValue, setInputValue] = useState('')

    return (
        <>
            <h1>{title}</h1>
            <div><input placeholder="Enter your name" value={inputValue} onChange={(event)=>{setInputValue( event.target.value )}} /></div>
            <div><button onClick={()=>setTitle('Welcome to React, ' + (inputValue ? inputValue : 'Anonymous person') + '!'  )}>Send</button></div>
        </>
    )
}

export default App;