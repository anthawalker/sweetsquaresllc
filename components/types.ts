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
    "White Choclate Macadamia Nut",
    "Oreo Birthday Cake",
    "Blueberry Dream",
    "Reeses Butter Cup",
    "Strawberry Oreo",
    "Mint Chocolate Chip (Holidays)",
    "Gingerbread Glaze (Holidays)",
    "Double chocolate Reese's",
    "White Chocolate Chip Blast",
    "Butter Scotch Pecan",
    "White Chocolate Cranberry",
    "White Chocolate Butterfinger (New)",
    "King Cake Love (Seasonal)",
    "Butterfinger Blitz (New)",
    "Honey Bun Swirl",
];

export const SIZES = [
    { name: "Half Dozen", price: 18 },
    { name: "Dozen", price: 34 },
    { name: "Box (30 count)", price: 60 },
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
