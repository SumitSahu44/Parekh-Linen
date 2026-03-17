import { motion } from 'framer-motion';

const Tender = () => {
    const activeAuctions = [
        { id: "TND-2026-001", item: "Grey Fabric - 2000 Meters", status: "Live", closing: "2h 40m" },
        { id: "TND-2026-042", item: "Bleached Linen - 500 Rolls", status: "Upcoming", closing: "Starts tomorrow" },
    ];

    return (
        <div className="pt-32 pb-20 px-6 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-serif text-[#2C3E50] mb-2">Tenders & e-Auctions</h2>
                <p className="text-[#C0A080] mb-12 uppercase tracking-widest text-sm">Official Procurement Portal</p>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Active Auctions Table */}
                    <div className="lg:col-span-2 bg-white shadow-sm border border-gray-100 overflow-hidden">
                        <div className="bg-[#2C3E50] p-4 text-white font-bold text-sm tracking-widest">ACTIVE PORTAL</div>
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="p-4 text-xs font-bold text-gray-400 uppercase">Tender ID</th>
                                    <th className="p-4 text-xs font-bold text-gray-400 uppercase">Material Description</th>
                                    <th className="p-4 text-xs font-bold text-gray-400 uppercase">Status</th>
                                    <th className="p-4 text-xs font-bold text-gray-400 uppercase">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activeAuctions.map((auc, i) => (
                                    <tr key={i} className="border-b hover:bg-gray-50 transition-colors">
                                        <td className="p-4 text-sm font-mono font-bold">{auc.id}</td>
                                        <td className="p-4 text-sm text-gray-600">{auc.item}</td>
                                        <td className="p-4">
                                            <span className={`px-3 py-1 text-[10px] font-bold rounded-full ${auc.status === 'Live' ? 'bg-green-100 text-green-600 animate-pulse' : 'bg-blue-100 text-blue-600'}`}>
                                                {auc.status}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <button className="text-[#C0A080] text-xs font-bold hover:underline">BID NOW</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* e-Quotation Sidebar Form */}
                    <div className="bg-white p-8 shadow-sm border border-gray-100">
                        <h3 className="text-xl font-serif mb-4">Quick e-Quotation</h3>
                        <p className="text-xs text-gray-400 mb-6">Submit your specs to receive a digital quote in 24 hours.</p>
                        <form className="space-y-4">
                            <input type="text" placeholder="Material Type" className="w-full p-3 bg-gray-50 border-none text-sm outline-none focus:ring-1 ring-[#C0A080]" />
                            <input type="number" placeholder="Quantity (Meters/Kg)" className="w-full p-3 bg-gray-50 border-none text-sm outline-none focus:ring-1 ring-[#C0A080]" />
                            <button className="w-full bg-[#C0A080] text-white py-3 text-xs font-bold tracking-widest hover:bg-[#2C3E50] transition-all">
                                REQUEST QUOTE
                            </button>
                        </form>
                    </div>
                </div>

                {/* Circulars/Notice Board */}
                <div className="mt-12 bg-white p-6 border-l-4 border-[#2C3E50] shadow-sm">
                    <h4 className="font-bold text-[#2C3E50] mb-2 uppercase text-xs tracking-widest">Latest Notice Board</h4>
                    <marquee className="text-sm text-gray-500 italic">
                        New Contract: Supply of 100% Cotton Bedsheets for Northern Railway (Kolkata Division) is now open for bidding. | Please update your GST profiles by March 30th.
                    </marquee>
                </div>
            </div>
        </div>
    );
};

export default Tender;