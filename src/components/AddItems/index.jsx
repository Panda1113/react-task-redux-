import React, { useState } from "react";
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { InputTextarea } from "primereact/inputtextarea"

import { useDispatch } from "react-redux";
import { addItem } from '../../redux/itemReducer'

const AddItems = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const uniqueString = () => {
    const randomPart = Math.random().toString(36).substr(2, 9); // Random string part
    const timePart = Date.now().toString(36); // Current timestamp part
    return randomPart + timePart; // Concatenate both parts for a unique string
  };

  const initializeVariable = () => {
    setTitle('');
    setDescription('')
  }

  const handleClick = () => {
    if (title && description) {
      const newArry = {};
      newArry.id = uniqueString();
      newArry.title = title;
      newArry.description = description;

      dispatch(addItem(newArry));
      initializeVariable();
    }
  }

  return (
    <div className="addItems-components">
      <div className="card flex justify-content-center title">
        <InputText value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Input the title..." style={{ width: "50%" }} />
      </div>
      <div className="card flex justify-content-center description">
        <InputTextarea value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: "100%" }} placeholder="Input the description..." rows={5} cols={30} />
      </div>
      <div>
        <Button label="SAVE" icon="pi pi-check" iconPos="right" onClick={handleClick} />
      </div>
    </div>
  )
}

export default AddItems;