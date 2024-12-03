export interface SearchResult {
    results: Result[];
}

export interface Result {
    content: ProductContent;
    created_at: string;
    updated_at: string;
    page: number;
    url: string;
    job_id: string;
    is_render_forced: boolean;
    status_code: number;
    parser_type: string;
}

export interface ProductContent {
    price: ProductPrice;
    rating: ProductRating;
    seller: ProductSeller;
    general: ProductGeneral;
    location: ProductLocation;
    variations: ProductVariation[];
    breadcrumbs: ProductBreadcrumb[];
    fulfillment: ProductFulfillment;
    specifications: ProductSpecification[];
    parse_status_code: number;
}

export interface ProductPrice {
    price: number;
    currency: string;
    price_strikethrough: number;
}

export interface ProductRating {
    count: number;
    rating: number;
}

export interface ProductSeller {
    id: string;
    url: string;
    name: string;
    catalog_id: string;
    official_name: string;
}

export interface ProductGeneral {
    url: string;
    meta: ProductMeta;
    badge: string;
    brand: string;
    title: string;
    images: string[];
    main_image: string;
    description: string;
}

export interface ProductMeta {
    sku: string;
    gtin: string;
}

export interface ProductLocation {
    city: string;
    state: string;
    store_id: string;
    zip_code: string;
}

export interface ProductVariation {
    state: string;
    product_id: string;
    selected_options: ProductSelectedOption[];
}

export interface ProductSelectedOption {
    key: string;
    value: string;
}

export interface ProductBreadcrumb {
    url: string;
    category_name: string;
}

export interface ProductFulfillment {
    pickup: boolean;
    delivery: boolean;
    shipping: boolean;
    out_of_stock: boolean;
    free_shipping: boolean;
    pickup_information: string;
    delivery_information: string;
    shipping_information: string;
}

export interface ProductSpecification {
    key: string;
    value: string;
}