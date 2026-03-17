// components/sections/About.jsx
const About = () => {
    return (
        <section id="about" className="py-24 bg-white px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1673310535178-7c6069f28917?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1bGslMjBMaW5lbiUyMGNsb3Roc3xlbnwwfHwwfHx8MA%3D%3D"
                        alt="Fabric Manufacturing"
                        className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-[#2C3E50] p-8 hidden md:block">
                        <p className="text-[#C0A080] text-4xl font-bold">30+</p>
                        <p className="text-white text-sm uppercase tracking-widest">Years of Trust</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-serif text-[#2C3E50] mb-6">Redefining the Standards of Premium Linen</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        At Parekh Linen, based in the heart of Kolkata, we specialize in manufacturing and supplying world-class bedsheets and textiles. Our legacy is built on the pillars of quality, innovation, and customer satisfaction.
                    </p>
                    <ul className="space-y-4 mb-8">
                        {['100% Organic Fabrics', 'Global Supply Network', 'Customized Textile Solutions'].map((item, index) => (
                            <li key={index} className="flex items-center gap-3 text-[#2C3E50] font-medium">
                                <span className="w-2 h-2 bg-[#C0A080] rounded-full" /> {item}
                            </li>
                        ))}
                    </ul>
                    <button className="text-[#C0A080] font-semibold border-b-2 border-[#C0A080] pb-1 hover:text-[#2C3E50] transition-colors">
                        Our Management Team →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;