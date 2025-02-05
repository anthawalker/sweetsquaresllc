import { CartItem } from "./types";

interface CartSectionProps {
    cart: CartItem[];
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
    subtotal: number;
    // shippingCost: number;
    total: number;
    setShowOrderForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CartSection({
    cart,
    setCart,
    subtotal,
    // shippingCost,
    total,
    setShowOrderForm,
}: CartSectionProps) {
    const removeFromCart = (index: number) => {
        setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    };

    return (
        <div className="md:w-1/3">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h4 className="text-2xl font-semibold mb-4">
                    Cart ({cart.length} items)
                </h4>
                {cart.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center mb-2">
                        <div>
                            <p>
                                {item.flavors.join(", ")} - {item.size}
                            </p>
                            {item.addIns.length > 0 && (
                                <p className="text-sm text-gray-600">
                                    Add-ins: {item.addIns.join(", ")}
                                </p>
                            )}
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">
                                ${item.price.toFixed(2)}
                            </span>
                            <button
                                onClick={() => removeFromCart(index)}
                                className="text-red-500 hover:text-red-700">
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
                <div className="mt-4 border-t pt-4">
                    <p className="flex justify-between">
                        <span>Subtotal:</span>{" "}
                        <span>${subtotal.toFixed(2)}</span>
                    </p>
                    {/* <p className="flex justify-between">
                        <span>Shipping:</span>{" "}
                        <span>${shippingCost.toFixed(2)}</span>
                    </p> */}
                    <p className="flex justify-between font-semibold">
                        <span>Total:</span> <span>${total.toFixed(2)}</span>
                    </p>
                </div>
                <button
                    onClick={() => setShowOrderForm(true)}
                    disabled={cart.length === 0}
                    className="w-full mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}
