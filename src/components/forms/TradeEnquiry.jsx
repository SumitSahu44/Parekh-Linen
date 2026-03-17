import { useForm } from 'react-hook-form'; // Install: npm install react-hook-form

const TradeEnquiry = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Enquiry Data:", data);
        alert("Enquiry Sent Successfully!");
    };

    return (
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-2xl border-t-8 border-[#2C3E50]">
            <h3 className="text-3xl font-serif text-center mb-8 text-[#2C3E50]">Bulk Trade Enquiry</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs uppercase tracking-widest font-bold mb-2">Company Name</label>
                    <input
                        {...register("company", { required: true })}
                        className={`w-full p-3 border ${errors.company ? 'border-red-500' : 'border-gray-200'} outline-none focus:border-[#C0A080]`}
                    />
                </div>

                <div>
                    <label className="block text-xs uppercase tracking-widest font-bold mb-2">Contact Person</label>
                    <input
                        {...register("name", { required: true })}
                        className="w-full p-3 border border-gray-200 outline-none focus:border-[#C0A080]"
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-widest font-bold mb-2">Product Interest</label>
                    <select {...register("interest")} className="w-full p-3 border border-gray-200 outline-none focus:border-[#C0A080] bg-white">
                        <option>Cotton Bedsheets (Bulk)</option>
                        <option>Premium Linen Fabrics</option>
                        <option>Hospitality & Hotel Linen</option>
                        <option>Export Quality Fabrics</option>
                    </select>
                </div>

                <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-widest font-bold mb-2">Requirement Details</label>
                    <textarea
                        rows="4"
                        {...register("message")}
                        className="w-full p-3 border border-gray-200 outline-none focus:border-[#C0A080]"
                        placeholder="Quantity, GSM, Dimensions..."
                    ></textarea>
                </div>

                <button className="md:col-span-2 bg-[#2C3E50] text-white py-4 font-bold tracking-[0.2em] hover:bg-[#C0A080] transition-colors duration-500">
                    SUBMIT FORM
                </button>
            </form>
        </div>
    );
};

export default TradeEnquiry;