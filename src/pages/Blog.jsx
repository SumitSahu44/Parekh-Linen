const Blog = () => {
    const posts = [
        { date: "March 10, 2026", title: "Future of Organic Cotton in India", category: "Trends" },
        { date: "Feb 28, 2026", title: "Maintaining 1000 Thread Count: A Guide", category: "Maintenance" },
        { date: "Jan 15, 2026", title: "Parekh Linen Wins Quality Award", category: "News" }
    ];

    return (
        <div className="pt-32 pb-20 max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-serif text-center mb-16 text-[#2C3E50]">Linen Insights & Circulars</h2>
            <div className="space-y-12">
                {posts.map((post, i) => (
                    <article key={i} className="group cursor-pointer">
                        <p className="text-[#C0A080] text-xs font-bold uppercase tracking-widest mb-2">{post.category} — {post.date}</p>
                        <h3 className="text-2xl font-serif text-[#2C3E50] group-hover:text-[#C0A080] transition-colors">{post.title}</h3>
                        <p className="mt-4 text-gray-500 leading-relaxed max-w-2xl">Read our latest insights about the evolving textile industry and our contributions to quality standards...</p>
                        <div className="mt-6 w-10 h-[2px] bg-[#2C3E50] group-hover:w-20 transition-all"></div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Blog;