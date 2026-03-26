import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGavel, FaClock, FaUserPlus, FaShoppingCart } from "react-icons/fa";
import useSEO from '../hooks/useSEO';

const Auction = () => {
    useSEO(
        'e-Auction',
        'Participate in online auctions for premium bedsheets and linens from Parekh Linen.',
        'auction, online bidding, premium linens'
    );
    
    const [auctionItems] = useState([
        {
            id: 1,
            title: 'Premium Egyptian Cotton Bedsheet Set',
            currentBid: 2500,
            startingPrice: 1500,
            endsWith: '2d 3h 45m',
            bids: 12,
            image: 'https://images.unsplash.com/photo-1669763437072-802a9b128d68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UHJlbWl1bSUyMEVneXB0aWFuJTIwQ290dG9uJTIwQmVkc2hlZXQlMjBTZXR8ZW58MHx8MHx8fDA%3D'
        },
        {
            id: 2,
            title: 'Luxury 1000 TC White Linen',
            currentBid: 3200,
            startingPrice: 2000,
            endsWith: '1d 5h 20m',
            bids: 8,
            image: 'https://plus.unsplash.com/premium_photo-1732017764574-f3a6d3a348e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UHJlbWl1bSUyMEVneXB0aWFuJTIwQ290dG9uJTIwU2V0fGVufDB8fDB8fHww'
        },
        {
            id: 3,
            title: 'Organic Cotton Bulk Lot',
            currentBid: 5500,
            startingPrice: 3500,
            endsWith: '3d 2h 10m',
            bids: 15,
            image: 'https://plus.unsplash.com/premium_photo-1701157946903-57c2821d71b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGluZW58ZW58MHx8MHx8fDA%3D'
        },
        {
            id: 4,
            title: 'Jacquard Weave Collection',
            currentBid: 1800,
            startingPrice: 1000,
            endsWith: '6h 30m',
            bids: 5,
            image: 'https://images.unsplash.com/photo-1591625591034-75d303d2e1a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGluZW58ZW58MHx8MHx8fDA%3D'
        },
        {
            id: 5,
            title: 'Hotel Grade Bedsheet Bundle',
            currentBid: 4200,
            startingPrice: 2500,
            endsWith: '2d 8h 15m',
            bids: 18,
            image: 'https://plus.unsplash.com/premium_photo-1674747086512-5f73de8f7350?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGluZW58ZW58MHx8MHx8fDA%3D'
        },
        {
            id: 6,
            title: 'Sateen Weave Luxury Linen',
            currentBid: 3500,
            startingPrice: 2000,
            endsWith: '1d 12h 50m',
            bids: 10,
            image: 'https://plus.unsplash.com/premium_photo-1674747086515-5fa9f1363978?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGluZW58ZW58MHx8MHx8fDA%3D'
        }
    ]);

    return (
        <div className="pt-32 pb-20 bg-[#FDFBF7]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-[#2C3E50] mb-4">
                        <span className="lowercase">e</span>-Auction
                    </h2>
                    <p className="text-gray-500 text-lg mb-8">
                        Bid for premium linens and exclusive collections
                    </p>
                    <button className="px-8 py-4 bg-[#C0A080] text-white font-bold uppercase tracking-widest hover:bg-[#2C3E50] transition">
                        Start Bidding Today
                    </button>
                </div>

                {/* Auction Items */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {auctionItems.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:border-[#C0A080] transition"
                        >

                            {/* Image */}
                            <div className="relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-56 object-cover"
                                />

                                {/* Timer Badge */}
                                <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 text-xs font-semibold flex items-center gap-1 shadow">
                                    <FaClock className="text-[#C0A080]" />
                                    {item.endsWith}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h4 className="font-semibold text-[#2C3E50] mb-3 line-clamp-2 hover:text-[#C0A080] transition">
                                    {item.title}
                                </h4>

                                {/* Pricing */}
                                <div className="mb-4">
                                    <p className="text-xs text-gray-500 uppercase mb-1">
                                        Current Bid
                                    </p>
                                    <p className="text-2xl font-bold text-[#C0A080]">
                                        ₹{item.currentBid.toLocaleString()}
                                    </p>
                                </div>

                                <div className="flex justify-between text-sm mb-4">
                                    <div>
                                        <p className="text-gray-500 text-xs">Start</p>
                                        <p className="font-semibold">₹{item.startingPrice}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs">Bids</p>
                                        <p className="font-semibold">{item.bids}</p>
                                    </div>
                                </div>

                                <button className="w-full bg-[#2C3E50] text-white py-3 uppercase text-xs font-bold tracking-widest hover:bg-[#C0A080] transition">
                                    Place Bid
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* How It Works */}
                <div className="bg-gradient-to-r from-[#2C3E50] to-[#1A252F] text-white py-16 px-10 rounded-lg">
                    <h3 className="text-2xl font-serif text-center mb-12">
                        How <span className="lowercase">e</span>-Auction Works
                    </h3>

                    <div className="grid md:grid-cols-4 gap-10 text-center">
                        
                        <div>
                            <FaUserPlus className="text-3xl mx-auto mb-4 text-[#C0A080]" />
                            <p className="font-semibold mb-2">Register</p>
                            <p className="text-sm opacity-80">Create your account</p>
                        </div>

                        <div>
                            <FaGavel className="text-3xl mx-auto mb-4 text-[#C0A080]" />
                            <p className="font-semibold mb-2">Browse & Bid</p>
                            <p className="text-sm opacity-80">Explore and place bids</p>
                        </div>

                        <div>
                            <FaClock className="text-3xl mx-auto mb-4 text-[#C0A080]" />
                            <p className="font-semibold mb-2">Wait for End</p>
                            <p className="text-sm opacity-80">Highest bid wins</p>
                        </div>

                        <div>
                            <FaShoppingCart className="text-3xl mx-auto mb-4 text-[#C0A080]" />
                            <p className="font-semibold mb-2">Checkout</p>
                            <p className="text-sm opacity-80">Complete purchase</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Auction;