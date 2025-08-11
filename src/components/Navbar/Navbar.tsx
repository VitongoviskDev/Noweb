// Navbar.tsx
import { useEffect, useState } from "react";
import type { NavLinkDTO } from "../../dto/NavLinkDTO";

import logo from '../../assets/images/logo.png'

import { FaBars } from "react-icons/fa";
import SquareButton from "../SquareButton";
import { MdArrowOutward } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import ZipCodeModal from "../ZipCodeModal";
import { useLocation } from "react-router-dom";
import MobileNavButton from "./MobileNavButton";
import DesktopNavButton from "./DesktopNavButton";
import ImageContainer from "../ImageContainer";
import CtaLink from "../CtaLInk";

interface NavbarProps {
    links: NavLinkDTO[];
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
            <div className="flex justify-between items-center gap-4 px-4 py-6 h-26 w-full max-w-[96rem]">
                <ImageContainer img={logo} object="contain" className="h-8 sm:h-full w-fit" />
                <ul className=" hidden lg:flex xl:justify-center gap-12 max-w-2xl">
                    {links.map((link, index) => (
                        <DesktopNavButton key={index} link={link} setSubmenu={setSubmenu} currentSubmenu={submenu} />
                    ))}
                </ul>
                <div className="flex items-center gap-4">
                    <div className="flex justify-end items-center gap-4">
                        <SquareButton callback={handleOpenModal}>  <IoSearchOutline /></SquareButton>
                        <CtaLink highlighted url="/#contact"> Get A Quote <MdArrowOutward /></CtaLink>
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
            </div>

            <div className={`
                    lg:hidden bg-white w-full px-8 transition-all duration-300 ease-in-out overflow-hidden
                    ${isOpen ? 'delay-300 max-h-96 ring-1 ring-gray-300' : 'max-h-0'}`}>
                <ul className="flex flex-col gap-4 py-4 text-right">
                    {links.map((link, index) => (
                        <MobileNavButton key={index} link={link} setSubmenu={setSubmenu} currentSubmenu={submenu} onCloseMenu={() => setIsOpen(false)} />
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;