export function getCart()
{
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/cartNla25`)
    .then(response => response.json())
}

export function addToCart(newItem)
{
    const item = JSON.stringify(newItem)
    console.log("in service "+item);
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/cartNla25`,
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: item
    })
    .then(response => response.json())
}

export async function deleteItemFromCart(id)   {
    const deleteItem = JSON.stringify({"sku" : id});
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/cartNla25`,
    {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: deleteItem
    })
    .then (response => response.json())
}

export async function checkoutCart(cartList)   {
    const checkoutList = JSON.stringify({"cart" : cartList});
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/cartNla25/checkout`,
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: checkoutList
    })
    .then (response => response.json())
}
