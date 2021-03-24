import React from "react";

function CartNla25(props)
{
    return(
    <div className="col-4">
        <table className="table table-striped">
                <thead>
                    <tr>
                        <td>Item</td>
                        <td>Quantity</td>
                        <td>Price</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {props.cartList.length > 0 ? 
                    props.cartList.map((item, key) => (
                        <tr key={key}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td><button type="button" className="btn btn-danger" value={item.sku} onClick={props.deleteItem}>Delete</button></td>
                        </tr>
                    )): <tr></tr>}

                </tbody>
        </table>
        
        {props.totalPrice !== 0 ?
        <div className="row justify-content-between">
    <div className="col-4">
    <button type="button" className="btn btn-primary" onClick={props.checkout}>Checkout</button>
    </div>
    <div className="col-4">
     <h4>${props.totalPrice}</h4>
    </div>
  </div>
  : <div></div> }
    </div>
    )
}

export default CartNla25;