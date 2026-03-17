import { motion } from 'framer-motion';

const Management = () => {
    const team = [
        { name: "Rajesh Parekh", role: "Managing Director", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400" },
        { name: "Sanjay Parekh", role: "Operations Head", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" },
        { name: "Anjali Mehta", role: "Design Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400" }
    ];

    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-[#2C3E50]">The Leadership Team</h2>
                    <div className="w-20 h-1 bg-[#C0A080] mx-auto mt-4"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="text-center"
                        >
                            <div className="relative mb-6 overflow-hidden aspect-[3/4]">
                                <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                            </div>
                            <h3 className="text-xl font-bold text-[#2C3E50]">{member.name}</h3>
                            <p className="text-[#C0A080] uppercase text-xs tracking-[0.2em] mt-1">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Management;