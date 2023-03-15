export interface IViewProductImage {
    id: number;
    name: string;
    src: string;
    alt: string;
}

export interface IColors {
    name: string;
    bgColor: string;
    selectedColor: string;
}

export interface IViewProduct {
    images: Array<IViewProductImage>;
    details: {
        name: string;
        description: string;
        price: string;
        rating: number;
        colors: Array<IColors>;
        details: [{
            name: string;
            items: Array<string>;
        }];
        available: boolean;
    }
}

export interface IProduct {
    id: string;
    slug: string;
    title: string;
    summary: string
    price: number;
    discount: number;
    height: number;
    width: number;
    length: number;
    volume: number;
    material: string;
    colors: Array<any>;
    cover: {
        data: {
            id: number;
            attributes: { 
                url: string
            };
        }
    };
    images: { data: Array<{}> };
    categories: Array<any>;
    publishedAt: Date;
    createdAt: Date;
    updatedAt: Date;
    available: boolean;
}