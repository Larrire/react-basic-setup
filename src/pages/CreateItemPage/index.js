import React, { useState } from "react";
import { Redirect } from "react-router";
import { Link, useHistory } from "react-router-dom";
import Template from "../../components/Template";
import ItemForm from "../../components/ItemForm";
import NeonButton from "../../components/NeonButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";

const CreatePage = () => {    
  const history = useHistory();

  const [title, setTitle] = useState('');

  const onSubmit = () => {
    const body = new FormData();
    body.append('title', title)

    fetch('http://localhost:8000/api/items/new', {
      method: 'POST',
      body: body,
    }).then(response => {
      response.json().then( data => {
        if( data && data.id ) history.replace('/items');
      });
    })
  };
  

  return <Template>
    <header className="header-main">
      <h2>Add new item</h2>
      <Link to="/items">
        <NeonButton>
            <FontAwesomeIcon icon={faUndoAlt} /> <span>Return</span>
        </NeonButton>
      </Link>
    </header>
    <ItemForm
      onSubmit={onSubmit}
      title={title}
      setTitle={setTitle}
    />
  </Template>
}

export default CreatePage;