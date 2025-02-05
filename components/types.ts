export const FLAVORS = [
    "Banana Nut",
    "Oreo Blast",
    "Chocolate Chip Pecan",
    "Chocolate Chip",
    "Red Velvet Cream",
    "Red Velvet Oreo",
    "Double Chocolate Confetti",
    "Strawberry Creme",
    "Pumpkin Spice",
    "Butter Pecan",
    "Lemon Ice",
    "Oreo Lemon",
    "Triple Chocolate",
    "Peanut Butter Chocolate Chip",
    "Straw Burst",
    "White Choclate Macodamia Nut",
    "Oreo Birthday Cake",
    "Blueberry Dream",
    "Reeses Butter Cup",
    "Strawberyy Oreo",
    "Mint Chocolate Chip (Holidays)",
    "Gingerbread Glaze (Holidays)",
];

export const SIZES = [
    { name: "Half Dozen", price: 16 },
    { name: "Dozen", price: 32 },
    { name: "Box (32 count)", price: 58 },
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
