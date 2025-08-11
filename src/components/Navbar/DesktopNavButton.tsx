import React from 'react'
import type { NavLinkDTO } from '../../dto/NavLinkDTO';
import { IoIosArrowDown } from 'react-icons/io';

interface DesktopNavButtonProps {
    link: NavLinkDTO;
    setSubmenu: (buttonLabel: string) => void;
    currentSubmenu: string;
}

const DesktopNavButton: React.FC<DesktopNavButtonProps> = ({ link, setSubmenu, currentSubmenu }) => {

    const isCurrentSubmenu = () => {
        return link.submenu && link.label == currentSubmenu
    }

    return (
        <li key={link.href}
            className={`relative flex items-center gap-2`}>
            <a href={link.href}
                className={`
                    text-nowrap text-gray-700 hover:text-blue-600
                    ${location.href.includes(link.href) ? 'border-b-2 border-accent font-bold' : ''}
                `}
                onClick={() => setSubmenu('')}>
                {link.label}
            </a>
            {
                link.submenu &&
                <IoIosArrowDown
                    onClick={() => { setSubmenu(isCurrentSubmenu() ? '' : link.label) }}
                    className={`
                        transition duration-600 ease-in-out
                        ${isCurrentSubmenu() ? 'rotate-[540deg]' : ''}
                    `} />
            }
            {
                <div className={`
                    absolute top-8 left-0 w-fit bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out overflow-hidden
                    ${isCurrentSubmenu() ? 'max-h-96 ring-1 ring-gray-300 rounded-xl' : 'max-h-0 ring-0'}
                `}>
                    <ul className="flex flex-col gap-4 px-6 py-4">
                        {
                            link.submenu?.map((submenuLink, index) => (
                                <DesktopNavButton key={`${submenuLink.label}_${index}`} link={submenuLink} currentSubmenu={currentSubmenu} setSubmenu={setSubmenu} />
                            ))
                        }
                    </ul>
                </div>
            }
        </li >
    )
}

export default DesktopNavButton