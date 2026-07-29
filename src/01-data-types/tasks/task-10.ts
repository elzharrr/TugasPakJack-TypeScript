/**
 * An online shopping platform allows customers to purchase multiple products in one transaction. 
 * Every product added to the shopping cart stores the product code, product name, unit price, 
 * quantity purchased, and whether the product is eligible for free shipping.
 * Today, one customer added the following products to the cart.

| Product Code | Product Name        | Price   | Quantity | Free Shipping |
| ------------ | ------------------- | ------- | -------- | ------------- |
| KB001        | Mechanical Keyboard | 850000  | 1        | Yes           |
| MS002        | Wireless Mouse      | 275000  | 2        | Yes           |
| HD003        | External SSD 1TB    | 1650000 | 1        | No            |
| HP004        | Gaming Headset      | 720000  | 1        | Yes           |

 * Task:
 * 1. Define a proper type for the product information.
 * 2. Store the product data in a single collection.
 * 3. Display the product data using console.log.
 */

type cart = {
    procode: string,
    proname: string,
    price: number,
    quantity: number,
    freeongkir: boolean
}

const shop : cart[] = [
    {procode: "KB001", proname: "Mechanical Keyboard", price: 850000, quantity: 1, freeongkir: true},
    {procode: "MS002", proname: "Wireless Mouse", price: 275000, quantity: 2, freeongkir: true},
    {procode: "HD003", proname: "External SSD 1TB", price: 1650000, quantity: 1, freeongkir: false},
    {procode: "HP004", proname: "Gaming Headset", price: 720000, quantity: 1, freeongkir: true}
]

console.log(shop)
