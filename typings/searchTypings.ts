export interface SearchResult {
    results: Result[];
}

export interface Result {
    content: Content;
    created_at: string;
    updated_at: string;
    page: number;
    url: string;
    job_id: string;
    is_render_forced: boolean;
    status_code: number;
    parser_type: string;
}

export interface Content {
    price: Price;
    rating: Rating;
    seller: Seller;
    general: General;
    location: Location;
    variations: Variation[];
    breadcrumbs: Breadcrumb[];
    fulfillment: Fulfillment;
    specifications: Specification[];
    parse_status_code: number;
}

export interface Price {
    price: number;
    currency: string;
    price_strikethrough: number;
}

export interface Rating {
    count: number;
    rating: number;
}

export interface Seller {
    id: string;
    url: string;
    name: string;
    catalog_id: string;
    official_name: string;
}

export interface General {
    url: string;
    meta: Meta;
    badge: string;
    brand: string;
    title: string;
    images: string[];
    main_image: string;
    image: string;
    description: string;
}

export interface Meta {
    sku: string;
    gtin: string;
}

export interface Location {
    city: string;
    state: string;
    store_id: string;
    zip_code: string;
}

export interface Variation {
    state: string;
    product_id: string;
    selected_options: SelectedOption[];
}

export interface SelectedOption {
    key: string;
    value: string;
}

export interface Breadcrumb {
    url: string;
    category_name: string;
}

export interface Fulfillment {
    pickup: boolean;
    delivery: boolean;
    shipping: boolean;
    out_of_stock: boolean;
    free_shipping: boolean;
    pickup_information: string;
    delivery_information: string;
    shipping_information: string;
}

export interface Specification {
    key: string;
    value: string;
}