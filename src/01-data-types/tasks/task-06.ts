/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type marketplace = {
    productinfo :  string,
    productcode : number,
    productname : string,
    price : number,
    quantity : string,
    weightKG : number,
    rating: number,
    discount : boolean, 
}

const product1 = {
    productinfo : "info"  ,
    productcode : 593879 ,
    productname : "citato" ,
    price : 25000 ,
    quantity : "available" ,
    weightKG : 0.60 ,
    rating: 4.4 ,
    discount : false ,
}

const product2 = {
    productinfo : "info"  ,
    productcode : 924791,
    productname : "nesafe" ,
    price : 50000,
    quantity : "available",
    weight : 0.23,
    rating: 4.7 ,
    discount : true ,
}

const product3 = {
    productinfo : "info" ,
    productcode : 5692 ,
    productname : "tembak",
    price : 78000 ,
    quantity : "available" ,
    weight : 1.2 ,
    rating: 5 ,
    discount : false ,
}

const product = [product1,product2,product3]

product.forEach(product => {
    console.log(product)
})