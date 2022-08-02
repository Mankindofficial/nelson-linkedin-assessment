import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { CartItem } from "../../components";
import { State, Product } from "../../types";
import "./style.css";

const Cart = () => {
  const { shoppingCart } = useSelector((state: State) => state.main);
    const [subTotal, setSubTotal] = useState(0);

    useEffect(() => {
        let sum = shoppingCart.length ? shoppingCart
                  .map((item: Product) => item?.price)
        .reduce((acc = 0, item) => acc + item) : 0;
        setSubTotal(sum);
    }, [shoppingCart]);

    return (
        <div className="w-full">
            <h1 className="font-bold text-3xl text-center my-4">
                Musliudeen Makinde Code Assessment
            </h1>
            <div className="w-full flex items-center justify-center">
                <div className="border-2 rounded-lg p-2 xs:p-6 mx-3 xs:mx-0 my-8 xs:my-16 w-full xs:w-fit">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-600">
                            Shopping Cart ({shoppingCart.length})
                        </span>
                        <Link
                            to="/shopping_page"
                            className="text-gray-600 text-lg cursor-pointer"
                        >
                            ×
                        </Link>
                    </div>
                    <div className="space-y-4">
                        {shoppingCart.map((item, index) => (
                            <CartItem
                                key={index}
                                product={item}
                                index={index}
                            />
                        ))}
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
                                    {subTotal}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 mb-6 flex flex-col xs:flex-row items-center justify-between">
                        <Link
                            to="/shopping_page"
                            className="hover:bg-green-600 hover:border-green-600 transition-all duration-500 hover:text-white mr-3 border-2 border-green-800 mb-3 xs:mb-0 text-center px-3 py-1 text-green-800 font-bold rounded-full"
                        >
                            Continue Shopping
                        </Link>
                        <Link
                            to="/checkout"
                            className="hover:bg-green-600 hover:border-green-600 transition-all duration-500 border-2 border-green-800 bg-green-800 px-8 py-1 text-white font-bold rounded-full"
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
