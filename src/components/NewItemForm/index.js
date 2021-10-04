import React, { useState } from "react";
import './style.scss';

const NewItemForm = (props) => {
  const [inputTitleValue, setInputTitleValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if( !inputTitleValue.trim() ) return;
    
    try {
      const body = new FormData();
      body.append('title', inputTitleValue);
      fetch('http://localhost:8000/api/items/new', {
        method: 'POST',
        body: body
      }).then((response)=>{
        response.json().then((data)=>{
          props.getItems();
          setInputTitleValue('');
        });
      })
    } catch (error) {
      console.log(error);
    }
  }

  return <form id="form" onSubmit={(event)=>handleSubmit(event)}>
    <header>
      <h4>Form title</h4>
    </header>
    <main>
      <section>
        <label>Title</label>
        <input value={inputTitleValue} onChange={(event)=>setInputTitleValue(event.target.value)} type="text" name="title"/>
      </section>
      <section>
        <button type="submit" className="button">Send</button>
      </section>
    </main>
  </form>
}

export default NewItemForm;