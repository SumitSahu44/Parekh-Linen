const Contact = () => {
    return (
        <div className="pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-4xl font-serif text-[#2C3E50] mb-6">Connect With Us</h2>
                    <p className="text-gray-500 mb-8 font-light leading-loose">
                        Visit our Kolkata headquarters or schedule a virtual appointment with our textile experts.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <p className="font-bold text-[#C0A080]">Location</p>
                            <p className="text-gray-700 uppercase">Parekh Linen, Kolkata, West Bengal, India</p>
                        </div>
                        <div>
                            <p className="font-bold text-[#C0A080]">Email</p>
                            <p className="text-gray-700">contact@parekhlinen.com</p>
                        </div>
                    </div>
                </div>

                {/* Appointment Form */}
                <div className="bg-slate-50 p-10 border border-gray-100">
                    <h3 className="text-2xl font-serif mb-6">Book an Appointment</h3>
                    <form className="space-y-4">
                        <input type="text" placeholder="Full Name" className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-[#C0A080] outline-none" />
                        <input type="email" placeholder="Email Address" className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-[#C0A080] outline-none" />
                        <select className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-[#C0A080] outline-none">
                            <option>Trade Enquiry</option>
                            <option>Visit Manufacturing Unit</option>
                            <option>Quality Assurance Check</option>
                        </select>
                        <button className="bg-[#2C3E50] text-white px-10 py-4 mt-6 uppercase text-xs tracking-widest hover:bg-[#C0A080] transition-colors">
                            Schedule Visit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};