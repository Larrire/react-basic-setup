import React from "react";
import './style.scss';

const ItemForm = ({
  onSubmit,
  title,
  setTitle
}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    if( !title.trim() ) return;

    if( onSubmit ){
      onSubmit(event);
      return;
    }
  }

  return <form id="item-form" onSubmit={(event)=>handleSubmit(event)} autoComplete="off">
    <section>
        <label>Title</label>
        <input value={title} onChange={(event)=>setTitle(event.target.value)} type="text" name="title"/>
      </section>
      <section>
        <button type="submit" className="button">Submit</button>
      </section>
  </form>
}

export default ItemForm;