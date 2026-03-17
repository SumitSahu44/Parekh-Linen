// components/sections/Hero.jsx
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=2000')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-10 text-center px-4">
                <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="text-[#C0A080] uppercase tracking-[0.3em] font-semibold text-sm mb-4 block"
                >
                    Established Excellence since 1990
                </motion.span>

                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-serif text-white mb-6"
                >
                    Parekh Linen <br />
                    <span className="italic text-4xl md:text-5xl font-light">Crafting Comfort, Delivering Quality</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-4 justify-center"
                >
                    <button className="px-8 py-3 bg-[#C0A080] text-white hover:bg-[#a88a6a] transition-all duration-300 rounded-sm">
                        Explore Collection
                    </button>
                    <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-sm">
                        Contact Us
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;