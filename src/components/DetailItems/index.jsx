import React from "react";
import { Button } from "primereact/button"

import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../redux/itemReducer";

const ItemDetail = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.items.details);
    return (
        <div className="itemDetail-components">
            <div className="itemDetail-content">
                <h1>{items.title}</h1>
                <p>{items.description}</p>
            </div>
            <div className="itemDetail-action">
                <Button id={items.id} label="DELETE" icon="pi pi-check" disabled={items.length > 0 ? false : true} iconPos="right" severity="danger" onClick={() => dispatch(deleteItem(items.id))} />
            </div>
        </div>
    )
}

export default ItemDetail;