import { useState, useEffect } from 'react';

export default function Navbar() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setShowButton(window.scrollY > 250);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
        <div className="navbar bg-transparent shadow-none md:bg-white md:shadow-sm fixed z-40">
            {/* button navigation on top */}
            {showButton && (
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='btn rounded-full bg-blue-600 text-white fixed z-50 right-3 bottom-3'><i className="fa-solid fa-arrow-up text-xl"></i></button>
            )}
            {/* end button navigation on top */}

            <div className="navbar-start" />
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="#hero">Beranda</a></li>
                        <li><a href="#profesi">Profesi</a></li>
                        <li><a href="#join">Gabung</a></li>
                        <li><a href="https://www.unusa.ac.id" target="_blank" className="font-semibold text-green-600">UNUSA <i className="fa-solid fa-arrow-up-right-from-square text-green-600"></i></a></li>
                    </ul>
                </div>
            <div className="navbar-end" />
        </div>
        </>
    );
}