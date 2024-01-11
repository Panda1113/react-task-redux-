import React from "react";

import {useDispatch, useSelector } from "react-redux";
import { itemSelect } from '../../redux/itemReducer'

const ItemList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.data);
  const handleClick = (e) => {
    const id = e.target.id;
    dispatch(itemSelect(id));
  }
  return (
    <div className="listItems-components">
      <ul>
        {
          items.map((item, index) => {
            return <li id={item.id} key={index} onClick={(e) => handleClick(e)}>{item.title}</li>
          })
        }
      </ul>
    </div>
  )
}

export default ItemList;