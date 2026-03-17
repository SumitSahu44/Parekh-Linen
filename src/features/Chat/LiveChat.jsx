import { useState } from 'react';

const LiveChat = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-28 right-8 z-50">
            {isOpen && (
                <div className="bg-white w-72 h-96 shadow-2xl rounded-t-xl overflow-hidden border border-gray-100 flex flex-col">
                    <div className="bg-[#2C3E50] p-4 text-white flex justify-between">
                        <span className="font-bold">Parekh Support</span>
                        <button onClick={() => setIsOpen(false)}>×</button>
                    </div>
                    <div className="flex-grow p-4 text-sm text-gray-500 italic">
                        Hi! How can we help you with your linen requirements today?
                    </div>
                    <div className="p-2 border-t flex">
                        <input type="text" placeholder="Type here..." className="w-full p-2 outline-none text-sm" />
                    </div>
                </div>
            )}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="mt-2 w-14 h-14 bg-[#2C3E50] text-white rounded-full shadow-lg flex items-center justify-center hover:rotate-12 transition-transform"
            >
                💬
            </button>
        </div>
    );
};