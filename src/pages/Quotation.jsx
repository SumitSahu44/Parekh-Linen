import { useState } from 'react';
import useSEO from '../hooks/useSEO';

const Quotation = () => {
    useSEO(
        'Request Quotation',
        'Get a competitive quotation for bulk orders of bedsheets and fabrics from Parekh Linen.',
        'quotation, price, bulk order, bedsheet prices, fabric pricing'
    );
    
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        productType: 'bedsheet',
        gsm: '200',
        quantity: '',
        color: '',
        threadCount: '',
        deadline: '',
        specifications: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Quotation Request:', formData);
        alert('Quotation request submitted! Our team will contact you shortly.');
        setFormData({
            companyName: '',
            contactPerson: '',
            email: '',
            phone: '',
            productType: 'bedsheet',
            gsm: '200',
            quantity: '',
            color: '',
            threadCount: '',
            deadline: '',
            specifications: ''
        });
    };

    return (
        <div className="pt-32 pb-20">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif text-[#2C3E50] mb-4">Request a Quotation</h2>
                    <p className="text-gray-500">Get competitive quotes for bulk orders with customized specifications</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white p-8 border border-gray-200 text-center">
                        <div className="text-4xl mb-4">⚡</div>
                        <h3 className="font-semibold text-[#2C3E50] mb-2">Fast Response</h3>
                        <p className="text-sm text-gray-500">Get quotation within 24 hours</p>
                    </div>
                    <div className="bg-white p-8 border border-gray-200 text-center">
                        <div className="text-4xl mb-4">💰</div>
                        <h3 className="font-semibold text-[#2C3E50] mb-2">Best Pricing</h3>
                        <p className="text-sm text-gray-500">Competitive rates for bulk orders</p>
                    </div>
                    <div className="bg-white p-8 border border-gray-200 text-center">
                        <div className="text-4xl mb-4">🎯</div>
                        <h3 className="font-semibold text-[#2C3E50] mb-2">Customization</h3>
                        <p className="text-sm text-gray-500">Tailor products to your needs</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-12 border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <label className="block text-sm font-semibold text-[#2C3E50] mb-3">Company Name *</label>
                            <input 
                                type="text" 
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                required
                                className="w-full p-4 border border-gray-300 focus:border-[#C0A080] outline-none transition-colors"
                                placeholder="Enter company name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#2C3E50] mb-3">Contact Person *</label>
                            <input 
                                type="text" 
                                name="contactPerson"
                                value={formData.contactPerson}
                                onChange={handleChange}
                                required
                                className="w-full p-4 border border-gray-300 focus:border-[#C0A080] outline-none transition-colors"
                                placeholder="Full name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#2C3E50] mb-3">Email *</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-4 border border-gray-300 focus:border-[#C0A080] outline-none transition-colors"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#2C3E50] mb-3">Phone *</label>
                            <input 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full p-4 border border-gray-300 focus:border-[#C0A080] outline-none transition-colors"
                                placeholder="Phone number"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <label className="block text-sm font-semibold text-[#2C3E50] mb-3">Product Type *</label>
                            <select 
                                name="productType"
                                value={formData.productType}
                                onChange={handleChange}
                                className="w-full p-4 border border-gray-300 focus:border-[#C0A080] outline-none transition-colors"
                            >
                                <option value="bedsheet">Bedsheet</option>
                                <option value="fabric">Fabric Roll</option>
                                <option value="linen">Linen</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#2C3E50] mb-3">Quantity *</label>
                            <input 
                                type="text" 
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                required
                                className="w-full p-4 border border-gray-300 focus:border-[#C0A080] outline-none transition-colors"
                                placeholder="e.g., 1000 pieces"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#2C3E50] mb-3">GSM</label>
                            <input 
                                type="text" 
                                name="gsm"
                                value={formData.gsm}
                                onChange={handleChange}
                                className="w-full p-4 border border-gray-300 focus:border-[#C0A080] outline-none transition-colors"
                                placeholder="Grams per square meter"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#2C3E50] mb-3">Thread Count</label>
                            <input 
                                type="text" 
                                name="threadCount"
                                value={formData.threadCount}
                                onChange={handleChange}
                                className="w-full p-4 border border-gray-300 focus:border-[#C0A080] outline-none transition-colors"
                                placeholder="e.g., 1000 TC"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#2C3E50] mb-3">Color</label>
                            <input 
                                type="text" 
                                name="color"
                                value={formData.color}
                                onChange={handleChange}
                                className="w-full p-4 border border-gray-300 focus:border-[#C0A080] outline-none transition-colors"
                                placeholder="Preferred color"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#2C3E50] mb-3">Delivery Deadline</label>
                            <input 
                                type="date" 
                                name="deadline"
                                value={formData.deadline}
                                onChange={handleChange}
                                className="w-full p-4 border border-gray-300 focus:border-[#C0A080] outline-none transition-colors"
                            />
                        </div>
                    </div>

                    <div className="mb-8">
                        <label className="block text-sm font-semibold text-[#2C3E50] mb-3">Special Specifications</label>
                        <textarea 
                            name="specifications"
                            value={formData.specifications}
                            onChange={handleChange}
                            rows="5"
                            className="w-full p-4 border border-gray-300 focus:border-[#C0A080] outline-none transition-colors"
                            placeholder="Any special requirements, certifications, or customizations?"
                        />
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-[#2C3E50] text-white py-4 uppercase font-bold tracking-widest hover:bg-[#C0A080] transition-colors"
                    >
                        Request Quotation
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Quotation;
