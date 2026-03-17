const Gallery = () => {
    return (
        <div className="pt-32 pb-20 px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-serif">Visual Experience</h2>
                <p className="text-[#C0A080] tracking-[0.2em] mt-2">OUR UNIT & PRODUCTS</p>
            </div>
            <div className="columns-1 md:columns-3 gap-4 space-y-4 max-w-7xl mx-auto">
                {[...Array(6)].map((_, i) => (
                    <img
                        key={i}
                        src={`https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800`}
                        alt="Gallery"
                        className="w-full rounded-sm hover:opacity-80 transition-opacity cursor-zoom-in"
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;