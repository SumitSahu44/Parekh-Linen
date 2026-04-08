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

            {/* --- FORM SECTION --- */}
            <section className="py-16 px-6 bg-[#F8FAFC]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12">
                        
                        {/* Info Column */}
                        <div className="lg:col-span-1 space-y-8 text-slate-800">
                            <div className="bg-white p-8 border-l-4 border-[#C0A080] shadow-sm">
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-[#C0A080] mb-4">Official Verification</h3>
                                <p className="text-sm leading-relaxed">
                                    Aapki enquiry directly hamare common trade portal par process hogi. 
                                    Please ensure all business details are authentic.
                                </p>
                            </div>
                        </div>

                        {/* Form Column */}
                    {/* Right Form Column */}
<div className="lg:col-span-2 bg-white p-8 md:p-12 shadow-2xl border border-gray-200 rounded-lg">
    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-x-8 gap-y-8">
        
        {/* Name of the Trader */}
        <div className="flex flex-col gap-2">
            <label className="text-[11px] uppercase tracking-[0.15em] font-bold text-slate-600">Name of the Trader</label>
            <input 
                required 
                name="traderName" 
                onChange={handleInputChange} 
                type="text" 
                className="border-2 border-slate-200 rounded-md px-4 py-3 focus:border-[#C0A080] focus:ring-1 focus:ring-[#C0A080] outline-none text-slate-800 text-sm transition-all placeholder:text-slate-300" 
                placeholder="e.g. Rajesh Kumar"
            />
        </div>

        {/* Business Name */}
        <div className="flex flex-col gap-2">
            <label className="text-[11px] uppercase tracking-[0.15em] font-bold text-slate-600">Business Name</label>
            <input 
                required 
                name="businessName" 
                onChange={handleInputChange} 
                type="text" 
                className="border-2 border-slate-200 rounded-md px-4 py-3 focus:border-[#C0A080] focus:ring-1 focus:ring-[#C0A080] outline-none text-slate-800 text-sm transition-all placeholder:text-slate-300" 
                placeholder="Legal Business Entity"
            />
        </div>

        {/* GST Number */}
        <div className="flex flex-col gap-2">
            <label className="text-[11px] uppercase tracking-[0.15em] font-bold text-slate-600">GST No.</label>
            <input 
                required 
                name="gstNo" 
                onChange={handleInputChange} 
                type="text" 
                className="border-2 border-slate-200 rounded-md px-4 py-3 focus:border-[#C0A080] focus:ring-1 focus:ring-[#C0A080] outline-none text-slate-800 text-sm transition-all placeholder:text-slate-300 uppercase" 
                placeholder="22AAAAA0000A1Z5"
            />
        </div>

        {/* Mobile Number */}
        <div className="flex flex-col gap-2">
            <label className="text-[11px] uppercase tracking-[0.15em] font-bold text-slate-600">Mobile No.</label>
            <input 
                required 
                name="mobileNo" 
                onChange={handleInputChange} 
                type="tel" 
                className="border-2 border-slate-200 rounded-md px-4 py-3 focus:border-[#C0A080] focus:ring-1 focus:ring-[#C0A080] outline-none text-slate-800 text-sm transition-all placeholder:text-slate-300" 
                placeholder="+91 00000 00000"
            />
        </div>

        {/* Business Address */}
        <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[11px] uppercase tracking-[0.15em] font-bold text-slate-600">Business Address with Pin code</label>
            <input 
                required 
                name="businessAddress" 
                onChange={handleInputChange} 
                type="text" 
                className="border-2 border-slate-200 rounded-md px-4 py-3 focus:border-[#C0A080] focus:ring-1 focus:ring-[#C0A080] outline-none text-slate-800 text-sm transition-all placeholder:text-slate-300" 
                placeholder="Flat/Office No, Street, City, State - Pincode"
            />
        </div>

        {/* Email ID */}
        <div className="flex flex-col gap-2">
            <label className="text-[11px] uppercase tracking-[0.15em] font-bold text-slate-600">Email ID</label>
            <input 
                required 
                name="email" 
                onChange={handleInputChange} 
                type="email" 
                className="border-2 border-slate-200 rounded-md px-4 py-3 focus:border-[#C0A080] focus:ring-1 focus:ring-[#C0A080] outline-none text-slate-800 text-sm transition-all placeholder:text-slate-300" 
                placeholder="name@business.com"
            />
        </div>

        {/* Enquiry Options */}
        <div className="flex flex-col gap-2">
            <label className="text-[11px] uppercase tracking-[0.15em] font-bold text-slate-600">Enquiry Options</label>
            <select 
                name="enquiryType" 
                onChange={handleInputChange} 
                className="border-2 border-slate-200 rounded-md px-4 py-3 focus:border-[#C0A080] focus:ring-1 focus:ring-[#C0A080] outline-none bg-white text-slate-800 text-sm cursor-pointer"
            >
                <option value="For Bulk Purchase">For Bulk Purchase</option>
                <option value="For Retail Purchase">For Retail Purchase</option>
                <option value="For Job Work Contract">For Job Work Contract</option>
                <option value="Others">Others</option>
            </select>
        </div>

        {/* Upload GST Certificate */}
        <div className="flex flex-col gap-3 md:col-span-2 mt-4 p-6 bg-slate-50 border-2 border-dashed border-slate-300 rounded-lg group hover:border-[#C0A080] transition-colors">
            <label className="text-[11px] uppercase tracking-[0.15em] font-bold text-slate-600">Upload GST Certificate</label>
            <input 
                required 
                type="file" 
                accept=".pdf,.jpg,.jpeg,.png" 
                onChange={handleFileChange} 
                className="text-xs text-slate-500 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#1A252F] file:text-white hover:file:bg-[#C0A080]" 
            />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 pt-6">
            <motion.button 
                whileHover={{ scale: 1.01, backgroundColor: '#C0A080' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status.loading}
                className="w-full bg-[#1A252F] text-white py-5 text-[12px] font-bold uppercase tracking-[0.5em] transition-all shadow-xl disabled:bg-gray-400 rounded-md"
            >
                {status.loading ? "Processing..." : "Submit Trade Enquiry"}
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