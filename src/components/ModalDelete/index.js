import React from "react";
import Modal from "../Modal";
import NeonButton from "../NeonButton";
import './style.scss';

const ModalDelete = ({visible, setVisible, reloadItems}) => {

  const confirmedDelete = () => {
    fetch(`http://localhost:8000/api/items/delete/${visible}`, {
      method: 'POST',
    }).then((response) => {
      response.json().then((data)=>{
        setVisible(false);
        reloadItems();
      });
    }).catch((error)=>{
      alert('ocorreu um erro inesperado');
    });
  }

  return <Modal 
    visible={visible} 
    setVisible={setVisible}
    style={{
      height:'auto',
      width: '450px'
    }}
  >
    <div className="modal-delete">
      <h2>Alert</h2>
      <h4>Are you sure you want to delete this item?</h4>
      <div className="div-buttons">
        <NeonButton className="delete-button" onClick={()=>confirmedDelete()}>Yes</NeonButton>
        <NeonButton className="cancel-button" onClick={()=>setVisible(false)}>No</NeonButton>
      </div>
    </div>
  </Modal>
}

export default ModalDelete;