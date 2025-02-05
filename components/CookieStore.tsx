"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import OrderHero from "./OrderHero";
import MenuSection from "./MenuSection";
import CartSection from "./CartSection";
import OrderForm from "./OrderForm";
import { CartItem, OrderDetails } from "./types";

import { Lalezar, Fira_Sans_Condensed } from "next/font/google";

const lalezar = Lalezar({ weight: "400", subsets: ["latin"] });
const firaSansCondensed = Fira_Sans_Condensed({
    weight: "400",
    subsets: ["latin"],
});

export default function CookieStore() {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [showOrderForm, setShowOrderForm] = useState(false);
    const [orderDetails, setOrderDetails] = useState<OrderDetails>({
        name: "",
        email: "",
        phone: "",
        address: "",
        paymentMethod: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        emailjs.init("qOJM9Gq77uWlZlGDR");
    }, []);

    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    // const shippingCost = 7.99;
    const total = subtotal;

    const handleOrderSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const orderItems = cart
            .map(
                (item) =>
                    `${item.flavors.join(", ")} - ${item.size}${
                        item.addIns.length > 0
                            ? ` (Add-ins: ${item.addIns.join(", ")})`
                            : ""
                    } - $${item.price.toFixed(2)}`
            )
            .join("\n");

        const ownerTemplateParams = {
            to_email: "orders@sweetsquaresllc.com",
            from_name: orderDetails.name,
            from_email: orderDetails.email,
            phone: orderDetails.phone,
            address: orderDetails.address,
            order_details: orderItems,
            subtotal: subtotal.toFixed(2),
            // shipping: shippingCost.toFixed(2),
            total: total.toFixed(2),
            payment_method: orderDetails.paymentMethod,
        };

        const customerTemplateParams = {
            to_name: orderDetails.name,
            to_email: orderDetails.email,
            from_name: "Sweet Squares LLC",
            from_email: "orders@sweetsquaresllc.com",
            order_details: orderItems,
            phone: orderDetails.phone,
            address: orderDetails.address,
            subtotal: subtotal.toFixed(2),
            // shipping: shippingCost.toFixed(2),
            total: total.toFixed(2),
            payment_method: orderDetails.paymentMethod,
            payment_details: getPaymentDetails(orderDetails.paymentMethod),
        };

        try {
            await emailjs.send(
                "service_eaand5a",
                "template_panqvhc",
                ownerTemplateParams
            );
            await emailjs.send(
                "service_eaand5a",
                "template_r1tmofs",
                customerTemplateParams
            );

            toast.success(
                "Your order has been successfully placed! Please check your email for confirmation.",
                {
                    position: "top-right",
                }
            );
            setCart([]);
            setShowOrderForm(false);
            setOrderDetails({
                name: "",
                email: "",
                phone: "",
                address: "",
                paymentMethod: "",
            });
        } catch (error) {
            console.error(error);
            toast.error(
                "Something went wrong placing your order. Please try again or contact us.",
                {
                    position: "top-right",
                }
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const getPaymentDetails = (method: string) => {
        switch (method) {
            case "Cashapp":
                return "CashApp: $sweetsquarez";
            case "Venmo":
                return "Venmo: @sweetsquaresllc";
            case "Zelle":
                return "Zelle: 281-515-9016";
            default:
                return "";
        }
    };

    return (
        <>
            <OrderHero />
            <div
                className={`container mx-auto px-4 py-8 ${firaSansCondensed.className}`}>
                <h2
                    className={`text-6xl font-bold text-center mb-8 ${lalezar.className} mt-12`}>
                    Order Form
                </h2>
                <div className="flex flex-col md:flex-row gap-8">
                    <MenuSection setCart={setCart} />
                    <CartSection
                        cart={cart}
                        setCart={setCart}
                        subtotal={subtotal}
                        // shippingCost={shippingCost}
                        total={total}
                        setShowOrderForm={setShowOrderForm}
                    />
                </div>
                {showOrderForm && (
                    <OrderForm
                        orderDetails={orderDetails}
                        setOrderDetails={setOrderDetails}
                        isSubmitting={isSubmitting}
                        handleOrderSubmit={handleOrderSubmit}
                        setShowOrderForm={setShowOrderForm}
                    />
                )}
            </div>
        </>
    );
}
