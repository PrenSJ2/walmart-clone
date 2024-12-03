'use client';

import {ProductContent} from "@/typings/productTypings";
import {useCartStore} from "@/store";
import {Button} from "@/components/ui/button";

function RemoveFromCart({product}: {product: ProductContent}) {
    const removeFromCart = useCartStore((state) => state.removeFromCart);

    const handleRemove = () => {
        console.log("Removing from cart", product);
        removeFromCart(product);
    }
    return (
        <Button className="bg-walmart hover:bg-walmart/50" onClick={handleRemove}>-</Button>
    )
}

export default RemoveFromCart
