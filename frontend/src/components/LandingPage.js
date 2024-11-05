import React from 'react';

const LandingPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <header className="bg-blue-600 w-full p-4 text-white text-center">
                <h1 className="text-3xl font-bold">Welcome to Excel Glass, Inc.</h1>
                <p className="mt-2">Your premier glass etching company since 1994</p>
            </header>
            <main className="flex-grow p-8">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">About Us</h2>
                    <p className="mt-2">
                        At Excel Glass, Inc., we specialize in high-quality glass etched products for both individuals and businesses. 
                        Located in Malibay City, Philippines, our dedicated team of 15 employees is committed to providing exceptional customer service.
                    </p>
                </section>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">Our Services</h2>
                    <ul className="list-disc list-inside mt-2">
                        <li>Awards</li>
                        <li>Corporate Giveaways</li>
                        <li>Glass Mirrors</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold">Contact Us</h2>
                    <p className="mt-2">
                        We welcome all individuals and organizations to reach out for their glass etching needs. 
                        Please contact us for inquiries and quotes.
                    </p>
                </section>
            </main>
            <footer className="bg-blue-600 w-full p-4 text-white text-center">
                <p>&copy; {new Date().getFullYear()} Excel Glass, Inc. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;