import { motion } from 'framer-motion';

const Career = () => {
    const jobs = [
        { title: "Production Manager", location: "Kolkata, India", type: "Full-Time" },
        { title: "Textile Designer", location: "Remote / On-site", type: "Contract" },
        { title: "Quality Assurance Lead", location: "Kolkata, India", type: "Full-Time" }
    ];

    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-20">

                    {/* Left: Open Positions */}
                    <div>
                        <h2 className="text-4xl font-serif text-[#2C3E50] mb-4">Join Our Legacy</h2>
                        <p className="text-gray-500 mb-10">We are always looking for passionate individuals to join our textile family.</p>

                        <div className="space-y-4">
                            {jobs.map((job, i) => (
                                <div key={i} className="p-6 bg-slate-50 border-r-4 border-transparent hover:border-[#C0A080] hover:bg-white hover:shadow-md transition-all cursor-pointer group">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h4 className="text-lg font-bold text-[#2C3E50] group-hover:text-[#C0A080] transition-colors">{job.title}</h4>
                                            <p className="text-sm text-gray-400">{job.location} | {job.type}</p>
                                        </div>
                                        <span className="text-2xl text-gray-300 group-hover:translate-x-2 transition-transform">→</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Application Form */}
                    <div className="bg-white p-8 shadow-2xl rounded-sm border border-gray-100">
                        <h3 className="text-2xl font-serif mb-6 text-[#2C3E50]">Apply Now</h3>
                        <form className="space-y-5">
                            <input type="text" placeholder="Full Name" className="w-full p-3 bg-gray-50 outline-none border-b-2 border-transparent focus:border-[#C0A080] transition-all" />
                            <input type="email" placeholder="Email Address" className="w-full p-3 bg-gray-50 outline-none border-b-2 border-transparent focus:border-[#C0A080] transition-all" />
                            <div>
                                <label className="text-xs font-bold text-gray-400 uppercase block mb-2">Upload Resume (PDF)</label>
                                <input type="file" className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-[#C0A080] file:text-white hover:file:bg-[#2C3E50]" />
                            </div>
                            <textarea placeholder="Tell us why you want to join Parekh Linen..." rows="4" className="w-full p-3 bg-gray-50 outline-none border-b-2 border-transparent focus:border-[#C0A080] transition-all"></textarea>
                            <button className="w-full py-4 bg-[#2C3E50] text-white font-bold tracking-[0.2em] hover:shadow-xl transition-all">SEND APPLICATION</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Career;