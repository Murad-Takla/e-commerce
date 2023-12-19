import { getShoppingCart } from "../utilities/fakedb"

export const productsAndCartLoader = async () => {

    // gets product
    const productsData = await fetch('products.json')
    const products = await productsData.json()

    // get cart data

    const savedCart = getShoppingCart()
    const newCart = []
    for (const id in savedCart) {
        const productStoredInCart = products.find(product => product.id === id)
        
        if(productStoredInCart)
        {
        productStoredInCart.quantity = savedCart[id]
        newCart.push(productStoredInCart)
      
        }

    }
return {products , newCart}
}