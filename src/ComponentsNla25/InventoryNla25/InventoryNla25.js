import React from "react";

function InventoryNla25(props)
{
    return(
        <div className="col-4">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>SKU</td>
                        <td>Name</td>
                        <td>Quantity</td>
                        <td>Price</td>
                        <td>Add</td>
                    </tr>
                </thead>
                <tbody>
                    {props.listInventory.map((item, key) => (
                        <tr key={key}>
                            <td>{item.sku}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity !== 0 ? 
                            <button type="button" className="btn btn-success" onClick={props.addToCart} value={item.sku}>Add</button>
                            : <button type="button" className="btn btn-secondary">OUT OF STOCK</button> }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default InventoryNla25;