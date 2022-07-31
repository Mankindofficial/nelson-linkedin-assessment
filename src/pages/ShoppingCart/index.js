import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <div className="w-full">
            <h1 className="font-bold text-3xl text-center my-4">
                Musliudeen Makinde Code Assessment
            </h1>
            <div className="w-full flex items-center justify-center">
                <div className="border-2 rounded-lg p-6 my-16">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-600">Shopping Cart (3)</span>
                        <span className="text-gray-600 text-lg">×</span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center border-2 rounded-lg p-2 w-30rem">
                            <div className="w-24 mx-1">
                                <img
                                    className="w-24 h-20 rounded-xl object-cover shadow-xl"
                                    src="https://st2.depositphotos.com/1000348/6439/i/950/depositphotos_64399139-stock-photo-flour-and-wheat-ears.jpg"
                                />
                            </div>
                            <div className="flex flex-col flex-1 px-4">
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-green-700 font-bold">
                                        Flour
                                    </p>
                                    <p className="text-gray-400 font-bold text-sm">
                                        60 kg
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-gray-600 text-sm mr-8">
                                        Status:
                                    </p>
                                    <p className="text-green-700 font-bold text-sm">
                                        InStock (6 left)
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-gray-600 text-sm mr-6">
                                        Vendor:
                                    </p>
                                    <p className="text-green-700 font-bold text-sm">
                                        Garcia Food
                                    </p>
                                </div>
                                <div className="flex items-center my-1 text-yellow-800">
                                    <img
                                        className="w-5 h-5"
                                        src="/assets/rating_filled.svg"
                                    />
                                    <img
                                        className="w-5 h-5"
                                        src="/assets/rating_filled.svg"
                                    />
                                    <img
                                        className="w-5 h-5"
                                        src="/assets/rating_filled.svg"
                                    />
                                    <img
                                        className="w-5 h-5"
                                        src="/assets/rating_filled.svg"
                                    />
                                    <img
                                        className="w-4 h-4"
                                        src="/assets/rating_open.svg"
                                    />
                                </div>
                                <div className="flex items-center">
                                    <p className="text-green-700 font-bold text-sm">
                                        $17.28
                                    </p>
                                </div>
                                <div className="flex items-center my-2">
                                    <p className="">
                                        <img
                                            className="w-4 h-4"
                                            src="/assets/like_icon.svg"
                                        />
                                    </p>
                                    <p className="text-gray-500 ml-2 text-sm">
                                        Add to wishlist
                                    </p>
                                </div>
                                <div className="flex items-center my-1">
                                    <p className="text-xs text-gray-600">
                                        Shipper:
                                    </p>
                                    <p className="text-gray-600 ml-2 text-sm font-bold">
                                        Standard Shipping (TeddyShip)
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-xs text-gray-600">
                                        Shipping Fee:
                                    </p>
                                    <p className="text-gray-600 ml-2 text-sm font-bold">
                                        $20.23
                                    </p>
                                </div>
                            </div>
                            <p className="flex items-center justify-center text-red-300 h-6 w-6 pb-1 border-2 border-red-400 rounded-full text-xl">
                                ×
                            </p>
                        </div>
                        <div className="flex items-center border-2 rounded-lg p-2 w-30rem">
                            <div className="w-24 mx-1">
                                <img
                                    className="w-24 h-20 rounded-xl object-cover shadow-xl"
                                    src="https://www.eatthis.com/wp-content/uploads/sites/4/2019/11/bleached-white-flour.jpg?quality=82&strip=1"
                                />
                            </div>
                            <div className="flex flex-col flex-1 px-4">
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-green-700 font-bold">
                                        Amala Flour
                                    </p>
                                    <p className="text-gray-400 font-bold text-sm">
                                        50 kg
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-gray-600 text-sm mr-8">
                                        Status:
                                    </p>
                                    <p className="text-green-700 font-bold text-sm">
                                        InStock (6 left)
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-gray-600 text-sm mr-6">
                                        Vendor:
                                    </p>
                                    <p className="text-green-700 font-bold text-sm">
                                        Garcia Food
                                    </p>
                                </div>
                                <div className="flex items-center my-1 text-yellow-800">
                                    <img
                                        className="w-5 h-5"
                                        src="/assets/rating_filled.svg"
                                    />
                                    <img
                                        className="w-5 h-5"
                                        src="/assets/rating_filled.svg"
                                    />
                                    <img
                                        className="w-5 h-5"
                                        src="/assets/rating_filled.svg"
                                    />
                                    <img
                                        className="w-5 h-5"
                                        src="/assets/rating_filled.svg"
                                    />
                                    <img
                                        className="w-4 h-4"
                                        src="/assets/rating_open.svg"
                                    />
                                </div>
                                <div className="flex items-center">
                                    <p className="text-green-700 font-bold text-sm">
                                        $35.43
                                    </p>
                                </div>
                                <div className="flex items-center my-2">
                                    <p className="">
                                        <img
                                            className="w-4 h-4"
                                            src="/assets/like_icon.svg"
                                        />
                                    </p>
                                    <p className="text-gray-500 ml-2 text-sm">
                                        Add to wishlist
                                    </p>
                                </div>
                                <div className="flex items-center my-1">
                                    <p className="text-xs text-gray-600">
                                        Shipper:
                                    </p>
                                    <p className="text-gray-600 ml-2 text-sm font-bold">
                                        Standard Shipping (TeddyShip)
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-xs text-gray-600">
                                        Shipping Fee:
                                    </p>
                                    <p className="text-gray-600 ml-2 text-sm font-bold">
                                        $17.28
                                    </p>
                                </div>
                            </div>
                            <p className="flex items-center justify-center text-red-300 h-6 w-6 pb-1 border-2 border-red-400 rounded-full text-xl">
                                ×
                            </p>
                        </div>
                        <div className="flex items-center border-2 rounded-lg p-2 w-30rem">
                            <div className="w-24 mx-1">
                                <img
                                    className="w-24 h-20 rounded-xl object-cover shadow-xl"
                                    src="https://thumbs.dreamstime.com/b/dry-pepper-picture-supermarket-made-china-red-made-chili-products-69187444.jpg"
                                />
                            </div>
                            <div className="flex flex-col flex-1 px-4">
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-green-700 font-bold">
                                        Dried Pepper
                                    </p>
                                    <p className="text-gray-400 font-bold text-sm">
                                        15 kg
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-gray-600 text-sm mr-8">
                                        Status:
                                    </p>
                                    <p className="text-green-700 font-bold text-sm">
                                        InStock (6 left)
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-gray-600 text-sm mr-6">
                                        Vendor:
                                    </p>
                                    <p className="text-green-700 font-bold text-sm">
                                        Garcia Food
                                    </p>
                                </div>
                                <div className="flex items-center my-1 text-yellow-800">
                                    <img
                                        className="w-5 h-5"
                                        src="/assets/rating_filled.svg"
                                    />
                                    <img
                                        className="w-5 h-5"
                                        src="/assets/rating_filled.svg"
                                    />
                                    <img
                                        className="w-5 h-5"
                                        src="/assets/rating_filled.svg"
                                    />
                                    <img
                                        className="w-5 h-5"
                                        src="/assets/rating_filled.svg"
                                    />
                                    <img
                                        className="w-4 h-4"
                                        src="/assets/rating_open.svg"
                                    />
                                </div>
                                <div className="flex items-center">
                                    <p className="text-green-700 font-bold text-sm">
                                        $25.60
                                    </p>
                                </div>
                                <div className="flex items-center my-2">
                                    <p className="">
                                        <img
                                            className="w-4 h-4"
                                            src="/assets/like_icon.svg"
                                        />
                                    </p>
                                    <p className="text-gray-500 ml-2 text-sm">
                                        Add to wishlist
                                    </p>
                                </div>
                                <div className="flex items-center my-1">
                                    <p className="text-xs text-gray-600">
                                        Shipper:
                                    </p>
                                    <p className="text-gray-600 ml-2 text-sm font-bold">
                                        Standard Shipping (TeddyShip)
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-xs text-gray-600">
                                        Shipping Fee:
                                    </p>
                                    <p className="text-gray-600 ml-2 text-sm font-bold">
                                        $10.30
                                    </p>
                                </div>
                            </div>
                            <p className="flex items-center justify-center text-red-300 h-6 w-6 pb-1 border-2 border-red-400 rounded-full text-xl">
                                ×
                            </p>
                        </div>
                    </div>
                    <div className="border-t-2 mt-10 pt-4">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-lg font-medium">
                                    Subtotal
                                </span>
                                <em className="text-xs">Excl. Shipping</em>
                            </div>
                            <div className="flex items-center">
                                <span className="text-xs font-bold text-green-800 mt-0.5 mr-0.5">
                                    $
                                </span>
                                <span className="text-lg font-bold text-green-800">
                                    78.31
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 mb-6 flex items-center justify-between">
                        <Link
                            to="shopping_page"
                            className="border-2 border-green-800 px-3 py-1 text-green-800 font-bold rounded-full"
                        >
                            Continue Shopping
                        </Link>
                        <Link
                            to="checkout"
                            className="border-2 border-green-800 bg-green-800 px-8 py-1 text-white font-bold rounded-full"
                        >
                            Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
