import Head from "next/head";

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Privacy Policy - Sweet Squares LLC</title>
                <meta
                    name="description"
                    content="Privacy Policy for Sweet Squares LLC"
                />
            </Head>
            <main className=" text-gray-800 min-h-screen py-10 px-5 max-w-7xl mx-auto justify-center mt-10">
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-md shadow-md ">
                    <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-sm text-gray-600 mb-8 text-center">
                        <strong>Last Updated:</strong> November 16, 2024
                    </p>
                    <section className="space-y-6">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">
                                1. Introduction
                            </h2>
                            <p>
                                Welcome to <strong>Sweet Squares LLC</strong>.
                                We are committed to protecting your privacy and
                                ensuring the security of your personal
                                information. This Privacy Policy outlines how we
                                collect, use, and protect your information when
                                you use our website (the &quot;Site&quot;) and
                                services.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">
                                2. Information We Collect
                            </h2>
                            <p>
                                We may collect the following types of
                                information:
                            </p>
                            <ul className="list-disc list-inside">
                                <li>
                                    <strong>Personal Information:</strong> Name,
                                    email address, phone number, and payment
                                    details when you place an order or contact
                                    us.
                                </li>
                                <li>
                                    <strong>Usage Data:</strong> Information
                                    about your interactions with the Site,
                                    including IP address, browser type, and
                                    pages visited.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">
                                3. How We Use Your Information
                            </h2>
                            <p>
                                We use your information for the following
                                purposes:
                            </p>
                            <ul className="list-disc list-inside">
                                <li>To process and fulfill your orders.</li>
                                <li>
                                    To respond to your inquiries and provide
                                    customer support.
                                </li>
                                <li>
                                    To improve the functionality and usability
                                    of our Site.
                                </li>
                                <li>To comply with legal obligations.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">
                                4. Sharing Your Information
                            </h2>
                            <p>
                                We do not sell, rent, or share your personal
                                information with third parties except in the
                                following circumstances:
                            </p>
                            <ul className="list-disc list-inside">
                                <li>
                                    With trusted service providers who assist in
                                    processing payments or delivering orders.
                                </li>
                                <li>
                                    As required by law or to comply with legal
                                    processes.
                                </li>
                                <li>
                                    To protect the rights and safety of Sweet
                                    Squares LLC, our customers, or others.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">
                                5. Security of Your Information
                            </h2>
                            <p>
                                We implement industry-standard security measures
                                to protect your personal information. However,
                                no method of transmission over the Internet or
                                electronic storage is completely secure.
                                Therefore, while we strive to use commercially
                                acceptable means to protect your information, we
                                cannot guarantee its absolute security.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">
                                6. Cookies and Tracking Technologies
                            </h2>
                            <p>
                                Our Site may use cookies and similar
                                technologies to enhance your browsing
                                experience. Cookies are small files stored on
                                your device that help us improve the Site’s
                                functionality and performance. You can adjust
                                your browser settings to refuse cookies, but
                                some features of the Site may not function
                                properly.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">
                                7. Your Rights
                            </h2>
                            <p>
                                You have the following rights regarding your
                                personal information:
                            </p>
                            <ul className="list-disc list-inside">
                                <li>
                                    To access the personal information we hold
                                    about you.
                                </li>
                                <li>
                                    To request corrections or updates to your
                                    information.
                                </li>
                                <li>
                                    To request the deletion of your personal
                                    information.
                                </li>
                            </ul>
                            <p>
                                To exercise these rights, please contact us at:
                                <a
                                    href="mailto:orders@sweetsquaresllc.com"
                                    className="text-blue-600 underline">
                                    {" "}
                                    orders@sweetsquaresllc.com
                                </a>{" "}
                                or call us at{" "}
                                <a
                                    href="tel:281-515-9016"
                                    className="text-blue-600 underline">
                                    281-515-9016
                                </a>
                                .
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">
                                8. Changes to This Privacy Policy
                            </h2>
                            <p>
                                We reserve the right to update this Privacy
                                Policy at any time. Changes will be effective
                                immediately upon posting to the Site. Your
                                continued use of the Site constitutes acceptance
                                of the updated Privacy Policy.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">
                                9. Contact Us
                            </h2>
                            <p>
                                If you have any questions or concerns about this
                                Privacy Policy, please contact us at:
                            </p>
                            <address className="not-italic">
                                <strong>Sweet Squares LLC</strong> <br />
                                Email:{" "}
                                <a
                                    href="mailto:orders@sweetsquaresllc.com"
                                    className="text-blue-600 underline">
                                    orders@sweetsquaresllc.com
                                </a>{" "}
                                <br />
                                Phone:{" "}
                                <a
                                    href="tel:281-515-9016"
                                    className="text-blue-600 underline">
                                    281-515-9016
                                </a>
                            </address>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
