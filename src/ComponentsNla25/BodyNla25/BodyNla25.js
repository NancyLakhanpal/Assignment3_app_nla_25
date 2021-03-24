import React, { useEffect, useState } from "react";
import { addToCart, deleteItemFromCart, getCart, checkoutCart } from "../../ServicesNla25/CartServicesNla25";
import { getInventory } from "../../ServicesNla25/InventoryServiceNla25";
import CartNla25 from "../CartNla25/CartNla25";
import InventoryNla25 from "../InventoryNla25/InventoryNla25";

function BodyNla25()
{
const [inventory, setInventory] = useState([]);
const [cart, setCart] = useState([]);
const [price, setPrice] = useState(0);

useEffect(() => {
    async function loadInventory(){
        getInventory()
        .then(json=> {
            setInventory(json);
            const newCartContent =  loadCart();
            setCart(newCartContent);
            return newCartContent;
        }).then(newCartContent => {
            calculatePrice(newCartContent);
        })
        .catch(err => {
            console.error(err)
        });
    }
   loadInventory();
},
 [])

function loadInventory()
 {
     getInventory()
    .then(json=> {
        setInventory(json);
    })
    .catch(err => {
        console.error(err)
    });
 }

 async function addClicked(e)
 {
    let itemtoBeAdded={};
    inventory.forEach((item) => {
        if(item.sku === e.target.value)
        {
            itemtoBeAdded={sku:item.sku, name: item.name, quantity:1, price: parseFloat(item.price)};
        }
    })
    await addToCart(itemtoBeAdded);
    setCart(await loadCart());

     let p = (parseFloat(price)+parseFloat(itemtoBeAdded.price)).toFixed(2);
     setPrice(p);
 }

 async function deleteClicked(e)
 {
    await deleteItemFromCart(e.target.value);
    cart.forEach((item) =>{
        if(e.target.value === item.sku)
        {
            let p=0;
            p=(parseFloat(price) - parseFloat(item.price)).toFixed(2);
            setPrice(p);
        }
    })
    setCart(await loadCart());
 }

 async function checkoutClicked()
 {
     await checkoutCart(cart);
     setPrice(0);
     setCart(await loadCart());
     loadInventory();
 }

 async function loadCart() {
   return await getCart()
        .then(json => {
            setCart(json);
            return json;
        })
        .catch(err => {
            console.error(err)
        });
}

function calculatePrice(newCart)
{
    if(newCart.length>0)
    {
        let totalPrice = 0;
        newCart.forEach((item) =>{
            totalPrice += parseFloat(item.price);
          })
        setPrice(totalPrice.toFixed(2));
    } 
}

    return(
        <div className="row justify-content-center">
        <InventoryNla25 listInventory={inventory} addToCart={addClicked}/>
        <CartNla25 cartList={cart} deleteItem={deleteClicked} checkout={checkoutClicked} totalPrice={price}/>
        </div>
    )
}

export default BodyNla25;