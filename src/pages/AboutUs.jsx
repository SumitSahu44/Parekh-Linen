import { motion } from 'framer-motion';
import useSEO from '../hooks/useSEO';

const AboutUs = () => {
    useSEO(
        'About Us',
        'Learn about Parekh Linen - 30+ years of excellence in manufacturing premium bedsheets and fabrics in Kolkata.',
        'about parekh linen, textile manufacturer Kolkata, history, quality, sustainability'
    );
    const values = [
        { title: "Quality", desc: "Highest GSM & Thread Count standards." },
        { title: "Legacy", desc: "30+ years in the heart of Kolkata's textile market." },
        { title: "Sustainability", desc: "Eco-friendly dyeing and sourcing." }
    ];

    return (
        <div className="pt-24">
            {/* Vision Section */}
            <section className="py-20 bg-[#f9f7f4] px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl font-serif text-[#2C3E50] mb-8"
                    >
                        Our Heritage in Every Thread
                    </motion.h1>
                    <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-lg italic">
                        "Since 1990, Parekh Linen has been a pioneer in the textile industry, blending traditional Kolkata craftsmanship with modern manufacturing technology."
                    </p>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
                {values.map((v, i) => (
                    <div key={i} className="p-10 border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all text-center">
                        <div className="w-12 h-12 bg-[#C0A080] rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold">{i + 1}</div>
                        <h3 className="text-xl font-bold text-[#2C3E50] mb-4 uppercase tracking-widest">{v.title}</h3>
                        <p className="text-gray-500 text-sm">{v.desc}</p>
                    </div>
                ))}
            </section>

            {/* Management Section */}
            <section className="py-20 bg-[#2C3E50] text-white px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-serif mb-12 border-l-4 border-[#C0A080] pl-6">Our Management</h2>
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800" alt="Founder" className="rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" />
                        <div>
                            <h3 className="text-2xl font-serif text-[#C0A080]">Mr. HC Parekh</h3>
                            <p className="text-sm uppercase tracking-widest mb-6 opacity-70">Founder & Managing Director</p>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                With over three decades of experience, Mr. Parekh has led the company from a small local unit to a pan-India supplier. His vision is to make Parekh Linen synonymous with luxury and durability.
                            </p>
                            <button className="px-8 py-3 border border-[#C0A080] text-[#C0A080] hover:bg-[#C0A080] hover:text-white transition-all uppercase text-xs tracking-widest">Read Full Message</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;