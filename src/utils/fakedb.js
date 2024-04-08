// add data to local storage
const addToDB = (id) => {
   let shoppingCart = {};

//    get previous data from localstorage
const storedCart = localStorage.getItem('shopping-cart')

if(storedCart){
  shoppingCart = JSON.parse(storedCart)
}

// ADD quantity
const quantity = shoppingCart[id]
if(quantity){
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
}else{
    shoppingCart[id] = 1;
    // shoppingCart : {
    //     '21827481984' : 1
    // }
}
localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

}

// get stored data from cart 
const getStoredCart = () => {
    let shoppingCart = {};

    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart
}

// remove specific element from local storage

const removeItem = (id) => {
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}

// clear all data from local storage

const deleteShoppingCart = ()=> {
    localStorage.removeItem('shopping-cart')
}

export {addToDB, getStoredCart, removeItem, deleteShoppingCart}