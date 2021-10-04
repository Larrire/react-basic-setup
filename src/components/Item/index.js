import React from "react";
import { Link } from "react-router-dom";
import NeonButton from '../NeonButton';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

const Item = ({item, confirmDeleteItem}) => {
  
  return <article>
    <h4>{item.title}</h4>
    <div>
      <Link to={`/items/edit/${item.id}`} style={{marginRight: '10px'}} >
        <NeonButton className="button-edit">
          <FontAwesomeIcon icon={faPen} />
        </NeonButton>
      </Link>
      <NeonButton className="button-delete" onClick={()=>confirmDeleteItem(item.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </NeonButton>
    </div>
  </article>
}

export default Item;