import { useState } from "react";
import userImg from "../../assets/userProfile/user.png"
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const navItmes = <>
        <li><a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a></li>
        <li><a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">MasterPrice</a></li>
        <li><a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">CustomPrice</a></li>
        <li><a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a></li>
        <li><a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reports</a></li>
    </>

    return (
        <div>
            <nav className="bg-gray-800 md:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center h-16">
                        <div className="hidden md:block">
                            <div className="flex items-baseline space-x-4">
                                <ul className="flex space-x-4">
                                    {/* Navbar all li list  */}
                                    {navItmes}
                                </ul>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6 cursor-pointer">
                                <img className="w-8 h-8 rounded-full" src={userImg} alt="" />
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button onClick={toggleMenu} className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-1 rounded inline-flex items-center justify-center focus:outline-none">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <ul className="flex flex-col space-y-1">
                            {/* Navbar all li list */}
                            {
                                navItmes
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;