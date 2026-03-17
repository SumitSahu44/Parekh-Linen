import { motion } from 'framer-motion';

const ProductPreview = () => {
    const products = [
        { title: "Pure Egyptian Linen", category: "Fabrics", img: "https://media.istockphoto.com/id/1396225423/photo/colorful-gradient-of-textile-fabrics.webp?a=1&b=1&s=612x612&w=0&k=20&c=3fOmze273rpaWue2nqPZR8P9xgoaXn-Jn8C9X4B46-8=" },
        { title: "Hotel Collection Sheets", category: "Bedsheets", img: "https://media.istockphoto.com/id/942626548/photo/laundry.webp?a=1&b=1&s=612x612&w=0&k=20&c=sR2tA975am7y_E07je5HSfkEfvKrLmgO04iC61hHeWI=" },
        { title: "Organic Cotton Wraps", category: "Linen", img: "https://plus.unsplash.com/premium_photo-1754310671646-d55d96e769ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T3JnYW5pYyUyMENvdHRvbiUyMFdyYXBzJTIwTGluZW58ZW58MHx8MHx8fDA%3D" }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            {products.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="group cursor-pointer"
                >
                    <div className="relative overflow-hidden aspect-[4/5] bg-gray-100">
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button className="bg-white text-black px-6 py-2 text-xs font-bold uppercase tracking-tighter">View Collection</button>
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-[#C0A080] text-xs uppercase tracking-widest mb-1">{item.category}</p>
                        <h3 className="text-xl font-serif text-[#2C3E50]">{item.title}</h3>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default ProductPreview;