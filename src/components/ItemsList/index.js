import React from "react";
import Item from "../Item";

export default ({data, confirmDeleteItem}) => {
  return data.map(item => <Item key={item.id} item={item} confirmDeleteItem={confirmDeleteItem}/>)
}