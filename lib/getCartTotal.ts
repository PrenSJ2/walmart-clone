import React from 'react'
import {ProductContent} from "@/typings/productTypings";

function GetCartTotal(products: ProductContent[]): string {
    const total = products.reduce((accumulator: number, currentProduct: ProductContent) => {
        return accumulator + currentProduct.price.price;
    }, 0);

    return `${products[0]?.price.currency ? products[0]?.price.currency : ""} ${total.toFixed(2)}`;
}

export default GetCartTotal
