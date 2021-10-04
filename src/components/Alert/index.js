import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Modal from './../Modal';

const Alert = ({type, title, message, buttons=[], width='350px', height='200px', confirmation={}}) => {
  let background; 

  switch(type){
    case 'danger':
      
    break;
  }

  return <Modal
    height={height}
    width={width}
  >
    <FontAwesomeIcon className="alert-icon" />
    <h3>Alert title</h3>
    <p>Mensagem do alerta</p>
    <div className="div-buttons">
      {buttons.map(button => <Button action={button.action}>{button.title}</Button>)}
    </div>
  </Modal>
}