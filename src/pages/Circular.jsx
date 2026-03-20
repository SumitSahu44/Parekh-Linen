import useSEO from '../hooks/useSEO';

const Circular = () => {
    useSEO(
        'Circulars & Announcements',
        'Latest circulars and announcements from Parekh Linen about products, certifications, and company updates.',
        'circulars, announcements, news, parekh linen, updates'
    );
    
    const circulars = [
        {
            date: "March 15, 2026",
            title: "Quality Assurance Notch",
            description: "Latest updates on our quality standards and certifications",
            priority: "High"
        },
        {
            date: "March 10, 2026",
            title: "New Product Launch - Organic Cotton Collection",
            description: "Introducing our eco-friendly organic cotton bedsheet range",
            priority: "Medium"
        },
        {
            date: "Feb 28, 2026",
            title: "Trade Partner Benefits Announcement",
            description: "Special discounts and incentives for our valued trade partners",
            priority: "Medium"
        },
        {
            date: "Feb 15, 2026",
            title: "Manufacturing Facility Expansion",
            description: "Our Kolkata facility has been expanded to meet growing demand",
            priority: "Low"
        }
    ];

    return (
        <div className="pt-32 pb-20">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-[#2C3E50] mb-4">Circulars & Announcements</h2>
                    <p className="text-gray-500">Stay updated with the latest news and announcements from Parekh Linen</p>
                </div>

                <div className="space-y-6">
                    {circulars.map((circular, idx) => (
                        <div 
                            key={idx}
                            className="bg-white p-8 border border-gray-200 hover:border-[#C0A080] hover:shadow-lg transition-all group cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-[#C0A080] text-xs font-bold uppercase tracking-widest mb-2">{circular.date}</p>
                                    <h3 className="text-2xl font-serif text-[#2C3E50] group-hover:text-[#C0A080] transition-colors">
                                        {circular.title}
                                    </h3>
                                </div>
                                <span className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-full ${
                                    circular.priority === 'High' ? 'bg-red-100 text-red-700' :
                                    circular.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                    'bg-green-100 text-green-700'
                                }`}>
                                    {circular.priority}
                                </span>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4">{circular.description}</p>
                            <button className="text-[#C0A080] text-sm font-semibold uppercase tracking-widest hover:text-[#2C3E50] transition-colors">
                                Read More →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Circular;
