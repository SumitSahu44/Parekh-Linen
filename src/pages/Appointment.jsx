const Appointment = () => {
    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-serif text-[#2C3E50]">Visit with Appointment</h2>
                <p className="text-gray-500 mt-4">Schedule a visit to our Kolkata factory or head office.</p>
            </div>

            <div className="max-w-2xl mx-auto bg-white border border-gray-100 p-8 shadow-sm">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <label className="text-[10px] uppercase font-bold text-gray-400">Preferred Date</label>
                        <input type="date" className="w-full mt-2 p-3 bg-gray-50 rounded-sm outline-none" />
                    </div>
                    <div>
                        <label className="text-[10px] uppercase font-bold text-gray-400">Time Slot</label>
                        <select className="w-full mt-2 p-3 bg-gray-50 rounded-sm outline-none">
                            <option>Morning (10 AM - 1 PM)</option>
                            <option>Afternoon (2 PM - 5 PM)</option>
                        </select>
                    </div>
                </div>
                <input type="text" placeholder="Reason for Visit" className="w-full mb-8 p-3 bg-gray-50 rounded-sm outline-none border-l-4 border-[#C0A080]" />
                <button className="w-full py-4 bg-[#2C3E50] text-white tracking-widest font-bold hover:shadow-2xl transition-all">
                    CONFIRM APPOINTMENT
                </button>
                <p className="text-[10px] text-gray-400 mt-4 text-center italic">
                    *A confirmation email will be sent within 24 hours.
                </p>
            </div>
        </div>
    );
};

export default Appointment;