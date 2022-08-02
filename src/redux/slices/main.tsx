import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: "main",
    initialState: {
        shoppingCart: [
            {
                name: "Flour",
                image: "https://st2.depositphotos.com/1000348/6439/i/950/depositphotos_64399139-stock-photo-flour-and-wheat-ears.jpg",
                weight: "60",
                remainingQuantity: "6",
                vendor: "Garcia Food",
                rating: 4,
                price: 17.28,
                shipper: "Standard Shipping (TeddyShip)",
                shippingFee: "20.23",
            },
            {
                name: "Amala Flour",
                image: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/11/bleached-white-flour.jpg?quality=82&strip=1",
                weight: "50",
                remainingQuantity: "6",
                vendor: "Garcia Food",
                rating: 4,
                price: 35.43,
                shipper: "Standard Shipping (TeddyShip)",
                shippingFee: "17.28",
            },
            {
                name: "Dried Pepper",
                image: "https://thumbs.dreamstime.com/b/dry-pepper-picture-supermarket-made-china-red-made-chili-products-69187444.jpg",
                weight: "15",
                remainingQuantity: "20",
                vendor: "Garcia Food",
                rating: 4,
                price: 25.60,
                shipper: "Standard Shipping (TeddyShip)",
                shippingFee: "10.30",
            },
        ],
    },
    reducers: {
        removeFromCart: (state, { payload }) => {
            state.shoppingCart = state.shoppingCart.filter(
                (item, index) => index !== payload
            );
        },
    },
});

export const { removeFromCart } = mainSlice.actions;
export default mainSlice.reducer;
