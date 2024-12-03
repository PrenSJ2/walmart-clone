"use client";

import { useCartStore } from "@/store";
import { ProductContent } from "@/typings/productTypings";
import { Button } from "./ui/button";
import RemoveFromCart from "@/components/RemoveFromCart";
// import RemoveFromCart from "./RemoveFromCart";

function AddToCart({ product }: { product: ProductContent }) {
    const cart = useCartStore((state) => state.cart);
    const addToCart = useCartStore((state) => state.addToCart);

    console.log(cart);

    const howManyInCart = cart.filter(
        (item) => item.general.meta.sku === product.general.meta.sku
    ).length;

    console.log("How many in cart: ", howManyInCart);

    const handleAdd = () => {
        console.log("Adding to cart", product);
        addToCart(product);
    };

    if (howManyInCart > 0) {
        return (
            <div className="flex space-x-5 items-center">
                <RemoveFromCart product={product} />
                <span>{howManyInCart}</span>
                <Button className="bg-walmart hover:bg-walmart/50" onClick={handleAdd}>
                    +
                </Button>
            </div>
        );
    }

    return (
        <Button className="bg-walmart hover:bg-walmart/50" onClick={handleAdd}>
            Add to Cart
        </Button>
    );
}

export default AddToCart;