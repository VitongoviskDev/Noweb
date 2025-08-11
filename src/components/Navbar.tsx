// Navbar.tsx
import { useEffect, useState } from "react";
import type { NavLink } from "../util/NavLink";

import logo from '../assets/images/logo.png'
import { FaBars } from "react-icons/fa";
import CtaButton from "./CtaButton";
import { MdArrowOutward } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import ZipCodeModal from "./ZipCodeModal";
import { useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

interface NavbarProps {
    links: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalShown, setModalShown] = useState(false);
    const [submenu, setSubmenu] = useState<string>('');

    const location = useLocation();

    useEffect(() => {
        console.log(location.hash);
    }, [location])

    const handleOpenModal = () => {
        setModalShown(true);
    }

    const handleCloseModal = () => {
        setModalShown(false);
    }

    return (
        <nav className="flex flex-col justify-center items-center bg-white shadow-sm fixed w-full z-10">
            {
                modalShown &&
                <ZipCodeModal onCloseModal={handleCloseModal} />
            }
            <div className="flex justify-between items-center gap-4 px-4 py-6 h-20 w-full max-w-[95rem]">

                {/* Logo */}
                <div className="xl:flex-1 h-full">
                    <img src={logo} alt="Logo" className="h-full object-contain" />
                </div>

                {/* Menu Desktop */}
                <ul className=" hidden lg:flex lg:flex-1 xl:justify-center gap-6 max-w-2xl">
                    {links.map((link) => (
                        <li key={link.href}
                            className={`relative flex items-center gap-2`}>
                            <a href={link.href}
                                className={`text-nowrap text-gray-700 hover:text-blue-600 transition
                                    ${location.pathname + location.hash == link.href ? 'border-b-2 border-accent' : ''}
                                    `}>
                                {link.label}
                            </a>
                            {
                                link.submenu && link.submenu.length > 0 &&
                                <IoIosArrowDown onClick={() => { setSubmenu(prev =>  prev == link.label ? '' : link.label) }} />
                            }
                            {
                                submenu && link.label == submenu &&
                                <div className="absolute top-8 -left-0 w-fit h-fit bg-white shadow-md">
                                    <ul className="flex flex-col gap-2 px-4 py-2">
                                        {
                                            link.submenu!.map((submenuLink, index) => (
                                                <li key={index}
                                                    className="p-2"
                                                    onClick={() => setSubmenu('')}>
                                                    <a href={submenuLink.href}
                                                        className={`text-nowrap text-gray-700 hover:text-blue-600 transition`}>
                                                        {submenuLink.label}
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            }
                        </li>
                    ))}
                </ul>

                <div className="flex-1 flex justify-end items-center gap-4">
                    <CtaButton callback={handleOpenModal}>  <IoSearchOutline /></CtaButton>
                    <CtaButton highlighted url="/#ContactSection"> Get A Quote <MdArrowOutward /></CtaButton>
                </div>

                {/* Burger Menu */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-black"
                    aria-label="Toggle Menu"
                >
                    <FaBars className="text-2xl" />
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white">
                    <ul className="flex flex-col gap-4 py-4">
                        {links.map((link) => (
                            <li
                                key={link.href}
                                className={`
                                    p-2 
                                    ${location.pathname + location.hash == link.href ? 'border-l-5 border-accent bg-accent-shade' : ''}`}>
                                <a
                                    href={link.href}
                                    className="text-gray-700 hover:text-blue-600 transition duratio-300 ease-in-out"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;