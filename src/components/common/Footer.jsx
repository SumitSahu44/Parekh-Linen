const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-16">
                <div className="col-span-1 md:col-span-1">
                    <h3 className="text-2xl font-serif mb-6">Parekh Linen</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Leading manufacturers and suppliers of premium bedsheets and fabrics in Kolkata. Quality you can feel.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-[#C0A080]">Quick Links</h4>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li className="hover:text-white cursor-pointer transition-colors">Our Management</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Career Opportunities</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Media Gallery</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-[#C0A080]">Reach Us</h4>
                    <p className="text-gray-400 text-sm mb-4">Kolkata, West Bengal, India</p>
                    <p className="text-gray-400 text-sm">Email: info@parekhlinen.com</p>
                    <p className="text-gray-400 text-sm">Phone: +91 33 XXXX XXXX</p>
                </div>

                <div>
                    <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-[#C0A080]">Newsletter</h4>
                    <div className="flex">
                        <input type="email" placeholder="Email" className="bg-[#2A2A2A] p-3 text-sm flex-grow outline-none border-none" />
                        <button className="bg-[#C0A080] px-4 py-3 hover:bg-white hover:text-black transition-all">➔</button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs gap-4">
                <p>© 2026 PAREKH LINEN. All Rights Reserved.</p>
                <div className="flex gap-6">
                    <span>FB</span><span>IN</span><span>LI</span><span>X</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;