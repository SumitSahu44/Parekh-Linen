import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import axios from 'axios'; 

const TradeEnquiry = () => {
    // --- SECURE CONFIG ---
    // Har website ke frontend mein bas ye 2 lines badalni hain
    const siteConfig = {
        siteId: "PAREKH_LINEN_04", // Backend is ID se config uthayega
        siteUrl: window.location.origin // Automatic current website ka URL le lega
    };
       
    const [formData, setFormData] = useState({
        traderName: '',
        businessName: '',
        businessAddress: '', 
        gstNo: '',
        mobileNo: '',
        email: '',
        enquiryType: 'For Bulk Purchase', 
        gstCertificate: null
    });

    const [status, setStatus] = useState({ loading: false, message: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, gstCertificate: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, message: '' });

        // FormData object for secure multi-part delivery (Files + Data)
        const data = new FormData();
        
        // 1. Meta Data (Identifies which of the 7 sites sent this)
        data.append('site_id', siteConfig.siteId);
        data.append('origin_url', siteConfig.siteUrl);
        
        // 2. User Form Data
        Object.keys(formData).forEach(key => {
            if (key === 'gstCertificate') {
                data.append('file', formData[key]); // Backend 'file' field check karega
            } else {
                data.append(key, formData[key]);
            }
        });

        try {
            // Aapka Common Backend Endpoint
            // const res = await axios.post('https://api.parekhgroup.com/v1/enquiry', data);
            
            console.log("Pushing to Common Backend:", {
                source: siteConfig.siteId,
                payload: formData
            });

            // Mock success response
            setTimeout(() => {
                alert(`Request received from ${siteConfig.siteId}`);
                setStatus({ loading: false, message: 'Enquiry Sent Successfully' });
                // e.target.reset(); // Form clear karne ke liye
            }, 1000);

        } catch (err) {
            console.error("Backend Error:", err);
            setStatus({ loading: false, message: 'Submission Failed. Please try again.' });
        }
    };

    return (
        <div className="bg-white min-h-screen font-sans">
           {/* --- HERO SECTION --- */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-[#1A252F]">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2000" 
                        alt="Background" 
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A252F]/90"></div>
                </div>

                <div className="relative z-10 text-center px-6">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[#C0A080] text-xs md:text-sm font-bold tracking-[0.5em] uppercase mb-4 block"
                    >
                        Trade Enquiry
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-serif text-white mb-4"
                    >
                        Partner With <span className="italic text-[#C0A080]">Parekh Group</span>
                    </motion.h1>
                </div>
            </section>

            {/* --- TRUST STATS BAR --- */}
            <div className="relative z-20 -mt-12 max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 bg-white shadow-2xl py-8 rounded-sm border-b-4 border-[#C0A080]">
                    {[
                        { label: "Countries Exported", value: "25+" },
                        { label: "Annual Production", value: "1M+ Mtr" },
                        { label: "Partner Hotels", value: "500+" },
                        { label: "Years Excellence", value: "30+" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center border-r last:border-0 border-gray-100 px-4">
                            <h3 className="text-2xl font-serif text-[#2C3E50]">{stat.value}</h3>
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 font-bold">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- FORM SECTION --- */}
            <section className="py-16 px-6 bg-[#F8FAFC]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12">
                        
                        {/* Left: Contact Info */}
                        <div className="lg:col-span-1 space-y-12">
                            <div>
                                <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#C0A080] mb-6">Contact Office</h3>
                                <div className="space-y-4 text-[#2C3E50]">
                                    <p className="text-sm leading-relaxed">
                                        <strong>Headquarters:</strong><br />
                                        Parekh Tower, Textile Market Area,<br />
                                        Surat, Gujarat - 395002
                                    </p>
                                    <p className="text-sm"><strong>Email:</strong> exports@parekhlinen.com</p>
                                    <p className="text-sm"><strong>Support:</strong> +91 98765 43210</p>
                                </div>
                            </div>

                            <div className="p-8 bg-[#2C3E50] text-white rounded-sm">
                                <h4 className="font-serif text-xl mb-4 text-[#C0A080]">Custom Solutions?</h4>
                                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                                    Need custom thread counts or specific Pantone shades? Our R&D team is ready to help.
                                </p>
                            </div>
                        </div>

                        {/* Right: The Form */}
                        <div className="lg:col-span-2 bg-white p-8 md:p-12 shadow-sm border border-gray-100">
                            <form className="grid md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                                    <input type="text" className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm" placeholder="John Doe" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Company Name</label>
                                    <input type="text" className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm" placeholder="Acme Textiles Ltd" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Work Email</label>
                                    <input type="email" className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm" placeholder="john@company.com" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Phone Number</label>
                                    <input type="tel" className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm" placeholder="+91 00000 00000" />
                                </div>
                                <div className="flex flex-col gap-2 md:col-span-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Interest Category</label>
                                    <select className="border-b-2 border-gray-100 py-3 bg-transparent outline-none focus:border-[#C0A080] text-sm cursor-pointer">
                                        <option>Hospitality & Hotel Linen</option>
                                        <option>Bulk Fabric Export</option>
                                        <option>Custom Manufacturing (OEM)</option>
                                        <option>Institutional Supply</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2 md:col-span-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Message / Requirements</label>
                                    <textarea rows="4" className="border-2 border-gray-100 p-4 rounded-sm focus:border-[#C0A080] outline-none transition-colors text-sm bg-gray-50/30" placeholder="Please describe your volume requirements..."></textarea>
                                </div>
                                <div className="md:col-span-2 pt-4">
                                    <motion.button 
                                        whileHover={{ backgroundColor: '#1A252F' }}
                                        className="w-full bg-[#C0A080] text-white py-5 text-[11px] font-bold uppercase tracking-[0.5em] transition-all shadow-xl"
                                    >
                                        Send Professional Inquiry
                                    </motion.button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default TradeEnquiry;