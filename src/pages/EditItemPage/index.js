import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Template from "../../components/Template";
import ItemForm from "../../components/ItemForm";
import NeonButton from '../../components/NeonButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";

const EditItemPage = () => {

  const [title, setTitle] = useState('');

  const { id } = useParams();

  const getItem = () => {
    fetch(`http://localhost:8000/api/items/find/${id}`).then(response => {
      response.json().then(data => {
        console.log(data);
        setTitle(data.title);
      });
    });
  }

  useEffect(()=>{
    getItem()
  }, [])

  const onSubmit = (event) => {
    const body = new FormData();
    body.append('title', title);
    body.append('id', id);

    fetch(`http://localhost:8000/api/items/update`, {
      method: 'POST',
      body: body
    }).then(response => {
      response.json().then(data => {
        console.log(data);
        getItem();
      });
    });
  }

  return <Template>
    <header className="header-main">
      <h2>Editing item</h2>
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

export default EditItemPage;