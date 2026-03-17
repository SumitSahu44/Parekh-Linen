const TradeEnquiry = () => {
    return (
        <div className="pt-32 pb-20 bg-slate-50 min-h-screen px-6">
            <div className="max-w-4xl mx-auto bg-white shadow-xl overflow-hidden flex flex-col md:flex-row">
                {/* Sidebar Info */}
                <div className="bg-[#2C3E50] text-white p-10 md:w-1/3">
                    <h2 className="text-2xl font-serif mb-6">Bulk Orders</h2>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Partner with Parekh Linen for export-quality fabrics and institutional linen supplies.
                    </p>
                    <ul className="mt-8 space-y-4 text-xs tracking-widest text-[#C0A080]">
                        <li>✓ EXPORT QUALITY</li>
                        <li>✓ CUSTOM BRANDING</li>
                        <li>✓ GLOBAL LOGISTICS</li>
                    </ul>
                </div>

                {/* Form Area */}
                <div className="p-10 md:w-2/3">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Company Name" className="w-full border-b p-2 outline-none focus:border-[#C0A080]" />
                            <input type="text" placeholder="Nature of Business" className="w-full border-b p-2 outline-none focus:border-[#C0A080]" />
                        </div>
                        <input type="email" placeholder="Business Email" className="w-full border-b p-2 outline-none focus:border-[#C0A080]" />
                        <select className="w-full border-b p-2 outline-none text-gray-500 bg-transparent">
                            <option>Select Product Category</option>
                            <option>Hotel Linen</option>
                            <option>Hospital Fabrics</option>
                            <option>Retail Bulk</option>
                        </select>
                        <textarea placeholder="Estimated Monthly Volume..." rows="4" className="w-full border-b p-2 outline-none focus:border-[#C0A080]"></textarea>
                        <button className="w-full bg-[#C0A080] text-white py-4 text-xs font-bold tracking-[0.3em] hover:bg-[#2C3E50] transition-colors">
                            SUBMIT ENQUIRY
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TradeEnquiry;