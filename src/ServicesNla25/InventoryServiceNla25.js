export function getInventory()
{
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/inventoryNla25`)
    .then(response => response.json())
}