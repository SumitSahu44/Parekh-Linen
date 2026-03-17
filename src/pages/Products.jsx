import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Dummy Data
const allProducts = [
    { id: 1, name: "Premium Egyptian Cotton", cat: "Fabrics", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=400" },
    { id: 2, name: "Luxury Hotel Bedspread", cat: "Bedsheets", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=400" },
    { id: 3, name: "Fine Table Linen", cat: "Linen", img: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=400" },
    { id: 4, name: "Raw Silk Fabric", cat: "Fabrics", img: "https://images.unsplash.com/photo-1584108653148-3e2321c1995a?q=80&w=400" },
    // Aur products add kar sakte ho...
];

const Products = () => {
    const [activeTab, setActiveTab] = useState('All');

    const filteredProducts = activeTab === 'All'
        ? allProducts
        : allProducts.filter(p => p.cat === activeTab);

    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-serif text-[#2C3E50]">Our Collections</h1>
                <div className="flex justify-center gap-6 mt-8">
                    {['All', 'Fabrics', 'Bedsheets', 'Linen'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === tab ? 'bg-[#C0A080] text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <AnimatePresence mode='popLayout'>
                    {filteredProducts.map((p) => (
                        <motion.div
                            key={p.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white border p-2 group shadow-sm hover:shadow-xl transition-all"
                        >
                            <div className="overflow-hidden aspect-square">
                                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-4">
                                <span className="text-[10px] text-[#C0A080] font-black uppercase tracking-widest">{p.cat}</span>
                                <h3 className="text-lg font-serif text-[#2C3E50]">{p.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Products;