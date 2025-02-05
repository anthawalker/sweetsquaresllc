"use client";

import { useState } from "react";
import { FLAVORS, SIZES, ADD_INS, CartItem } from "./types";

interface MenuSectionProps {
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export default function MenuSection({ setCart }: MenuSectionProps) {
    const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
    const [selectedSize, setSelectedSize] = useState("Half Dozen");
    const [selectedAddIns, setSelectedAddIns] = useState<string[]>([]);

    const handleFlavorChange = (flavor: string) => {
        if (selectedFlavors.includes(flavor)) {
            setSelectedFlavors(selectedFlavors.filter((f) => f !== flavor));
        } else {
            if (
                selectedSize === "Box (32 count)" &&
                selectedFlavors.length < 3
            ) {
                setSelectedFlavors([...selectedFlavors, flavor]);
            } else if (selectedSize !== "Box (32 count)") {
                setSelectedFlavors([flavor]);
            }
        }
    };

    const addToCart = () => {
        if (
            (selectedSize !== "Box (32 count)" &&
                selectedFlavors.length === 1) ||
            (selectedSize === "Box (32 count)" &&
                selectedFlavors.length > 0 &&
                selectedFlavors.length <= 3)
        ) {
            const sizeObj = SIZES.find((size) => size.name === selectedSize)!;
            const price = sizeObj.price + selectedAddIns.length * 2;
            setCart((prevCart) => [
                ...prevCart,
                {
                    flavors: selectedFlavors,
                    size: selectedSize,
                    price,
                    addIns: selectedAddIns,
                },
            ]);
            setSelectedFlavors([]);
            setSelectedSize("Half Dozen");
            setSelectedAddIns([]);
        }
    };

    return (
        <div className="md:w-2/3">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-4xl font-semibold mb-4">Our Menu</h3>
                <div className="mb-4">
                    <label
                        htmlFor="size-select"
                        className="block text-sm font-medium text-gray-700 mb-2">
                        Select Size
                    </label>
                    <select
                        id="size-select"
                        value={selectedSize}
                        onChange={(e) => {
                            setSelectedSize(e.target.value);
                            setSelectedFlavors([]);
                        }}
                        className="w-full p-2 border rounded">
                        {SIZES.map((size) => (
                            <option key={size.name} value={size.name}>
                                {size.name} (${size.price})
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Flavor
                        {selectedSize === "Box" ? "s (up to 3)" : ""}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                        {FLAVORS.map((flavor) => (
                            <div key={flavor} className="flex items-center">
                                <input
                                    type="checkbox"
                                    id={flavor}
                                    checked={selectedFlavors.includes(flavor)}
                                    onChange={() => handleFlavorChange(flavor)}
                                    className="mr-2"
                                />
                                <label htmlFor={flavor}>{flavor}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Add-Ins ($2 each)
                    </label>
                    {ADD_INS.map((addIn) => (
                        <div key={addIn} className="flex items-center">
                            <input
                                type="checkbox"
                                id={addIn}
                                checked={selectedAddIns.includes(addIn)}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setSelectedAddIns([
                                            ...selectedAddIns,
                                            addIn,
                                        ]);
                                    } else {
                                        setSelectedAddIns(
                                            selectedAddIns.filter(
                                                (item) => item !== addIn
                                            )
                                        );
                                    }
                                }}
                                className="mr-2"
                            />
                            <label htmlFor={addIn}>{addIn}</label>
                        </div>
                    ))}
                </div>
                <button
                    onClick={addToCart}
                    disabled={
                        (selectedSize !== "Box (32 count)" &&
                            selectedFlavors.length !== 1) ||
                        (selectedSize === "Box (32 count)" &&
                            (selectedFlavors.length === 0 ||
                                selectedFlavors.length > 3))
                    }
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed">
                    Add to Cart
                </button>
                <p className="mt-4 text-sm text-gray-600">
                    Note: For the box option ($58), you can pick up to 3 flavors
                    or multiple of the same flavor.
                </p>
                <p className="mt-2 text-sm text-red-600 font-semibold">
                    Please place orders 3 to 5 days in advance for big orders.
                </p>
            </div>
        </div>
    );
}
