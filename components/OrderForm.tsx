import { OrderDetails } from "./types";

interface OrderFormProps {
    orderDetails: OrderDetails;
    setOrderDetails: React.Dispatch<React.SetStateAction<OrderDetails>>;
    isSubmitting: boolean;
    handleOrderSubmit: (e: React.FormEvent) => Promise<void>;
    setShowOrderForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function OrderForm({
    orderDetails,
    setOrderDetails,
    isSubmitting,
    handleOrderSubmit,
    setShowOrderForm,
}: OrderFormProps) {
    return (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
                <form onSubmit={handleOrderSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-2">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={orderDetails.name}
                            onChange={(e) =>
                                setOrderDetails({
                                    ...orderDetails,
                                    name: e.target.value,
                                })
                            }
                            required
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={orderDetails.email}
                            onChange={(e) =>
                                setOrderDetails({
                                    ...orderDetails,
                                    email: e.target.value,
                                })
                            }
                            required
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-2">
                            Phone
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            value={orderDetails.phone}
                            onChange={(e) =>
                                setOrderDetails({
                                    ...orderDetails,
                                    phone: e.target.value,
                                })
                            }
                            required
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="address"
                            className="block text-sm font-medium text-gray-700 mb-2">
                            Address (Note: We only deliver to the greater
                            Houston area at this time)
                        </label>
                        <textarea
                            id="address"
                            value={orderDetails.address}
                            onChange={(e) =>
                                setOrderDetails({
                                    ...orderDetails,
                                    address: e.target.value,
                                })
                            }
                            required
                            className="w-full p-2 border rounded"
                            rows={3}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Payment Method
                        </label>
                        <div className="space-y-2">
                            {["Cashapp", "Venmo", "Zelle"].map((method) => (
                                <label
                                    key={method}
                                    className="flex items-center">
                                    <input
                                        type="radio"
                                        value={method}
                                        checked={
                                            orderDetails.paymentMethod ===
                                            method
                                        }
                                        onChange={(e) =>
                                            setOrderDetails({
                                                ...orderDetails,
                                                paymentMethod: e.target.value,
                                            })
                                        }
                                        className="mr-2"
                                    />
                                    {method === "Cashapp" &&
                                        "CashApp ($sweetsquarez)"}
                                    {method === "Venmo" &&
                                        "Venmo (@sweetsquaresllc)"}
                                    {method === "Zelle" &&
                                        "Zelle (281-515-9016)"}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={() => setShowOrderForm(false)}
                            className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed">
                            {isSubmitting ? "Submitting..." : "Submit Order"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
