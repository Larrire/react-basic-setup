import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

const Modal = ({
    visible, 
    setVisible, 
    itemId, 
    style = {},
    Header,
    Footer,
    children
  }) => {
  if( !visible ) return null;

  const ModalContent = styled.div`
    background-color: ${style.backgroundColor ?? '#fff'};
    height: ${style.height ?? '500px'};
    width: ${style.width ?? '500px'};
    box-shadow: ${style.boxShadow ?? '3px 3px 10px lightgray'};
    border-radius: 10px;
  `;

  return <div className="modal">
    <ModalContent className="modal-content">
      <div className="modal-topper">
        <button onClick={()=>setVisible(false)}><FontAwesomeIcon icon={faTimes} /></button>
      </div>
      { Header && <header className="modal-header"><Header/></header> }
      <div className="modal-body">
        {children}
      </div>
      { Footer && <footer className="modal-footer"><Footer/></footer> }
    </ModalContent>
  </div>
}

export default Modal;