export const FLAVORS = [
    "Banana Nut",
    "Oreo Blast",
    "Chocolate Chip Pecan",
    "Chocolate Chip",
    "Red Velvet",
    "Red Velvet Oreo",
    "Double Chocolate Confetti",
    "Strawberry Creme",
    "Pumpkin Spice",
    "Butter Pecan",
    "Lemon Ice",
    "Triple Chocolate",
    "Peanut Butter Chocolate",
    "Straw Burst",
    "Birthday Cake",
];

export const SIZES = [
    { name: "Half Dozen", price: 15 },
    { name: "Dozen", price: 25 },
    { name: "Box (30 count)", price: 52 },
];

export const ADD_INS = ["Pecans", "Walnuts"];

export interface CartItem {
    flavors: string[];
    size: string;
    price: number;
    addIns: string[];
}

export interface OrderDetails {
    name: string;
    email: string;
    phone: string;
    address: string;
    paymentMethod: string;
}
