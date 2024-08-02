// 1. Partial
// 인터페이스에서 타입들을 optional로 지정하는 속성

interface Address {
    email: string;
    address: string;
}

type MyEmail = Partial<Address>;

const me: MyEmail = {
    email: "michaelm00n@naver.com",
    address: "서울시 서초구",
    // mobile: "01036542969",
};
// const myAddress: Address = {};

// interface Product {
//     id: number;
//     name: string;
//     price: number;
//     brand: string;
//     stock: number;
// }

// interface UpdateProduct {
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }

// 2. Omit
// 특정 속성만 제거한 타입을 정의하고 싶을떄

interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

type shoppingItem = Omit<Product, "stock">;
const myLaptop: shoppingItem = {
    id: 1,
    name: "laptop",
    price: 1000000,
    brand: "apple",
};

const myProduct: Omit<Product, "stock"> = {
    id: 1,
    name: "laptop",
    price: 1000000,
    brand: "apple",
};

const myProduct2: Omit<Product, "stock" | "brand"> = {
    id: 1,
    name: "laptop",
    price: 1000000,
};

// Pick
// 해당 속성 타입만 가지고 와서 새로운 타입을 만들고 싶을때
interface Product2 {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

type MyProduct = Pick<Product2, "id">;
type MyProduct2 = Pick<Product2, "price" | "stock">;

const myLaptop2: MyProduct = {
    id: 10,
};

const myLaptop3: MyProduct2 = {
    price: 5000,
    stock: 1,
};
