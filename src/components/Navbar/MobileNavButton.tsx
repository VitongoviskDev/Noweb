import React from 'react'
import type { NavLinkDTO } from '../../dto/NavLinkDTO';
import { IoIosArrowDown } from 'react-icons/io';

interface MobileNavButtonProps {
    link: NavLinkDTO;
    setSubmenu: (buttonLabel: string) => void;
    currentSubmenu: string;
    onCloseMenu: () => void;
}

const MobileNavButton: React.FC<MobileNavButtonProps> = ({ link, setSubmenu, currentSubmenu, onCloseMenu }) => {
    const isCurrentSubmenu = () => {
        return link.submenu && link.label == currentSubmenu
    }

    const handleCloseMenu = () => {
        setSubmenu('')
        onCloseMenu();
    }

    return (
        <li key={link.href}
            className={`relative flex flex-col items-start`}>
            <div className='flex items-center gap-2'>

                <a href={link.href}
                    className={`
                    text-nowrap text-gray-700 hover:text-blue-600
                    ${location.pathname + location.hash == link.href ? 'border-b-2 border-accent font-bold' : ''}
                    `}
                    onClick={handleCloseMenu}>
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
            </div>
            {
                <div className={`
                    flex w-full bg-white shadow-md rounded-md transition-all duration-300 ease-in-out overflow-hidden
                    ${isCurrentSubmenu() ? 'delay-300 max-h-96 ring-1 ring-gray-300' : 'max-h-0'}
                `}>
                    <ul className="flex flex-col gap-4 px-6 py-4">
                        {
                            link.submenu?.map((submenuLink, index) => (
                                <MobileNavButton key={`${submenuLink.label}_${index}`} link={submenuLink} currentSubmenu={currentSubmenu} setSubmenu={setSubmenu} onCloseMenu={onCloseMenu}/>
                            ))
                        }
                    </ul>
                </div>
            }
        </li >
    )
}

export default MobileNavButton