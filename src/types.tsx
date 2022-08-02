export type State = {
  main: MainState,
} 

export type MainState = {
  shoppingCart: []
} 

export type Product = {
    name: string,
    image: string,
    weight: string,
    remainingQuantity: string,
    vendor: string,
    rating: number,
    price: number,
    shipper: string,
    shippingFee: string,
}
