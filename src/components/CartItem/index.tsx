import React from "react";
import { useDispatch } from "react-redux";

import { removeFromCart } from "../../redux/slices";

export const CartItem = ({ product, index }) => {
    const dispatch = useDispatch();

    const removeProductFromCart = () => {
        dispatch(removeFromCart(index));
    };

    return (
        <div className="relative flex items-start xs:items-center flex-col xs:flex-row border-2 rounded-lg p-2 w-30rem">
            <div className="w-24 mx-1 m-2 xs:m-0 mb-6 xs:mb-0">
                <img
                    alt="cart_item_image"
                    className="w-24 h-20 rounded-xl object-cover shadow-xl"
                    src={product.image}
                />
            </div>
            <div className="flex flex-col flex-1 px-4">
                <div className="flex items-center justify-between w-full">
                    <p className="text-green-700 font-bold">{product.name}</p>
                    <p className="text-gray-400 font-bold text-sm">
                        {product.weight} kg
                    </p>
                </div>
                <div className="flex items-center">
                    <p className="text-gray-600 text-sm mr-8">Status:</p>
                    <p className="text-green-700 font-bold text-sm">
                        InStock ({product.remainingQuantity} left)
                    </p>
                </div>
                <div className="flex items-center">
                    <p className="text-gray-600 text-sm mr-6">Vendor:</p>
                    <p className="text-green-700 font-bold text-sm">
                        {product.vendor}
                    </p>
                </div>
                <div className="flex items-center my-1 text-yellow-800">
                    {Array(product.rating)
                        .fill(0)
                        .map((rating, index) => (
                            <img
                                key={index}
                                alt="rating_image"
                                className="w-5 h-5"
                                src="/assets/rating_filled.svg"
                            />
                        ))}
                    {Array(5 - product.rating)
                        .fill(0)
                        .map((rating, index) => (
                            <img
                                key={index}
                                alt="rating_image"
                                className="w-4 h-4"
                                src="/assets/rating_open.svg"
                            />
                        ))}
                </div>
                <div className="flex items-center">
                    <p className="text-green-700 font-bold text-sm">
                        ${product.price}
                    </p>
                </div>
                <div className="flex items-center my-2">
                    <p className="">
                        <img
                            alt="wishlist_image"
                            className="w-4 h-4"
                            src="/assets/like_icon.svg"
                        />
                    </p>
                    <p className="text-gray-500 ml-2 text-sm">
                        Add to wishlist
                    </p>
                </div>
                <div className="flex items-center my-1">
                    <p className="text-xs text-gray-600">Shipper:</p>
                    <p className="text-gray-600 ml-2 text-sm font-bold">
                        {product.shipper}
                    </p>
                </div>
                <div className="flex items-center">
                    <p className="text-xs text-gray-600">Shipping Fee:</p>
                    <p className="text-gray-600 ml-2 text-sm font-bold">
                        ${product.shippingFee}
                    </p>
                </div>
            </div>
            <div
                onClick={removeProductFromCart}
                className="absolute right-4 top-4 xs:static flex items-center justify-center cursor-pointer text-red-300 h-6 w-6 pb-1 border-2 border-red-400 rounded-full text-xl"
            >
                ×
            </div>
        </div>
    );
};
