import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Management', path: '/management' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Tenders', path: '/tender-contract' },
        { name: 'Careers', path: '/career' },
    ];

    return (
        <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white shadow-xl py-3' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className={`text-2xl font-serif font-bold tracking-tighter transition-colors ${isScrolled ? 'text-[#2C3E50]' : 'text-white'}`}>
                    PAREKH LINEN
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex gap-6 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-[11px] uppercase tracking-[0.2em] font-bold hover:text-[#C0A080] transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'
                                } ${location.pathname === link.path ? 'text-[#C0A080]' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/trade-enquiry" className="bg-[#C0A080] text-white px-5 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-[#2C3E50] transition-all ml-4">
                        Trade Enquiry
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
                    <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? 'bg-[#2C3E50]' : 'bg-white'} ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-6 h-0.5 mb-1.5 ${isScrolled ? 'bg-[#2C3E50]' : 'bg-white'} ${isOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 ${isScrolled ? 'bg-[#2C3E50]' : 'bg-white'} ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        className="fixed inset-0 bg-[#2C3E50] z-[150] flex flex-col p-10 lg:hidden"
                    >
                        <button onClick={() => setIsOpen(false)} className="self-end text-white text-4xl">&times;</button>
                        <div className="flex flex-col gap-6 mt-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white text-3xl font-serif hover:text-[#C0A080] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/trade-enquiry"
                                onClick={() => setIsOpen(false)}
                                className="mt-6 text-[#C0A080] text-lg font-bold uppercase tracking-widest border-b-2 border-[#C0A080] w-fit"
                            >
                                Trade Enquiry →
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;