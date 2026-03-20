import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useSEO from '../hooks/useSEO';

const allProducts = [
    { id: 1, name: "Egyptian Cotton", cat: "Fabrics", img: "https://plus.unsplash.com/premium_photo-1674747087104-516a4d6d316c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFicmljfGVufDB8fDB8fHww" },
    { id: 2, name: "Hotel Bedspread", cat: "Bedsheets", img: "https://images.unsplash.com/photo-1601056639638-c53c50e13ead?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFicmljfGVufDB8fDB8fHww" },
    { id: 3, name: "Fine Table Linen", cat: "Linen", img: "https://images.unsplash.com/photo-1518893063132-36e46dbe2428?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhYnJpY3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: 4, name: "Raw Silk Fabric", cat: "Fabrics", img: "https://images.unsplash.com/photo-1773218373348-34db6bb11662?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhYnJpYyUyMHRleHRpbGV8ZW58MHx8MHx8fDA%3D" },
    { id: 5, name: "Satin Silk", cat: "Bedsheets", img: "https://images.unsplash.com/photo-1701964620952-c31ddd8d4bc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFicmljJTIwdGV4dGlsZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 6, name: "Damask Set", cat: "Linen", img: "https://plus.unsplash.com/premium_photo-1673429738990-2b85964723ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhYnJpYyUyMHRleHRpbGV8ZW58MHx8MHx8fDA%3D" },
    { id: 7, name: "Organic Fiber", cat: "Fabrics", img: "https://images.unsplash.com/photo-1681003564665-62848f8d481e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhYnJpYyUyMHRleHRpbGV8ZW58MHx8MHx8fDA%3D" },
    { id: 8, name: "Velvet Touch", cat: "Fabrics", img: "https://images.unsplash.com/photo-1701964619775-b18422290cf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFicmljJTIwdGV4dGlsZXxlbnwwfHwwfHx8MA%3D%3D" },
];

const Products = () => {
    useSEO(
        'Products',
        'Browse our premium collection of bedsheets, fabrics, and linen products from Parekh Linen.',
        'products, bedsheets, fabrics, linen, Egyptian cotton, high quality'
    );
    
    const [activeTab, setActiveTab] = useState('All');
    const categories = ['All', 'Fabrics', 'Bedsheets', 'Linen'];

    const filteredProducts = activeTab === 'All'
        ? allProducts
        : allProducts.filter(p => p.cat === activeTab);

    return (
        <div className="bg-white min-h-screen pt-32 pb-20 px-4 md:px-10">
            <div className="max-w-[1600px] mx-auto">
                
                {/* Minimal Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-8 gap-6">
                    <div>
                        <h1 className="text-3xl font-serif text-[#2C3E50] tracking-tight">
                            Our <span className="italic text-[#C0A080]">Collections</span>
                        </h1>
                    </div>

                    {/* Minimalist Tabs */}
                    <div className="flex gap-8 overflow-x-auto no-scrollbar">
                        {categories.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all relative ${
                                    activeTab === tab ? 'text-[#C0A080]' : 'text-gray-400 hover:text-[#2C3E50]'
                                }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <motion.div layoutId="underline" className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#C0A080]" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 4-Column Grid (Sleek & Low Height) */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                    <AnimatePresence mode='popLayout'>
                        {filteredProducts.map((p) => (
                            <motion.div
                                key={p.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group cursor-pointer"
                            >
                                {/* Horizontal Low-Height Card */}
                                <div className="relative overflow-hidden aspect-[16/10] bg-gray-50 mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-500">
                                    <img 
                                        src={p.img} 
                                        alt={p.name} 
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                                    />
                                    {/* Quick Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                {/* Content Details */}
                                <div className="space-y-1 px-1">
                                    <div className="flex justify-between items-center">
                                        <p className="text-[9px] text-[#C0A080] uppercase tracking-widest font-bold">
                                            {p.cat}
                                        </p>
                                        <div className="h-[1px] w-4 bg-gray-200 group-hover:w-8 group-hover:bg-[#C0A080] transition-all duration-500"></div>
                                    </div>
                                    <h3 className="text-sm font-medium text-[#2C3E50] group-hover:text-[#C0A080] transition-colors">
                                        {p.name}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Products;