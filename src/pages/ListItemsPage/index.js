import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Item from '../../components/Item';
import NeonButton from '../../components/NeonButton';
import ItemsList from '../../components/ItemsList';
import ModalDelete from '../../components/ModalDelete';
import './styles.scss';
import NewItemForm from '../../components/NewItemForm';
import Modal from '../../components/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import Template from '../../components/Template';

const ListPage = () => {
    const [dados, setDados] = useState([]);
    const [loadDone, setLoadDone] = useState(false);
    const [fetchError, setFetchError] = useState(null);
    const [editing, setEditing] = useState(false);
    const [deleting, setDeleting] = useState(null);
    const [teste, setTeste] = useState(false);
    const [adding, setAdding] = useState(false);

    const confirmDeleteItem = (itemId) => {
      setDeleting(itemId);
    }

    const handleErrorFetch = (error) => {
      let typeError;
      switch(error.message){
        case 'Failed to fetch':
          typeError = 'Ocorreu um erro ao tentar buscar os items!';
          break;
        default:
          typeError = 'Ocorreu um erro inesperado!';
          break;
      }

      setFetchError(typeError);
    }

    const getItems = () => {
      fetch('http://localhost:8000/api/items').then( (response)=>{
        response.json().then((data)=>{
          setDados(data);
          setFetchError(null);
        });
      }).catch((error)=>{
        handleErrorFetch(error);
      });
    }

    useEffect(()=>{
      getItems();
    }, []);

    return (
        <Template>
          <header className="header-main">
            <h2>Items</h2>
            <Link to="/items/add">
              <NeonButton>
                  <FontAwesomeIcon icon={faPlus} /> <span>Add new item</span>
              </NeonButton>
            </Link>
          </header>
          
          { dados.length > 0 && !editing && !adding && !fetchError && 
            <ItemsList data={dados} confirmDeleteItem={confirmDeleteItem}/> 
          }
          
          { dados.length === 0 && !editing && !adding && !fetchError && 
            <div className="no-items-alert">Não há itens cadastrados</div> 
          }

          { fetchError && !editing && !adding && 
            <div className="div-error">{fetchError}</div> 
          }

          <ModalDelete visible={deleting} setVisible={setDeleting} reloadItems={getItems} />

          <Modal style={{backgroundColor:"#fff", height:'auto', width:'400px'}} visible={teste} setVisible={setTeste} 
            Header={()=>{return<div>Opa</div>}}
            Footer={()=>{return<div>Teste</div>}}
          >
            <h1>Teste</h1>
          </Modal>
        </Template>
    )
}

export default ListPage;