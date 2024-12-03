import {ProductContent} from "@/typings/productTypings";

export default function groupBySku(products: ProductContent[]): Record<string, Product[]> {
    return products?.reduce((accumulator: Record<string, ProductContent[]>, currentProduct: ProductContent) => {
        const sku = currentProduct.general.meta.sku;
        if (!accumulator[sku]) {
            accumulator[sku] = [];
        }
        accumulator[sku].push(currentProduct);
        return accumulator;
    }, {} );
}
